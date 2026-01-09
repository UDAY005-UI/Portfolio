import uday from "../../assets/uday1.png";
import web from "../../assets/web.png";

export default function Home() {
  return (
    <section id="Hero" className="relative w-full overflow-x-hidden">
      <div
        className="
          relative
          min-h-screen
          w-full
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-[1fr_2fr_2fr]

          px-6
          md:px-12
          lg:px-0
          lg:pl-[6vw]
        "
      >
        <img
          src={web}
          alt=""
          className="
            pointer-events-none
            absolute
            top-30
            left-0
            hidden
            lg:block
            h-[65vh]
            opacity-80
            -translate-x-11
          "
        />
        <div className="relative z-10 flex flex-col pt-24 md:pt-32 lg:translate-x-10">
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <div>
              <h2 className="text-xl font-medium md:text-3xl">Clean</h2>
              <p className="text-sm leading-relaxed text-gray-500 lg:pl-4">
                Production-Ready Code
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium md:text-3xl">Modern</h2>
              <p className="text-sm leading-relaxed text-gray-500 lg:pl-3">
                Web Stack Development
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <h1
              className="
                font-light
                tracking-tighter
                leading-[0.9]
                text-[4.5rem]
                sm:text-[6rem]
                md:text-[9rem]
                lg:text-[13rem]
              "
            >
              Hello
            </h1>

            <p className="mt-2 text-base text-gray-400 md:text-xl">
              — Designing and developing the web
            </p>
          </div>

          <div className="mt-20 hidden md:block">
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.35em] uppercase lg:pl-3">
              Scroll down ↓
            </p>
          </div>
        </div>
        <div className="relative flex items-end justify-center md:justify-end lg:translate-x-20">
          <img
            src={uday}
            alt=""
            className="
              h-[45vh]
              md:h-[65vh]
              lg:h-[90vh]
              w-auto
              max-w-full
              lg:max-w-none
              opacity-90
            "
          />
        </div>
      </div>
    </section>
  );
}
