import { Play, Music, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import artistHero from "@/assets/artist-hero.jpg";

const HeroSection = () => {
  const featuredArtist = {
    name: "Wahriah Queen",
    track: "Money Rain",
    project: "Touch Down EP",
    description: "Experience the explosive new single \"Money Rain\" from Wahriah Queen. Available on all digital platforms - the sound that's taking Jamaica by storm.",
    image: artistHero,
    youtubeChannel: "https://youtube.com/@WahriahQueen",
    musicVideo: "https://youtu.be/Y8OQmcWQfTI"
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featuredArtist.image}
          alt={`Featured Artist - ${featuredArtist.name}`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 animate-fade-in">
        <div className="max-w-4xl">
          <div className="mb-6 animate-slide-up">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300">
              🎵 Featured Artist
            </span>
          </div>
          
          <h1 className="text-hero text-white mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {featuredArtist.name}
            <br />
            <span className="text-primary">{featuredArtist.track}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
            {featuredArtist.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="hero" 
              className="animate-pulse-glow hover:scale-105 transition-all duration-300"
              onClick={() => window.open(featuredArtist.youtubeChannel, '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button 
              variant="outline" 
              className="text-black border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              onClick={() => window.open(featuredArtist.musicVideo, '_blank')}
            >
              <Music className="mr-2 h-5 w-5" />
              Touch Down EP
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-primary hover:bg-white/10 hover:scale-105 transition-all duration-300"
              onClick={() => window.open(featuredArtist.musicVideo, '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Artist Info */}
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-black/50 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.8s'}}>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Music className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{featuredArtist.name}</h3>
                <p className="text-white/70 mb-2">Latest Single - "{featuredArtist.track}"</p>
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <span>• Executive Producer: London Star Records</span>
                  <span>• Available All Platforms</span>
                  <span>• Rising</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;