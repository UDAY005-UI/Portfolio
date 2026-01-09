import { motion, type Variants } from "framer-motion";
import hat from "../../assets/hat.png";

export default function Academics() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="Academics" className="relative h-auto w-full pt-30 px-5 lg:px-0 overflow-clip">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          relative
          flex
          flex-col
          items-center
          gap-6
          rounded-2xl
          bg-[#f1f0f0]
          px-5
          py-6
          md:gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-20
          lg:h-[40vh]
        "
      >
        <div
          className="
            flex
            flex-col
            flex-1
            items-center
            text-center
            gap-2
            lg:items-start
            lg:text-left
          "
        >
          <motion.p variants={itemVariants} className="text-xl">⌀ Explore</motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl font-semibold">My Academics ~</motion.h1>
          <motion.p variants={itemVariants} className="text-xl font-semibold">
            Meghnad Saha Institute of Technology
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-[#7B7B7B]">
            Bachelor of Engineering in Computer Science & Technology
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-[#7B7B7B]">
            August 2023 - Expected June 2027
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-[#7B7B7B]">
            CGPA: 7.68 (current)
          </motion.p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.86, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={hat}
          alt="hat"
          className="
            w-full
            rounded-2xl
            md:max-w-md
            lg:h-[35vh]
            lg:w-[30vw]
          "
        />

        <motion.p
          initial={{ opacity: 0, rotate: -90, x: 20 }}
          whileInView={{ opacity: 0.5, rotate: -90, x: -5 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="
            hidden
            lg:block
            absolute
            lg:translate-x-120
            text-sm
            text-[#222222]
            [word-spacing:0.4rem]
          "
        >
          LEARNING BY BUILDING
        </motion.p>
      </motion.div>
    </section>
  );
}