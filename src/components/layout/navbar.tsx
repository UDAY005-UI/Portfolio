import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY < lastScrollY || currentScrollY < 50) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", id: "Hero" },
    { label: "About Me", id:"About" },
    { label: "Projects", id: "Project" },
    { label: "Skills", id: "Skills" },
    { label: "Contact", id: "Contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const NAVBAR_HEIGHT = 80
      const yOffset = -NAVBAR_HEIGHT;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md transition-transform duration-700 ease-in-out ${show ? "trasnlate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto flex h-20 items-center justify-start">
        <img src={logo} alt="Logo" className="ml-20 -translate-y-2 h-8 w-auto object-contain" />

        <ul className="flex gap-12 text-lg pl-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="text-[#222222] transition-all duration-300 hover:text-blue-600"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
