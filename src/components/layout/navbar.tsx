import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    const distance = 15; 
    
    mouseX.set((e.clientX - centerX) / 2.5); 
    mouseY.set((e.clientY - centerY) / 2.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: show ? 0 : -80, opacity: show ? 1 : 0 }}
      transition={{
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md"
    >
      <div className="flex h-20 items-center gap-16 px-6 lg:px-12">
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex items-center justify-center p-4 -ml-4 cursor-pointer"
        >
          <motion.img
            src={logo}
            alt="Logo"
            style={{ x: moveX, y: moveY }}
            className="h-8 w-auto object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          />
        </div>

        <ul className="hidden items-center gap-6 md:flex lg:gap-12 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button
                whileHover={{ y: -1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => handleScrollToSection(item.id)}
                className="text-[#222222]"
              >
                {item.label}
              </motion.button>
            </li>
          ))}

          <motion.a
            whileHover={{ y: -1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#222222]"
          >
            Resume
          </motion.a>
        </ul>

        <button
          className="ml-auto text-xl md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-6 px-6 pt-4 pb-6 text-base">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.button
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() => handleScrollToSection(item.id)}
                    className="text-[#222222]"
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}

              <motion.a
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222222]"
              >
                Resume
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}