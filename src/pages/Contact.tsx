import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
                Get in touch with London Star Records for bookings, collaborations, and inquiries.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto mt-16">
              <div className="bg-card p-8 rounded-lg border animate-scale-in">
                <h2 className="text-2xl font-bold mb-6 text-center">Booking Information</h2>
                <div className="space-y-4 text-center">
                  <p className="text-lg">
                    <span className="font-semibold">JAM-EAZY Entertainment</span>
                  </p>
                  <p className="text-muted-foreground">
                    WhatsApp: <a href="tel:876-373-6661" className="text-primary hover:underline">876-373-6661</a>
                  </p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:regulusshinesbright@gmail.com" className="text-primary hover:underline">regulusshinesbright@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;