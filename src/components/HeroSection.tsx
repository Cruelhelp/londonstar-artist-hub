import { Star, Award, Users, Instagram, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MiniPlayer from "@/components/MiniPlayer";
import artistHero from "@/assets/artist-hero.jpg";
import artistGlam from "@/assets/artist-glam.jpg";
import artistPromo from "@/assets/artist-promo.jpg";
import londonStarLogo from "@/assets/london-star-logo.png";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    artistHero,
    artistGlam,
    artistPromo
  ];

  const services = [
    {
      icon: Star,
      title: "Artist Development",
      description: "Comprehensive talent development from discovery to stardom"
    },
    {
      icon: Music,
      title: "Production Services",
      description: "World-class recording, mixing, and mastering facilities"
    },
    {
      icon: Award,
      title: "Marketing & Promotion",
      description: "Strategic campaigns to maximize reach and impact"
    },
    {
      icon: Users,
      title: "Distribution",
      description: "Global distribution across all major streaming platforms"
    }
  ];

  const featuredArtist = {
    name: "Wahriah Queen",
    track: "Money Rain",
    project: "Touch Down EP",
    description: "Rising star from Jamaica bringing authentic Caribbean vibes to the global stage.",
    image: artistHero,
    youtubeChannel: "https://www.youtube.com/@wahriahqueenvevo5984",
    musicVideo: "https://www.youtube.com/watch?v=Y8OQmcWQfTI",
    instagram: "https://www.instagram.com/wahriah_queen",
    tiktok: "https://www.tiktok.com/@wahriah_queenofficial"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl">
            {/* Logo Integration */}
            <div className="flex flex-col items-center justify-center mb-12 animate-fade-in">
              <img
                src={londonStarLogo}
                alt="London Star Records"
                className="h-32 md:h-40 lg:h-48 w-auto mb-6"
                style={{
                  filter: 'brightness(1.15) contrast(1.1) drop-shadow(0 0 20px rgba(255, 215, 0, 0.4)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.2))'
                }}
              />
              <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Elevating Caribbean Music
              <br />
              <span className="text-emphasis">To Global Heights</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl leading-relaxed font-light">
              London Star Records bridges Jamaica and the USA, discovering and developing exceptional Caribbean talent for the world stage.
            </p>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="interactive-card animate-fade-in-scale"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4 animate-gentle-glow">
                      <service.icon className="h-7 w-7 text-black" />
                    </div>
                    <h3 className="text-white font-bold mb-2 text-base">{service.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-6 lg:gap-8 mb-20">
              <Button 
                className="btn-modern px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                size="lg"
                onClick={() => window.open('mailto:regulusshinesbright@gmail.com', '_blank')}
              >
                <Users className="mr-4 h-6 w-6" />
                Work With Us
              </Button>
              <Button 
                className="glass border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-2xl backdrop-blur-md transition-all duration-300 hover:border-primary/50"
                size="lg"
                onClick={() => window.open('https://www.instagram.com/londonstarja', '_blank')}
              >
                <Instagram className="mr-4 h-6 w-6" />
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artist Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">Featured Artist</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our latest spotlight artist making waves in the Caribbean music scene
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            {/* Artist Info */}
            <div className="interactive-card rounded-2xl p-8 animate-fade-in-scale">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{featuredArtist.name}</h3>
                  <p className="text-emphasis text-xl mb-4">Latest Single - "{featuredArtist.track}"</p>
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed">{featuredArtist.description}</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Executive Producer: London Star Records</div>
                  <div>• Available All Platforms</div>
                  <div>• Mixed & Mastered by: EAMz, Intravert Music Label</div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    className="px-6 py-3 text-sm font-semibold rounded-lg border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(featuredArtist.instagram, '_blank')}
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Follow Artist
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Mini Player */}
            <MiniPlayer
              title={featuredArtist.track}
              artist={featuredArtist.name}
              youtubeUrl={featuredArtist.musicVideo}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;