import { motion } from "framer-motion";
import uday from "../../assets/uday1.png";
import web from "../../assets/web.png";

export default function Home() {
  return (
    <section id="Hero" className="relative w-full min-h-screen overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative grid min-h-screen w-full grid-cols-1 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-[1fr_2fr_2fr] lg:px-0 lg:pl-[6vw]"
      >
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={web}
          alt=""
          className="pointer-events-none absolute top-32 left-0 hidden h-[65vh] lg:block"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 flex flex-col pt-24 md:pt-32 lg:translate-x-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <motion.div 
              whileHover={{ y: -5 }} 
              className="cursor-default"
            >
              <h2 className="text-xl font-medium md:text-3xl text-neutral-800">Clean</h2>
              <p className="text-sm leading-relaxed text-gray-500 lg:pl-4">
                Production-Ready Code
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }} 
              className="cursor-default"
            >
              <h2 className="text-xl font-medium md:text-3xl text-neutral-800">Modern</h2>
              <p className="text-sm leading-relaxed text-gray-500 lg:pl-3">
                Web Stack Development
              </p>
            </motion.div>
          </div>

          <div className="mt-16 md:mt-20">
            <motion.h1 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="text-[4.5rem] leading-[0.9] font-light tracking-tighter sm:text-[6rem] md:text-[9rem] lg:text-[13rem] text-neutral-900"
            >
              Hello
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-2 text-base text-gray-500 md:text-xl"
            >
              — Designing and developing the web
            </motion.p>
          </div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-20 hidden md:block"
          >
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.35em] uppercase lg:pl-3 text-neutral-400">
              Scroll down ↓
            </p>
          </motion.div>
        </motion.div>
        <div className="relative flex items-end justify-center md:justify-end">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            src={uday}
            alt="Profile"
            className="h-[45vh] w-auto max-w-none object-contain md:h-[65vh] lg:h-[90vh] lg:translate-x-10"
          />
        </div>
      </motion.div>
    </section>
  );
}