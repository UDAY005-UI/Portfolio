import { motion, type Variants } from "framer-motion";
import uday from "../../assets/uday6.jpg";

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="Skills" className="relative mt-30 h-auto w-full overflow-clip">
      <div
        className="
          flex
          flex-col
          gap-20
          px-6
          md:px-12
          lg:px-0
        "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            flex
            flex-col
            gap-8
            rounded-2xl
            bg-[#f1f0f0]
            px-5
            py-6
            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          <div className="flex flex-col gap-3 text-left md:w-1/2">
            <p className="text- lg:text-xl">⌀ Explore</p>
            <h1 className="text-3xl lg:text-4xl font-semibold">
              My Engineering Toolkit ~
            </h1>
            <p className="text-base lg:text-lg text-[#7B7B7B]">
              Here are the technologies I have explored while working on
              personal and academic projects. I am still strengthening my
              fundamentals and understanding how these tools behave in
              real-world scenarios. Each skill listed represents practical
              exposure rather than surface-level familiarity.
              <br />
              Do I know everything yet? Not even close—but I’m getting there.
            </p>
          </div>
          <img
            src={uday}
            alt="uday"
            className="
              w-full
              rounded-2xl
              object-cover
              opacity-90
              md:w-1/2
              md:h-64
              lg:h-[35vh]
              lg:w-[25vw]
            "
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            grid
            gap-12
            text-base
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            text-center
            lg:text-left
            lg:translate-x-10
          "
        >
          <motion.div variants={columnVariants} className="flex flex-col gap-2">
            <h1 className="pb-3 text-xl font-semibold">Core Technologies</h1>
            <p className="lg:text-lg">• JavaScript / TypeScript</p>
            <p className="lg:text-lg">• Next.js / React</p>
            <p className="lg:text-lg">• Node.js</p>
            <p className="lg:text-lg">• Express</p>
            <p className="lg:text-lg">• Postgres / MongoDB</p>
            <p className="lg:text-lg">• Prisma</p>
            <p className="lg:text-lg">• Tailwind CSS</p>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col gap-2">
            <h1 className="pb-3 text-xl font-semibold">
              Application Concepts
            </h1>
            <p className="lg:text-lg">• REST APIs</p>
            <p className="lg:text-lg">• Authentication basics</p>
            <p className="lg:text-lg">• Data flow</p>
            <p className="lg:text-lg">• Database relations</p>
            <p className="lg:text-lg">• Error handling</p>
            <p className="lg:text-lg">• API integration</p>
            <p className="lg:text-lg">• Request–Response lifecycle</p>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col gap-2">
            <h1 className="pb-3 text-xl font-semibold">Tools & Workflow</h1>
            <p className="lg:text-lg">• Git & GitHub</p>
            <p className="lg:text-lg">• CLI basics</p>
            <p className="lg:text-lg">• Project structuring</p>
            <p className="lg:text-lg">• Vercel deployment</p>
            <p className="lg:text-lg">• Render deployment</p>
            <p className="lg:text-lg">• Debugging workflows</p>
            <p className="lg:text-lg">• Package management (npm)</p>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col gap-2">
            <h1 className="pb-3 text-xl font-semibold">Exploring</h1>
            <p className="lg:text-lg">• Backend best practices</p>
            <p className="lg:text-lg">• DevOps fundamentals</p>
            <p className="lg:text-lg">• System design basics</p>
            <p className="lg:text-lg">• Performance concepts</p>
            <p className="lg:text-lg">• Code maintainability</p>
            <p className="lg:text-lg">• Deployment workflows</p>
            <p className="lg:text-lg">• Web3 exploration</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}