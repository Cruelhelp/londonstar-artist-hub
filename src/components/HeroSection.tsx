import { Play, Music, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import MiniPlayer from "@/components/MiniPlayer";
import artistHero from "@/assets/artist-hero.jpg";

const HeroSection = () => {
  const featuredArtist = {
    name: "Wahriah Queen",
    track: "Money Rain",
    project: "Touch Down EP",
    description: "Experience the explosive new single \"Money Rain\" from Wahriah Queen. Available on all digital platforms - the sound that's taking Jamaica by storm.",
    image: artistHero,
    youtubeChannel: "https://www.youtube.com/@wahriahqueenvevo5984",
    musicVideo: "https://www.youtube.com/watch?v=Y8OQmcWQfTI",
    instagram: "https://www.instagram.com/wahriah_queen",
    tiktok: "https://www.tiktok.com/@wahriah_queenofficial"
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={featuredArtist.image}
          alt={`Featured Artist - ${featuredArtist.name}`}
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
        <div className="absolute inset-0 animate-shimmer"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 animate-fade-in">
        <div className="max-w-5xl">
          <div className="mb-8 animate-slide-up">
            <span className="inline-block bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-md border border-primary/30 hover:bg-primary/30 transition-all duration-500 hover:scale-105 cursor-pointer animate-pulse-glow">
              🎵 Featured Artist
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up leading-tight" style={{animationDelay: '0.2s'}}>
            {featuredArtist.name}
            <br />
            <span className="text-primary animate-shimmer bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">{featuredArtist.track}</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
            {featuredArtist.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 lg:gap-6 mb-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="hero" 
              size="lg"
              className="animate-pulse-glow hover:scale-110 transition-all duration-500 text-base px-8 py-4"
              onClick={() => window.open(featuredArtist.youtubeChannel, '_blank')}
            >
              <Play className="mr-3 h-6 w-6" />
              Listen Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 text-base px-8 py-4"
              onClick={() => window.open(featuredArtist.musicVideo, '_blank')}
            >
              <Music className="mr-3 h-6 w-6" />
              Touch Down EP
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white hover:text-primary hover:bg-white/10 hover:scale-110 transition-all duration-500 text-base px-8 py-4"
              onClick={() => window.open(featuredArtist.musicVideo, '_blank')}
            >
              <ExternalLink className="mr-3 h-6 w-6" />
              Watch Video
            </Button>
          </div>

          {/* Artist Info and Mini Player */}
          <div className="grid md:grid-cols-2 gap-8 animate-scale-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-black/60 transition-all duration-500 hover:border-primary/30 group">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-float">
                  <Music className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{featuredArtist.name}</h3>
                  <p className="text-white/80 mb-4 text-lg">Latest Single - "{featuredArtist.track}"</p>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• Executive Producer: London Star Records</div>
                    <div>• Available All Platforms</div>
                    <div>• Mixed & Mastered by: EAMz, Intravert Music Label</div>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:text-primary hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      onClick={() => window.open(featuredArtist.instagram, '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <span className="text-white/70 text-sm">@wahriah_queen</span>
                  </div>
                </div>
              </div>
            </div>
            
            <MiniPlayer
              title={featuredArtist.track}
              artist={featuredArtist.name}
              youtubeUrl={featuredArtist.musicVideo}
            />
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