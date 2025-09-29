import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtistSpotlight from "@/components/ArtistSpotlight";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Music, Users, Award } from "lucide-react";

const Artists = () => {
  const stats = [
    { icon: Users, label: "Signed Artists", value: "15+" },
    { icon: Music, label: "Released Tracks", value: "50+" },
    { icon: Play, label: "Total Streams", value: "10M+" },
    { icon: Award, label: "Chart Hits", value: "8" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Artists</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Discover the incredible talent from Jamaica and USA that makes London Star Records shine. 
                From emerging stars to established performers, our artists are pushing boundaries and 
                creating the sounds that define modern Caribbean music.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Artist Spotlight */}
        <ArtistSpotlight />

        {/* Call to Action */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-6">
              Join Our Roster
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Are you an artist ready to take your career to the next level? 
              London Star Records is always looking for exceptional talent.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('mailto:regulusshinesbright@gmail.com', '_blank')}
            >
              Submit Your Music
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Artists;