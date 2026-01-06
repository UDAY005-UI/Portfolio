import logo from "../../assets/logo.png";

export default function Navbar() {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id:"about" },
    { label: "Projects", id: "project" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
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
    <nav className="fixed top-0 left-0 z-50 w-full bg-white">
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
