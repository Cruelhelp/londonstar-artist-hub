import { Play, Music, ExternalLink, Instagram, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MiniPlayer from "@/components/MiniPlayer";
import artistHero from "@/assets/artist-hero.jpg";
import artistGlam from "@/assets/artist-glam.jpg";
import artistPromo from "@/assets/artist-promo.jpg";
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl">
            <div className="mb-8">
              <span className="inline-block bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-md border border-primary/30">
                🎵 London Star Records
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Elevating Caribbean Music
              <br />
              <span className="text-primary">To Global Heights</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              London Star Records bridges Jamaica and the USA, discovering and developing exceptional Caribbean talent for the world stage.
            </p>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="bg-black/50 backdrop-blur-lg border-white/20 hover:bg-black/60 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 lg:gap-6 mb-16">
              <Button 
                variant="hero" 
                size="lg"
                className="text-base px-8 py-4"
                onClick={() => window.open('mailto:regulusshinesbright@gmail.com', '_blank')}
              >
                <Users className="mr-3 h-6 w-6" />
                Work With Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black text-base px-8 py-4"
                onClick={() => window.open('https://www.instagram.com/londonstarja', '_blank')}
              >
                <Instagram className="mr-3 h-6 w-6" />
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artist Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">Featured Artist</h2>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
              Discover our latest spotlight artist making waves in the Caribbean music scene
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Artist Info */}
            <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <Music className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">{featuredArtist.name}</h3>
                  <p className="text-primary text-xl mb-4">Latest Single - "{featuredArtist.track}"</p>
                  <p className="text-white/80 mb-6 text-lg leading-relaxed">{featuredArtist.description}</p>
                  <div className="space-y-2 text-sm text-white/70 mb-6">
                    <div>• Executive Producer: London Star Records</div>
                    <div>• Available All Platforms</div>
                    <div>• Mixed & Mastered by: EAMz, Intravert Music Label</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="hero"
                      size="sm"
                      onClick={() => window.open(featuredArtist.musicVideo, '_blank')}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Video
                    </Button>
                     <Button
                       size="sm"
                       variant="outline"
                       className="text-white border-white hover:bg-white hover:text-black"
                       onClick={() => window.open(featuredArtist.instagram, '_blank')}
                     >
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </div>
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