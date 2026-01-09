import { motion, type Variants } from "framer-motion";

export default function Projects() {
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section
      id="Projects"
      className="w-full overflow-clip px-5 pt-30 lg:px-0"
    >
      <div className="relative flex flex-col gap-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rowVariants}
          className="grid grid-cols-1 items-center gap-10 text-center lg:grid-cols-2 lg:gap-30 lg:text-left"
        >
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <p className="text-xl">⌀ Experiences</p>
            <h1 className="text-4xl font-semibold">Explore My</h1>
            <h1 className="text-4xl font-semibold lg:translate-x-10">
              Engineering Journey ~
            </h1>
          </div>

          <div className="text-lg text-[#7B7B7B]">
            Over the past two years, I’ve been exploring web development with a
            growing interest in backend systems and application architecture.
            While debugging is rarely enjoyable, I enjoy designing backend
            logic, data flow, and overall system structure. I continue to
            improve my frontend skills while focusing on building reliable and
            well-structured backend-driven applications.
          </div>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rowVariants}
          className="grid grid-cols-1 items-center gap-6 pt-15 text-center lg:grid-cols-3 lg:gap-25 lg:text-left"
        >
          <div>
            <h1 className="text-2xl">Course Platform</h1>
            <p className="text-lg text-[#7B7B7B]">
              • September 2025 - January 2026
            </p>
          </div>

          <div className="pt-1 text-lg text-[#7B7B7B] lg:translate-x-8">
            A backend-driven SaaS platform focused on access control and
            scalable data flow.
          </div>

          <div className="flex justify-center gap-6 pt-4 lg:justify-end lg:gap-10">
            <a
              href="https://github.com/UDAY005-UI/SAAS"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline visited:text-black hover:text-[#7B7B7B] focus:text-black"
            >
              GitHub
            </a>

            <a
              href="https://saas-web-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline visited:text-black hover:text-[#7B7B7B] focus:text-black"
            >
              Visit Site
            </a>
          </div>
        </motion.div>

        <div className="h-px w-full bg-[#e6e6e6]" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rowVariants}
          className="grid grid-cols-1 items-center gap-6 text-center lg:grid-cols-3 lg:gap-25 lg:text-left"
        >
          <div>
            <h1 className="text-2xl">Personal Portfolio Website</h1>
            <p className="text-lg text-[#7B7B7B]">
              • January 2026 - January 2026
            </p>
          </div>

          <div className="pt-1 text-lg text-[#7B7B7B] lg:translate-x-8">
            A reflection of how I approach frontend design and structure.
          </div>

          <div className="flex justify-center gap-6 pt-4 lg:justify-end lg:gap-10">
            <a
              href="https://github.com/UDAY005-UI/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline visited:text-black hover:text-[#7B7B7B] focus:text-black"
            >
              GitHub
            </a>

            <a
              href="https://portfolio-omega-blond-l6vhand5r9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline visited:text-black hover:text-[#7B7B7B] focus:text-black"
            >
              Visit Site
            </a>
          </div>
        </motion.div>

        <div className="h-px w-full bg-[#e6e6e6]" />
      </div>
    </section>
  );
}