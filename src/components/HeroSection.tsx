import { Play, Music, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import artistHero from "@/assets/artist-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={artistHero}
          alt="Featured Artist"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              New Release
            </span>
          </div>
          
          <h1 className="text-hero text-white mb-6">
            Wahriah Queen
            <br />
            <span className="text-primary">Money Rain</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Experience the explosive new single "Money Rain" from Wahriah Queen. 
            Available on all digital platforms - the sound that's taking Jamaica by storm.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              variant="hero" 
              className="animate-pulse-glow"
              onClick={() => window.open("https://youtube.com/@WahriahQueen", '_blank')}
            >
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button 
              variant="outline" 
              className="text-black border-white hover:bg-white hover:text-black"
              onClick={() => window.open("https://youtu.be/Y8OQmcWQfTI", '_blank')}
            >
              <Music className="mr-2 h-5 w-5" />
              Touch Down EP
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-primary hover:bg-white/10"
              onClick={() => window.open("https://youtu.be/Y8OQmcWQfTI", '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Artist Info */}
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Music className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Wahriah Queen</h3>
                <p className="text-white/70 mb-2">Latest Single - "Money Rain"</p>
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