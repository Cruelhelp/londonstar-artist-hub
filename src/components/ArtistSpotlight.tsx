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
    <section id="artists" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-foreground mb-8 tracking-tight">Our Artists</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover the incredible talent signed to London Star Records. 
            From rising stars to established performers, our artists are making waves globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {artists.map((artist, index) => (
            <Card key={index} className="group overflow-hidden card-modern rounded-3xl hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button className="btn-modern mb-4 px-6 py-3 text-base font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                    <Play className="mr-3 h-5 w-5" />
                    Play Latest
                  </Button>
                  <div className="flex space-x-4">
                    <Button 
                      size="icon" 
                      className="glass text-white hover:text-primary hover:bg-white/20 rounded-full w-12 h-12"
                      onClick={() => window.open(artist.instagram, '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button 
                      size="icon" 
                      className="glass text-white hover:text-primary hover:bg-white/20 rounded-full w-12 h-12"
                      onClick={() => window.open(artist.youtube, '_blank')}
                    >
                      <Youtube className="h-5 w-5" />
                    </Button>
                    {artist.youtubeVideo && (
                      <Button 
                        size="icon" 
                        className="glass text-white hover:text-primary hover:bg-white/20 rounded-full w-12 h-12"
                        onClick={() => window.open(artist.youtubeVideo, '_blank')}
                        title="Watch Music Video"
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{artist.name}</h3>
                    <p className="text-emphasis text-lg font-semibold">{artist.genre}</p>
                  </div>
                  <div className="text-right text-base text-muted-foreground">
                    <div className="font-semibold">{artist.streams} streams</div>
                    <div className="font-semibold">{artist.followers} followers</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{artist.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base text-muted-foreground">Latest Release:</span>
                    <p className="font-bold text-foreground text-lg">{artist.latest}</p>
                    {artist.project && (
                      <p className="text-base text-muted-foreground">from "{artist.project}"</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    {artist.youtubeVideo && (
                      <Button 
                        className="btn-modern px-6 py-3 text-base font-semibold rounded-xl"
                        onClick={() => window.open(artist.youtubeVideo, '_blank')}
                      >
                        Watch Video
                      </Button>
                    )}
                    {artist.bookingContact && (
                      <Button 
                        className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 text-base font-semibold rounded-xl"
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

        <div className="text-center mt-16">
          <Button className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 px-10 py-4 text-lg font-semibold rounded-2xl backdrop-blur-md transition-all duration-300">
            View All Artists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;