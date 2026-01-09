import uday from "../../assets/uday6.jpg";

export default function Skills() {
  return (
    <section id="Skills" className="relative mt-30 h-auto w-full overflow-x-hidden">
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
        {/* TOP BOX */}
        <div
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
          {/* TEXT */}
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

          {/* IMAGE */}
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
        </div>

        {/* SKILLS GRID */}
        <div
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
          <div className="flex flex-col gap-2">
            <h1 className="pb-3 text-xl font-semibold">Core Technologies</h1>
            <p className="lg:text-lg">• JavaScript / TypeScript</p>
            <p className="lg:text-lg">• Next.js / React</p>
            <p className="lg:text-lg">• Node.js</p>
            <p className="lg:text-lg">• Express</p>
            <p className="lg:text-lg">• Postgres / MongoDB</p>
            <p className="lg:text-lg">• Prisma</p>
            <p className="lg:text-lg">• Tailwind CSS</p>
          </div>

          <div className="flex flex-col gap-2">
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
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="pb-3 text-xl font-semibold">Tools & Workflow</h1>
            <p className="lg:text-lg">• Git & GitHub</p>
            <p className="lg:text-lg">• CLI basics</p>
            <p className="lg:text-lg">• Project structuring</p>
            <p className="lg:text-lg">• Vercel deployment</p>
            <p className="lg:text-lg">• Render deployment</p>
            <p className="lg:text-lg">• Debugging workflows</p>
            <p className="lg:text-lg">• Package management (npm)</p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="pb-3 text-xl font-semibold">Exploring</h1>
            <p className="lg:text-lg">• Backend best practices</p>
            <p className="lg:text-lg">• DevOps fundamentals</p>
            <p className="lg:text-lg">• System design basics</p>
            <p className="lg:text-lg">• Performance concepts</p>
            <p className="lg:text-lg">• Code maintainability</p>
            <p className="lg:text-lg">• Deployment workflows</p>
            <p className="lg:text-lg">• Web3 exploration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
