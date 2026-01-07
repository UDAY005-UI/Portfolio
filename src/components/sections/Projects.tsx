export default function Projects() {
  return (
    <div className="w-full pt-30">
      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className="grid grid-cols-2 justify-between gap-30">
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl">⌀ Experiences</p>
            <h1 className="text-4xl font-semibold">Explore My</h1>
            <h1 className="translate-x-10 text-4xl font-semibold">
              Engineering Journey ~
            </h1>
          </div>
          <div className="text-left text-lg text-[#7B7B7B]">
            Over the past two years, I’ve been exploring web development with a
            growing interest in backend systems and application architecture.
            While debugging is rarely enjoyable, I enjoy designing backend
            logic, data flow, and overall system structure. I continue to
            improve my frontend skills while focusing on building reliable and
            well-structured backend-driven applications.
          </div>
        </div>
        <div className="grid grid-cols-3 items-start gap-25 pt-15">
          <div className="text-left">
            <h1 className="text-2xl">Course Platform</h1>
            <p className="text-lg text-[#7B7B7B]">
              • September 2025 - January 2026
            </p>
          </div>
          <div className="text-left translate-x-8 text-lg text-[#7B7B7B] pt-1">
            A backend-driven SaaS platform focused on access control and
            scalable data flow.
          </div>
          <div className="flex justify-end gap-10 pt-4">
            <a 
            href="https://github.com/UDAY005-UI/SAAS"
            target="_blank"
            rel="noopener onrefferer" 
            className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline hover:text-[#7B7B7B] visited:text-black focus:text-black">
              GitHub
            </a>
            <a
              href="https://saas-web-nine.vercel.app/"
              target="_blank"
              rel="noopener norefferer"
              className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline visited:text-black hover:text-[#7B7B7B] focus:text-black"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="w-full h-px bg-[#e6e6e6]"></div>
        <div className="grid grid-cols-3 items-start gap-25">
          <div className="text-left">
            <h1 className="text-2xl">Personal Portfolio Website</h1>
            <p className="text-lg text-[#7B7B7B]">
              • January 2026 - January 2026
            </p>
          </div>
          <div className="text-left translate-x-8 text-lg text-[#7B7B7B] pt-1">
            A reflection of how I approach frontend design and structure.
          </div>
          <div className="flex justify-end gap-10 pt-4">
            <a 
            href="https://github.com/UDAY005-UI/Portfolio"
            target="_blank"
            rel="noopener onrefferer" 
            className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline hover:text-[#7B7B7B] visited:text-black focus:text-black">
              GitHub
            </a>
            <a
              href="https://saas-web-nine.vercel.app/"
              target="_blank"
              rel="noopener norefferer"
              className="rounded-3xl border border-[#7B7B7B] bg-[#e6e6e6] px-3 py-1 text-lg text-black no-underline visited:text-black hover:text-[#7B7B7B] focus:text-black"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="w-full h-px bg-[#e6e6e6]"></div>
      </div>
    </div>
  );
}
