import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import londonStarLogo from "@/assets/london-star-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Artists", href: "/artists" },
    { name: "Releases", href: "/releases" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-background/30 border-b border-border/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            <img
              src={londonStarLogo}
              alt="London Star Records"
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              style={{
                filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(255, 140, 0, 0.6)) drop-shadow(0 0 16px rgba(255, 140, 0, 0.4))'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/90 hover:text-primary transition-all duration-500 font-medium relative group text-base lg:text-lg animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-dark border-t border-border/30 animate-fade-in">
            <nav className="px-4 py-4 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground/90 hover:text-primary transition-all duration-300 font-medium py-4 px-4 rounded-lg hover:bg-primary/10 animate-slide-up text-lg"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;