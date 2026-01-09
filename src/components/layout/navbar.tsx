import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShow(true);
      } else {
        setShow(false);
        setMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", id: "Hero" },
    { label: "About Me", id: "About" },
    { label: "Skills", id: "Skills" },
    { label: "Projects", id: "Projects" },
    { label: "Academics", id: "Academics" },
    { label: "Contact", id: "Contact" },
  ];

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md transition-transform duration-700 ease-in-out ${show ? "translate-y-0" : "-translate-y-full"} `}
    >
      <div className="flex h-20 items-center gap-16 px-6 lg:px-12">
        <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
        <ul className="text-md hidden items-center gap-6 md:flex lg:gap-12 lg:text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollToSection(item.id)}
                className="text-[#222222]"
              >
                {item.label}
              </button>
            </li>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#222222]"
          >
            Resume
          </a>
        </ul>
        <button
          className="ml-auto text-xl md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}
      >
        <ul className="flex flex-col gap-6 px-6 pt-4 pb-6 text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollToSection(item.id)}
                className="text-[#222222]"
              >
                {item.label}
              </button>
            </li>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#222222]"
          >
            Resume
          </a>
        </ul>
      </div>
    </nav>
  );
}
