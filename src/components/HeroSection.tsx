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
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl">
            <div className="mb-8">
              <span className="inline-block glass text-primary px-8 py-4 rounded-full text-base font-semibold border border-primary/30 animate-pulse-glow">
                🎵 London Star Records
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Elevating Caribbean Music
              <br />
              <span className="text-emphasis animate-gradient">To Global Heights</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl leading-relaxed font-light">
              London Star Records bridges Jamaica and the USA, discovering and developing exceptional Caribbean talent for the world stage.
            </p>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {services.map((service, index) => (
                <Card key={index} className="glass hover:glass-dark transition-all duration-500 hover:scale-105 card-modern">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <service.icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-white font-bold mb-3 text-lg">{service.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
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

          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* Artist Info */}
            <div className="card-modern rounded-3xl p-10">
              <div className="flex items-start space-x-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-3xl flex items-center justify-center shadow-2xl">
                  <Music className="h-12 w-12 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-foreground mb-3">{featuredArtist.name}</h3>
                  <p className="text-emphasis text-2xl mb-6">Latest Single - "{featuredArtist.track}"</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{featuredArtist.description}</p>
                  <div className="space-y-3 text-base text-muted-foreground mb-8">
                    <div>• Executive Producer: London Star Records</div>
                    <div>• Available All Platforms</div>
                    <div>• Mixed & Mastered by: EAMz, Intravert Music Label</div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Button
                      className="btn-modern px-8 py-4 text-base font-semibold rounded-xl"
                      onClick={() => window.open(featuredArtist.musicVideo, '_blank')}
                    >
                      <Play className="mr-3 h-5 w-5" />
                      Watch Video
                    </Button>
                     <Button
                       className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-base font-semibold rounded-xl"
                       onClick={() => window.open(featuredArtist.instagram, '_blank')}
                     >
                      <Instagram className="h-5 w-5" />
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