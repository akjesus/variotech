import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (href) => location.pathname === href;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const pageTitle =
      navLinks.find((link) => isActive(link.href))?.name ||
      "Variotech Solutionss";
    document.title = `${pageTitle} - Variotech Solutionss`;
  }, [location.pathname]);

  return (
    <header className="fixed top-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Title */}
        <a href="/">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-30 h-10 object-cover"
            />
          </div>
        </a>

        {/* Medium Menu */}
        <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-2 p-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-gray-700 font-medium hover:text-[#E89F14] transition text-sm ${
                isActive(link.href) ?
                  "text-[#330202] bg-white px-2 py-1 rounded"
                : "text-white"
              }`}
            >
              {link.name.toLocaleUpperCase()}
            </a>
          ))}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-col space-y-2 ">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-700 font-medium hover:text-[#E89F14] transition ${
                  isActive(link.href) ?
                    "text-[#330202] bg-white px-2 py-1 rounded"
                  : "text-white"
                }`}
              >
                {link.name.toLocaleUpperCase()}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            <X size={28} />
          : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <nav className="grid grid-cols-2 gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium hover:text-black text-center py-2 px-3 rounded hover:bg-gray-100 transition ${
                  isActive(link.href) ? "text-[#330202] bg-white" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
