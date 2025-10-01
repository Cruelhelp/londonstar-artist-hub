import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import FeedSection from "@/components/FeedSection";
import SignUpForm from "@/components/SignUpForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <SignUpForm />
        <ArtistSpotlight />
        <FeedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;