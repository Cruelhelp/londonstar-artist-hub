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
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-50 transition-all duration-300 hover:bg-background/98">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={londonStarLogo} 
              alt="London Star Records" 
              className="h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-all duration-500 font-medium relative group text-sm lg:text-base animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
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
          <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border/30 animate-fade-in">
            <nav className="px-4 py-4 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-3 px-2 rounded-md hover:bg-primary/5 animate-slide-up"
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