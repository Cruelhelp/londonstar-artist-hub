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
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={londonStarLogo} 
                alt="London Star Records" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">London Star Records</h3>
                <p className="text-sm text-secondary-foreground/70">Elevating Talent Globally</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              London Star Records is dedicated to discovering and nurturing exceptional talent 
              from Jamaica and the USA, bringing their unique sounds to the world stage.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kingston, Jamaica & Miami, USA</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@londonstarrecords.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (305) 555-0123</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-2">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-secondary-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => window.open('https://www.instagram.com/londonstarja', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-secondary-foreground hover:text-primary hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-secondary-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => window.open('https://www.youtube.com/@wahriahqueenvevo5984', '_blank')}
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-secondary-foreground hover:text-primary hover:bg-primary/10">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 London Star Records. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
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