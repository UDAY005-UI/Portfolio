import uday from "../../assets/uday1.png";
import web from "../../assets/web.png";

export default function Home() {
  return (
    <section className="">
      <div className="relative flex min-h-screen w-full items-start">
        <img
          src={web}
          alt=""
          className="absolute top-25 -translate-x-130 opacity-100"
        />

        <div className="relative z-10 flex flex-col -translate-x-50 pt-35">
          <div className="flex -translate-x-6 gap-25">
            <div>
              <h2 className="text-3xl font-medium">Clean</h2>
              <p className="translate-x-9 text-sm leading-relaxed text-gray-500">
                Production-Ready Code
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium">Modern</h2>
              <p className="translate-x-6 text-sm leading-relaxed text-gray-500">
                Web Stack Development
              </p>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="text-[13rem] leading-[0.9] font-light tracking-tighter">
              Hello
            </h1>
            <p className="-mt-8 mr-20 text-xl text-gray-400">
              — Designing and developing the web
            </p>
          </div>
          <div className="mt-28">
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.35em] uppercase">
              Scroll down ↓
            </p>
          </div>
        </div>

        <img
          src={uday}
          alt=""
          className="absolute bottom-0 left-50 w-[90vh] max-w-none opacity-90"
        />
      </div>
    </section>
  );
}
