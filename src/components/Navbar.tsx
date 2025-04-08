
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl">
            <span className="text-omnigen-purple">Omnigen</span>
            <span className="text-omnigen-teal">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-foreground hover:text-omnigen-purple transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-foreground hover:text-omnigen-purple transition-colors"
          >
            Services
          </Link>
          <Link
            to="/case-studies"
            className="text-foreground hover:text-omnigen-purple transition-colors"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-omnigen-purple transition-colors"
          >
            About Us
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-omnigen-purple hover:bg-omnigen-darkpurple text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 pt-20 space-y-6">
          <Link
            to="/"
            className="text-lg font-medium text-foreground hover:text-omnigen-purple"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium text-foreground hover:text-omnigen-purple"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/case-studies"
            className="text-lg font-medium text-foreground hover:text-omnigen-purple"
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-foreground hover:text-omnigen-purple"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Button className="bg-omnigen-purple hover:bg-omnigen-darkpurple text-white mt-4 w-full">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
