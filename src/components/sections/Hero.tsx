import uday from "../../assets/uday1.png";
import web from "../../assets/web.png";

export default function Home() {
  return (
    <section className="w-full">
      <div className="relative min-h-screen w-full grid grid-cols-[1fr_2fr_2fr] px-10 lg:px-24">

        {/* Decorative left image */}
        <img
          src={web}
          alt=""
          className="absolute h-[70vh] top-31 -left-22 opacity-100"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col pt-32">
          
          <div className="flex gap-24">
            <div>
              <h2 className="text-3xl font-medium">Clean</h2>
              <p className="text-sm leading-relaxed text-gray-500">
                Production-Ready Code
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium">Modern</h2>
              <p className="text-sm leading-relaxed text-gray-500">
                Web Stack Development
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-[13rem] font-light leading-[0.9] tracking-tighter">
              Hello
            </h1>
            <p className="-translate-y-4 text-xl text-gray-400">
              — Designing and developing the web
            </p>
          </div>

          <div className="mt-28">
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.35em] uppercase">
              Scroll down ↓
            </p>
          </div>
        </div>

        {/* Right portrait */}
        <img
          src={uday}
          alt=""
          className="absolute bottom-0 right-0 h-[90vh] w-auto max-w-none opacity-90"
        />
      </div>
    </section>
  );
}
