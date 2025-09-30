import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import FeedSection from "@/components/FeedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ArtistSpotlight />
        <FeedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;