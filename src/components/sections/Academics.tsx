import hat from "../../assets/hat.png";

export default function Academics() {
  return (
    <section id="Academics" className="relative h-auto w-full pt-30">
      <div className="flex h-[40vh] items-center justify-between gap-20 rounded-2xl bg-[#f1f0f0] px-5 py-5">
        <div className="flex flex-col gap-2 text-left">
          <p className="text-xl">⌀ Explore</p>
          <h1 className="text-4xl font-semibold">My Academics ~</h1>
          <p className="text-xl font-semibold">Meghnad Saha Institute of Technology</p>
          <p className="text-lg text-[#7B7B7B]">Bachelor of Engineering in Computer Science & Technology</p>
          <p className="text-lg text-[#7B7B7B]">August 2023 - Expected June 2027</p>
          <p className="text-lg text-[#7B7B7B]">CGPA: 7.68 (current)</p>
        </div>
        <p className="text-sm text-[#222222]/50 -rotate-90 [word-spacing:0.4rem] -translate-x-5">
            LEARNING BY BUILDING
            </p>
        <img
            src={hat}
            alt="hat"
            className="h-[35vh] w-[30vw] rounded-2xl opacity-86"
          />
      </div>
    </section>
  );
}
