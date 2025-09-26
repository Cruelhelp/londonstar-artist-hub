import { Play, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import artistGlam from "@/assets/artist-glam.jpg";
import artistPromo from "@/assets/artist-promo.jpg";

const ArtistSpotlight = () => {
  const artists = [
    {
      name: "Rising Star",
      genre: "Afrobeats / R&B",
      image: artistGlam,
      streams: "5.2M",
      followers: "350K",
      latest: "Fire & Ice",
      description: "Multi-talented artist bringing fresh Caribbean sounds to the global stage."
    },
    {
      name: "Featured Artist",
      genre: "Dancehall / Pop",
      image: artistPromo,
      streams: "3.1M",
      followers: "180K",
      latest: "Island Dreams",
      description: "Dynamic performer with chart-topping hits across Jamaica and the USA."
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
            <Card key={index} className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="hero" size="sm" className="mb-3">
                    <Play className="mr-2 h-4 w-4" />
                    Play Latest
                  </Button>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/20">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/20">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/20">
                      <Youtube className="h-4 w-4" />
                    </Button>
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
                  </div>
                  <Button variant="cta" size="sm">
                    View Profile
                  </Button>
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