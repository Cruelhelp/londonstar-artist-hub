import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Releases = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Latest Releases
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
                Check out the hottest tracks and albums from London Star Records artists.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Releases;