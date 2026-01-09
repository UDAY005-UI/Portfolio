import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function Contact() {
  return (
    <section id="Contact" className="relative h-auto w-full py-30 overflow-x-hidden">
      <div className="flex flex-col gap-20">
        {/* HEADER */}
        <div className="flex flex-col gap-3 text-center px-5 lg:px-0">
          <h1 className="text-6xl">Interested in building together?</h1>
          <p className="text-lg text-[#7B7B7B]">
            I’m always excited to connect with people who enjoy building,
            learning, and growing through hands-on work.
            <br />
            Feel free to reach out if you’d like to collaborate, exchange ideas,
            or simply have a conversation.
          </p>
        </div>

        {/* CONTACT LINKS */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            text-center
            items-center

            lg:grid-cols-[1fr_1px_1fr_1px_1fr]
            lg:gap-0
          "
        >
          {/* EMAIL */}
          <a
            href="mailto:udaysenapati6878@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center">
              <img src={gmail} alt="gmail" className="h-10" />
              <div className="text-2xl translate-x-3 translate-y-1">
                Email
              </div>
            </div>
            <p className="text-[#7B7B7B] text-md">
              For direct conversations and opportunities.
            </p>
          </a>

          {/* DIVIDER 1 — DESKTOP ONLY */}
          <div className="hidden lg:block h-15 bg-[#e6e6e6]" />

          {/* GITHUB */}
          <a
            href="https://github.com/UDAY005-UI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center">
              <img src={github} alt="github" className="h-10" />
              <div className="text-2xl translate-x-3 translate-y-1">
                GitHub
              </div>
            </div>
            <p className="text-[#7B7B7B] text-md">
              Code, experiments, and ongoing work.
            </p>
          </a>

          {/* DIVIDER 2 — DESKTOP ONLY */}
          <div className="hidden lg:block h-15 bg-[#e6e6e6]" />

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/uday-senapati-a45157351/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center">
              <img src={linkedin} alt="linkedin" className="h-10" />
              <div className="text-2xl">
                LinkedIn
              </div>
            </div>
            <p className="text-[#7B7B7B] text-md">
              Professional updates and connections.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
