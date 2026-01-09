import { motion, type Variants } from "framer-motion";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="Contact" className="relative h-auto w-full py-30 overflow-clip">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-20"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-3 text-center px-5 lg:px-0">
          <h1 className="text-6xl">Interested in building together?</h1>
          <p className="text-lg text-[#7B7B7B]">
            I’m always excited to connect with people who enjoy building,
            learning, and growing through hands-on work.
            <br />
            Feel free to reach out if you’d like to collaborate, exchange ideas,
            or simply have a conversation.
          </p>
        </motion.div>

        <div
          className="
            grid
            grid-cols-1
            gap-12
            text-center
            items-center
            lg:grid-cols-[1fr_1px_1fr_1px_1fr]
            lg:gap-0
          "
        >
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -5 }}
            href="mailto:udaysenapati6878@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center">
              <img src={gmail} alt="gmail" className="h-10" />
              <div className="text-2xl translate-x-3 translate-y-1">
                Email
              </div>
            </div>
            <p className="text-[#7B7B7B] text-md">
              For direct conversations and opportunities.
            </p>
          </motion.a>

          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            className="hidden lg:block h-15 bg-[#e6e6e6]" 
          />
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -5 }}
            href="https://github.com/UDAY005-UI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center">
              <img src={github} alt="github" className="h-10" />
              <div className="text-2xl translate-x-3 translate-y-1">
                GitHub
              </div>
            </div>
            <p className="text-[#7B7B7B] text-md">
              Code, experiments, and ongoing work.
            </p>
          </motion.a>

          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            className="hidden lg:block h-15 bg-[#e6e6e6]" 
          />
          <motion.a
            variants={itemVariants}
            whileHover={{ y: -5 }}
            href="https://www.linkedin.com/in/uday-senapati-a45157351/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center">
              <img src={linkedin} alt="linkedin" className="h-10" />
              <div className="text-2xl">
                LinkedIn
              </div>
            </div>
            <p className="text-[#7B7B7B] text-md">
              Professional updates and connections.
            </p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}