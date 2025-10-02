import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@londonstarrecords.studio",
      description: "For bookings, submissions, and general inquiries",
      action: () => window.open('mailto:info@londonstarrecords.studio', '_blank')
    },
    {
      icon: Phone,
      title: "WhatsApp",
      details: "+1 (347) 558-8518",
      description: "Direct line for urgent matters and bookings",
      action: () => window.open('https://wa.me/13475588518', '_blank')
    },
    {
      icon: MapPin,
      title: "Location", 
      details: "Jamaica & USA",
      description: "Bridging Caribbean talent with global opportunities",
      action: null
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@londonstarja",
      description: "Follow us for the latest updates and behind-the-scenes",
      action: () => window.open('https://www.instagram.com/londonstarja', '_blank')
    }
  ];

  const departments = [
    {
      title: "Artist Bookings",
      description: "Book our artists for shows, events, and collaborations",
      contact: "JAM-EAZY Entertainment",
      email: "info@londonstarrecords.studio",
      whatsapp: "13475588518"
    },
    {
      title: "Music Submissions",
      description: "Submit your demos and tracks for consideration",
      contact: "A&R Department",
      email: "info@londonstarrecords.studio",
      note: "Please include artist bio and social media links"
    },
    {
      title: "Production Services",
      description: "Recording, mixing, mastering, and production inquiries",
      contact: "Production Team",
      email: "info@londonstarrecords.studio",
      note: "State your project requirements and timeline"
    },
    {
      title: "Press & Media",
      description: "Media inquiries, interviews, and press opportunities",
      contact: "Media Relations",
      email: "info@londonstarrecords.studio",
      note: "Include publication details and deadline"
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
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Ready to work with London Star Records? Whether you're an artist looking for representation, 
                a venue seeking talent, or a collaborator with an exciting project, we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className={`text-center p-6 hover:shadow-lg transition-all duration-300 ${
                    contact.action ? 'cursor-pointer hover:scale-105' : ''
                  }`}
                  onClick={contact.action || undefined}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{contact.title}</h3>
                  <p className="text-primary font-semibold mb-2">{contact.details}</p>
                  <p className="text-muted-foreground text-sm">{contact.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact Departments
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reach out to the right team for your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {departments.map((dept, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{dept.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{dept.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm text-muted-foreground">Contact:</span>
                        <p className="font-semibold text-foreground">{dept.contact}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Email:</span>
                        <p className="font-semibold text-primary">{dept.email}</p>
                      </div>
                      {dept.whatsapp && (
                        <div>
                          <span className="text-sm text-muted-foreground">WhatsApp:</span>
                          <p className="font-semibold text-foreground">{dept.whatsapp}</p>
                        </div>
                      )}
                      {dept.note && (
                        <div>
                          <span className="text-sm text-muted-foreground">Note:</span>
                          <p className="text-sm text-muted-foreground italic">{dept.note}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant="cta" 
                        size="sm"
                        onClick={() => window.open(`mailto:${dept.email}`, '_blank')}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                      {dept.whatsapp && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(`https://wa.me/${dept.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-secondary-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                Don't wait - reach out today and let's discuss how London Star Records 
                can help elevate your music career to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('mailto:info@londonstarrecords.studio', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                  onClick={() => window.open('https://wa.me/13475588518', '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Now
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

export default Contact;