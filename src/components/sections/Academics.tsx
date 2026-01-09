import hat from "../../assets/hat.png";

export default function Academics() {
  return (
    <section id="Academics" className="relative h-auto w-full pt-30 px-5 lg:px-0 overflow-x-hidden">
      <div
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
            items-center
            text-center
            gap-2

            lg:items-start
            lg:text-left
          "
        >
          <p className="text-xl">⌀ Explore</p>
          <h1 className="text-4xl font-semibold">My Academics ~</h1>
          <p className="text-xl font-semibold">
            Meghnad Saha Institute of Technology
          </p>
          <p className="text-lg text-[#7B7B7B]">
            Bachelor of Engineering in Computer Science & Technology
          </p>
          <p className="text-lg text-[#7B7B7B]">
            August 2023 - Expected June 2027
          </p>
          <p className="text-lg text-[#7B7B7B]">
            CGPA: 7.68 (current)
          </p>
        </div>
        <img
          src={hat}
          alt="hat"
          className="
            w-full
            
            rounded-2xl
            opacity-86

            md:max-w-md

            lg:h-[35vh]
            lg:w-[30vw]
          "
        />
        <p
          className="
            hidden
            lg:block
            absolute
            lg:translate-x-120
            text-sm
            text-[#222222]/50
            -rotate-90
            [word-spacing:0.4rem]
            -translate-x-5
          "
        >
          LEARNING BY BUILDING
        </p>
      </div>
    </section>
  );
}
