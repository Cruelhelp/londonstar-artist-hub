import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, apikey",
};

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  artistName: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  // Handle preflight CORS requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { status: 200, headers: corsHeaders });
  }

  try {
    const data: ApplicationData = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.artistName || !data.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Build email
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

    // Load API key from environment
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is not set in environment");

      return new Response(
        JSON.stringify({
          success: false,
          message: "Server misconfigured. Please try again later.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Call Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "London Star Records <no-reply@londonstarrecords.studio>", // must match verified domain
        to: ["info@londonstarrecords.studio"],
        reply_to: data.email,
        subject: emailSubject,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("❌ Resend API error:", errorText);

      return new Response(
        JSON.stringify({
          success: false,
          message: "Application saved but failed to send email. We will contact you manually.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // ✅ Success
    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully!",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("❌ Error processing application:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process application. Please try again." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
