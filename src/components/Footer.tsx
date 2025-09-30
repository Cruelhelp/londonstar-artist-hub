import { Music, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import londonStarLogo from "@/assets/london-star-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Artists", href: "/artists" },
    { name: "Releases", href: "/releases" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Artist Development", href: "#" },
    { name: "Music Production", href: "#" },
    { name: "Distribution", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Booking", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-muted/10 text-foreground border-t border-border/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src={londonStarLogo} 
                alt="London Star Records" 
                className="h-16 w-16 object-contain drop-shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold">London Star Records</h3>
                <p className="text-base text-muted-foreground">Elevating Talent Globally</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
              London Star Records is dedicated to discovering and nurturing exceptional talent 
              from Jamaica and the USA, bringing their unique sounds to the world stage.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 text-base">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kingston, Jamaica & Miami, USA</span>
              </div>
              <div className="flex items-center space-x-4 text-base">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@londonstarrecords.com</span>
              </div>
              <div className="flex items-center space-x-4 text-base">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (305) 555-0123</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button 
                size="icon" 
                className="glass text-foreground hover:text-primary hover:bg-primary/10 rounded-full w-12 h-12"
                onClick={() => window.open('https://www.instagram.com/londonstarja', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" className="glass text-foreground hover:text-primary hover:bg-primary/10 rounded-full w-12 h-12">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                className="glass text-foreground hover:text-primary hover:bg-primary/10 rounded-full w-12 h-12"
                onClick={() => window.open('https://www.youtube.com/@wahriahqueenvevo5984', '_blank')}
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" className="glass text-foreground hover:text-primary hover:bg-primary/10 rounded-full w-12 h-12">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-base mb-4 md:mb-0">
              © 2024 London Star Records. All rights reserved.
            </p>
            <div className="flex space-x-8 text-base">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;