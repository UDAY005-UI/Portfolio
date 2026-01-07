import uday from "../../assets/uday6.jpg";

export default function Skills() {
  return (
    <div id="Skills" className="relative mt-30 h-auto w-full">
      <div className="flex flex-col gap-25">
        <div className="flex h-[40vh] items-start justify-between gap-20 rounded-2xl bg-[#f1f0f0] px-5 py-5">
          <div className="flex flex-col gap-2 text-left">
            <p className="text-xl">⌀ Explore</p>
            <h1 className="text-4xl font-semibold">My Engineering Tooklit ~</h1>
            <p className="text-lg text-[#7B7B7B]">
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
            className="h-[35vh] w-[25vw] rounded-2xl opacity-86"
          />
        </div>
        <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] gap-16 translate-x-5">
          <div className="flex flex-col text-left text-lg">
            <h1 className="pb-3 text-2xl font-semibold">Core Technologies</h1>
            <p>• JavaScript / TypeScript</p>
            <p>• Next.js / React</p>
            <p>• Node.js</p>
            <p>• Express</p>
            <p>• Postgres / MongoDB</p>
            <p>• Prisma</p>
            <p>• Tailwind CSS</p>
          </div>
          <div className="h-60 bg-[#e6e6e6]"/>
          <div className="flex flex-col text-left text-lg">
            <h1 className="pb-3 text-2xl font-semibold">
              Application Concepts
            </h1>
            <p>• REST APIs</p>
            <p>• Authentication basics</p>
            <p>• Data flow</p>
            <p>• Database relations</p>
            <p>• Error handling</p>
            <p>• API integration</p>
            <p>• Request–Response lifecycle</p>
          </div>
          <div className="h-60 bg-[#e6e6e6]"/>
          <div className="flex flex-col text-left text-lg">
            <h1 className="pb-3 text-2xl font-semibold">Tools & Workflow</h1>
            <p>• Git & GitHub</p>
            <p>• CLI basics</p>
            <p>• Project structuring</p>
            <p>• Vercel deployment</p>
            <p>• Render deployment</p>
            <p>• Debugging workflows</p>
            <p>• Package management (npm)</p>
          </div>
          <div className="h-60 bg-[#e6e6e6]"/>
          <div className="flex flex-col text-left text-lg">
            <h1 className="pb-3 text-2xl font-semibold">Exploring</h1>
            <p>• Backend best practices</p>
            <p>• DevOps fundamentals</p>
            <p>• System design basics</p>
            <p>• Performance concepts</p>
            <p>• Code maintainability</p>
            <p>• Deployment workflows</p>
            <p>• Web3 exploration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
