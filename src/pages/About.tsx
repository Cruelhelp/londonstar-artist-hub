import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamMembers = [
    {
      name: "Marcus Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in the music industry, connecting Caribbean talent with global audiences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      contact: "marcus@londonstarrecords.com"
    },
    {
      name: "Sarah Chen",
      role: "Head of Marketing",
      bio: "Strategic marketing expert specializing in artist development and digital campaign management.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9a53938?w=400&h=400&fit=crop&crop=face",
      contact: "sarah@londonstarrecords.com"
    },
    {
      name: "EAMz",
      role: "Lead Audio Engineer",
      bio: "Award-winning producer and sound engineer, crafting the signature London Star Records sound.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      contact: "eamz@londonstarrecords.com"
    },
    {
      name: "Alpharunehgrung",
      role: "Music Producer",
      bio: "Creative force behind hit compositions, blending traditional Caribbean rhythms with modern production.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      contact: "alpha@londonstarrecords.com"
    }
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
                About <span className="text-primary">London Star</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                London Star Records is a dynamic music label bridging Jamaica and the USA, 
                dedicated to elevating Caribbean talent to the global stage. We specialize in 
                discovering, developing, and promoting exceptional artists who represent the 
                authentic sound and spirit of the Caribbean.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center animate-slide-up">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To showcase authentic Caribbean music and culture to the world, 
                  providing artists with the platform they deserve.
                </p>
              </div>
              <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the leading record label for Caribbean artists, 
                  fostering global recognition and commercial success.
                </p>
              </div>
              <div className="text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Authenticity, creativity, and excellence drive everything we do, 
                  ensuring our artists maintain their unique voice.
                </p>
              </div>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
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
                  onClick={() => window.open('mailto:regulusshinesbright@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                  onClick={() => window.open('https://wa.me/18763736661', '_blank')}
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