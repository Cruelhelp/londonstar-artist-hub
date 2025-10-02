import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import londonStarLogo from "@/assets/london-star-logo.png";
import teamCeo from "@/assets/team-ceo.png";
import teamManager from "@/assets/team-manager.png";
import teamBookings from "@/assets/team-bookings.png";
import teamEngineer from "@/assets/team-engineer.png";
import teamHairMakeup from "@/assets/team-hair-makeup.png";

const About = () => {
  const teamMembers = [
    {
      name: "Christopher Moore",
      role: "CEO & Founder",
      bio: "Industry leader connecting Caribbean talent with global audiences and building artist careers.",
      image: teamCeo,
      contact: "info@londonstarrecords.studio"
    },
    {
      name: "Simone Campbell",
      role: "Manager",
      bio: "Strategic management expert specializing in artist development and talent coordination.",
      image: teamManager,
      contact: "info@londonstarrecords.studio"
    },
    {
      name: "Ryan Small",
      role: "Bookings & Events",
      bio: "Expert in artist bookings and event coordination, ensuring seamless performances.",
      image: teamBookings,
      contact: "info@londonstarrecords.studio"
    },
    {
      name: "Geovauney Elliotte",
      role: "Lead Audio Engineer",
      bio: "Producer and sound engineer crafting the signature London Star Records sound.",
      image: teamEngineer,
      contact: "info@londonstarrecords.studio"
    },
    {
      name: "Altian Gordon",
      role: "Hair & Makeup Artist",
      bio: "Creative stylist bringing artist visions to life with stunning hair and makeup designs.",
      image: teamHairMakeup,
      contact: "info@londonstarrecords.studio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <img
                src={londonStarLogo}
                alt="London Star Records"
                className="h-32 md:h-40 w-auto mx-auto mb-8"
                style={{
                  filter: 'brightness(1.15) contrast(1.1) drop-shadow(0 0 20px rgba(255, 215, 0, 0.3)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))'
                }}
              />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="text-emphasis text-4xl md:text-6xl">London Star Records</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A music label connecting Jamaica and the USA, helping Caribbean artists 
                reach global audiences. We work with talented musicians and provide them 
                with production, promotion, and distribution services to grow their careers 
                in the music industry.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="interactive-card text-center p-8 animate-fade-in-scale">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 animate-gentle-glow">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To connect Caribbean music and culture with worldwide audiences, 
                  giving artists the support and platform to succeed.
                </p>
              </Card>
              <Card className="interactive-card text-center p-8 animate-fade-in-scale" style={{animationDelay: '0.15s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 animate-gentle-glow">
                  <Eye className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading record label for Caribbean artists, 
                  helping them gain recognition and build successful music careers.
                </p>
              </Card>
              <Card className="interactive-card text-center p-8 animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 animate-gentle-glow">
                  <Heart className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Authenticity, creativity, and quality in everything we do, 
                  helping our artists maintain their unique voice and style.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
                The passionate professionals behind London Star Records, dedicated to 
                bringing you the best in Caribbean music.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="interactive-card group overflow-hidden animate-fade-in-scale"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-background">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        objectPosition: member.name === "Ryan Small" ? "center 20%" : 
                                      member.name === "Altian Gordon" ? "center 25%" : 
                                      "center",
                        filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
                      }}
                    />
                  </div>
                  
                  <CardContent className="p-6 bg-card">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-emphasis font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary/30 hover:bg-primary/10"
                      onClick={() => window.open(`mailto:${member.contact}`, '_blank')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-secondary-foreground mb-6">
                Work With Us
              </h2>
              <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                Ready to take your music career to the next level? Get in touch with our team 
                and let's discuss how London Star Records can help you shine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('mailto:info@londonstarrecords.studio', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                  onClick={() => window.open('https://wa.me/13475588518', '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;