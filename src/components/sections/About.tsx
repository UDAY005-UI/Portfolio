import uday from "../../assets/uday4.png";
import global from "../../assets/global.png";
import arrow from "../../assets/arrow.png";
import star from "../../assets/star.png";

export default function About() {
  return (
    <section id="About" className="mt-30 h-auto w-full">
      <div className="relative grid h-full grid-cols-3">
        <div className="relative flex flex-col gap-3">
          <h1 className="text-left text-6xl">About Me</h1>
          <p className="text-left text-[#7B7B7B] text-lg">
            I’m a full-stack developer with a growing interest in backend
            systems, architecture, and scalable applications. I enjoy
            understanding how things work under the hood and improving them one
            iteration at a time. Debugging is rarely enjoyable—but always
            necessary.
          </p>
          <img src={arrow} alt="arrow" className="w-70 opacity-18 pt-15"/>
        </div>
        <div className="flex items-start justify-center">
          <div className="flex h-[40vw] w-[20vw] flex-col items-start justify-end gap-5 rounded-2xl bg-[#f1f0f0] px-5">
            <img src={global} alt="global" className="w-20 -translate-x-3 translate-y-3"/>
            <h1 className="text-5xl font-semibold">3000+</h1>
            <p className=" text-left text-lg text-[#7B7B7B]">
              Lines of frontend & backend code powering end-to-end web applications, from user interfaces to backend logic
            </p>
            <img
              src={uday}
              alt=""
              className="mb-5 h-[21vw] w-[20vw] rounded-2xl"
            />
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-end pb-35">
          <h1 className="-translate-y-10 text-7xl">The</h1>
          <h2 className="-translate-y-10 text-5xl pl-20">Engineer's</h2>
          <h3 className="-translate-y-10 text-3xl pl-65">Way</h3>
          <p className="text-[#7B7B7B] text-left text-lg flex gap-2 py-8">
            <img src={star} alt="bullet point" className="w-8 h-8 opacity-75"/>
            I build full-stack web applications with a strong focus on backend logic, data flow, and overall system structure, ensuring that features are reliable and easy to extend over time.</p>
          <p className="text-[#7B7B7B] text-left text-lg flex gap-2">
            <img src={star} alt="bullet point" className="w-8 h-8 opacity-75"/>
            I enjoy understanding problems deeply before writing code, aiming for solutions that are clear, maintainable, scalable, and practical to work with as requirements evolve.</p>
        </div>
      </div>
    </section>
  );
}
