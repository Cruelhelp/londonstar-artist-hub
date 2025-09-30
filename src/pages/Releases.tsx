import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Download, ExternalLink } from "lucide-react";
import artistHero from "@/assets/artist-hero.jpg";
import artistGlam from "@/assets/artist-glam.jpg";

const Releases = () => {
  const releases = [
    {
      title: "Money Rain",
      artist: "Wahriah Queen",
      type: "Single",
      releaseDate: "2024",
      cover: artistHero,
      description: "The explosive new single that's taking Jamaica by storm",
      project: "Touch Down EP",
      producers: "EAMz, Alpharunehgrung",
      youtubeUrl: "https://www.youtube.com/watch?v=Y8OQmcWQfTI",
      platforms: ["Spotify", "Apple Music", "YouTube", "Audiomack"]
    },
    {
      title: "Touch Down EP",
      artist: "Wahriah Queen", 
      type: "EP",
      releaseDate: "2024",
      cover: artistGlam,
      description: "A complete project showcasing authentic Caribbean vibes",
      tracks: 6,
      producers: "EAMz, Intravert Music Label",
      platforms: ["Spotify", "Apple Music", "YouTube", "Audiomack"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
                Latest <span className="text-primary">Releases</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Discover the hottest tracks and albums from London Star Records artists. 
                From chart-topping singles to complete projects, explore the sounds defining modern Caribbean music.
              </p>
            </div>
          </div>
        </section>

        {/* Releases Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {releases.map((release, index) => (
                <Card key={index} className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={release.cover}
                      alt={`${release.title} cover`}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {release.youtubeUrl && (
                        <Button 
                          variant="hero" 
                          size="sm" 
                          className="mb-3"
                          onClick={() => window.open(release.youtubeUrl, '_blank')}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Listen Now
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{release.title}</h3>
                        <p className="text-primary font-semibold">{release.artist}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          {release.type}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{release.description}</p>
                    
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        Released: {release.releaseDate}
                      </div>
                      {release.project && (
                        <div className="text-muted-foreground">
                          Project: <span className="text-foreground font-medium">{release.project}</span>
                        </div>
                      )}
                      {release.tracks && (
                        <div className="text-muted-foreground">
                          Tracks: <span className="text-foreground font-medium">{release.tracks}</span>
                        </div>
                      )}
                      <div className="text-muted-foreground">
                        Produced by: <span className="text-foreground font-medium">{release.producers}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Available on:</p>
                      <div className="flex flex-wrap gap-2">
                        {release.platforms.map((platform, platformIndex) => (
                          <span 
                            key={platformIndex}
                            className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      {release.youtubeUrl && (
                        <Button 
                          variant="cta" 
                          size="sm"
                          onClick={() => window.open(release.youtubeUrl, '_blank')}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Play
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://linktr.ee/wahriahqueen', '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        All Platforms
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-6">
              Submit Your Music
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Have a track that deserves to be heard? London Star Records is always looking for fresh talent and exceptional music.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('mailto:regulusshinesbright@gmail.com', '_blank')}
            >
              Submit Your Demo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Releases;