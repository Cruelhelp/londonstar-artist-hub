import { Play, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import artistGlam from "@/assets/artist-glam.jpg";
import artistPromo from "@/assets/artist-promo.jpg";

const ArtistSpotlight = () => {
  const artists = [
    {
      name: "Wahriah Queen",
      genre: "Dancehall / R&B",
      image: artistGlam,
      streams: "2.1M",
      followers: "180K",
      latest: "Money Rain",
      description: "Rising star from Jamaica bringing authentic Caribbean vibes to the global stage.",
      project: "Touch Down EP",
      instagram: "https://www.instagram.com/wahriah_queen",
      youtube: "https://www.youtube.com/@wahriahqueenvevo5984",
      youtubeVideo: "https://www.youtube.com/watch?v=Y8OQmcWQfTI",
      tiktok: "https://www.tiktok.com/@wahriah_queenofficial",
      bookingContact: "regulusshinesbright@gmail.com",
      bookingWhatsApp: "876-373-6661"
    },
    {
      name: "Featured Artist",
      genre: "Dancehall / Pop", 
      image: artistPromo,
      streams: "3.1M",
      followers: "180K",
      latest: "Island Dreams",
      description: "Dynamic performer with chart-topping hits across Jamaica and the USA.",
      instagram: "#",
      youtube: "#"
    }
  ];

  return (
    <section id="artists" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">Our Artists</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the incredible talent signed to London Star Records. 
            From rising stars to established performers, our artists are making waves globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {artists.map((artist, index) => (
            <Card key={index} className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="hero" size="sm" className="mb-3 hover:scale-105 transition-transform duration-200">
                    <Play className="mr-2 h-4 w-4" />
                    Play Latest
                  </Button>
                  <div className="flex space-x-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="text-white hover:text-primary hover:bg-white/20"
                      onClick={() => window.open(artist.instagram, '_blank')}
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="text-white hover:text-primary hover:bg-white/20"
                      onClick={() => window.open(artist.youtube, '_blank')}
                    >
                      <Youtube className="h-4 w-4" />
                    </Button>
                    {artist.youtubeVideo && (
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="text-white hover:text-primary hover:bg-white/20"
                        onClick={() => window.open(artist.youtubeVideo, '_blank')}
                        title="Watch Music Video"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{artist.name}</h3>
                    <p className="text-primary font-semibold">{artist.genre}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{artist.streams} streams</div>
                    <div>{artist.followers} followers</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{artist.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Latest Release:</span>
                    <p className="font-semibold text-foreground">{artist.latest}</p>
                    {artist.project && (
                      <p className="text-sm text-muted-foreground">from "{artist.project}"</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {artist.youtubeVideo && (
                      <Button 
                        variant="cta" 
                        size="sm"
                        onClick={() => window.open(artist.youtubeVideo, '_blank')}
                      >
                        Watch Video
                      </Button>
                    )}
                    {artist.bookingContact && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(`mailto:${artist.bookingContact}`, '_blank')}
                      >
                        Book Now
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-foreground border-border hover:bg-primary hover:text-primary-foreground">
            View All Artists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;