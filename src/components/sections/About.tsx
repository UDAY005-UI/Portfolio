import uday from "../../assets/uday4.png";
import global from "../../assets/global.png";
import arrow from "../../assets/arrow.png";
import star from "../../assets/star.png";

export default function About() {
  return (
    <section id="About" className="mt-30 h-auto w-full overflow-x-hidden">
      {/* GRID WRAPPER */}
      <div
        className="
          relative
          grid
          h-full
          w-full
          grid-cols-1
          gap-16
          px-6
          md:px-12
          lg:grid-cols-3
          lg:px-0
        "
      >
        {/* ABOUT ME */}
        <div className="relative flex flex-col gap-3">
          <h1 className="text-left text-4xl md:text-5xl lg:text-6xl">
            About Me
          </h1>

          <p className="text-left text-[#7B7B7B] text-base md:text-lg">
            I’m a full-stack developer with a growing interest in backend
            systems, architecture, and scalable applications. I enjoy
            understanding how things work under the hood and improving them
            one iteration at a time. Debugging is rarely enjoyable—but always
            necessary.
          </p>

          {/* Decorative arrow — desktop only */}
          <img
            src={arrow}
            alt="arrow"
            className="hidden lg:block w-70 opacity-20 pt-15"
          />
        </div>

        {/* CARD */}
        <div className="flex items-start justify-center">
          <div
            className="
              flex
              flex-col
              gap-5
              rounded-2xl
              bg-[#f1f0f0]
              px-5
              py-5
              w-full
              max-w-sm

              md:flex-row
              md:items-center
              md:max-w-2xl

              lg:flex-col
              lg:h-[40vw]
              lg:w-[20vw]
              lg:items-start
              lg:justify-end
            "
          >
            {/* TEXT */}
            <div className="flex flex-col gap-3 w-full">
              <img
                src={global}
                alt="global"
                className="w-16 -translate-x-2 translate-y-2"
              />

              <h1 className="text-4xl lg:text-5xl font-semibold text-left">
                3000+
              </h1>

              <p className="text-left text-base lg:text-lg text-[#7B7B7B]">
                Lines of frontend & backend code powering end-to-end web
                applications, from user interfaces to backend logic
              </p>
            </div>

            {/* IMAGE */}
            <img
              src={uday}
              alt=""
              className="
                mt-4
                w-full
                rounded-2xl
                object-cover

                md:mt-0
                md:w-1/2
                md:h-48

                lg:mb-5
                lg:h-[21vw]
                lg:w-[20vw]
              "
            />
          </div>
        </div>

        {/* ENGINEER'S WAY */}
        <div className="relative flex flex-col items-start justify-end pb-20 lg:pb-35">
          <h1 className="text-5xl md:text-6xl lg:text-7xl">The</h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl lg:pl-20">
            Engineer&apos;s
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-3xl lg:pl-65">
            Way
          </h3>

          <p className="text-[#7B7B7B] text-left text-base lg:text-lg flex gap-2 py-6">
            <img src={star} alt="" className="w-6 h-6 opacity-75" />
            I build full-stack web applications with a strong focus on backend
            logic, data flow, and overall system structure, ensuring that
            features are reliable and easy to extend over time.
          </p>

          <p className="text-[#7B7B7B] text-left text-base lg:text-lg flex gap-2">
            <img src={star} alt="" className="w-6 h-6 opacity-75" />
            I enjoy understanding problems deeply before writing code, aiming
            for solutions that are clear, maintainable, scalable, and practical
            to work with as requirements evolve.
          </p>
        </div>
      </div>
    </section>
  );
}
