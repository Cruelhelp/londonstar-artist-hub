import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  artistName: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: ApplicationData = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.artistName || !data.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Create email content
    const emailSubject = `New Artist Application - ${data.artistName}`;
    const emailBody = `
New Artist Application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Artist/Stage Name: ${data.artistName}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted on: ${new Date().toLocaleString()}
    `;

    // Send email using Resend API
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      
      // Log the application for manual follow-up
      console.log("Application received:", {
        subject: emailSubject,
        from: data.email,
        data: data,
      });

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Application received. We'll contact you soon!"
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "London Star Records <onboarding@resend.dev>",
        to: ["info@londonstarrecords.studio"],
        reply_to: data.email,
        subject: emailSubject,
        text: emailBody,
      }),
    });

    if (res.ok) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Application submitted successfully!"
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      const error = await res.text();
      console.error("Resend API error:", error);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Application received. We'll contact you soon!"
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error processing application:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process application. Please try again."
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});