import Header from "@/components/Header";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Latest News
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
                Stay updated with the latest news and announcements from London Star Records.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;