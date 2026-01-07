import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function Contact() {
  return (
    <div className="relative h-auto w-full py-30">
      <div className="flex-flex-col">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl">Interested in building together?</h1>
          <p className="text-lg text-[#7B7B7B]">
            I’m always excited to connect with people who enjoy building,
            learning, and growing through hands-on work.
            <br />
            Feel free to reach out if you’d like to collaborate, exchange ideas,
            or simply have a conversation.
          </p>
        </div>
        <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr] justify-center pt-20">
            <a href="mailto:udaysenapati6878@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                <div className="flex justify-center">
                    <img src={gmail} alt="gmail" className="h-10"/>
                    <div className="text-2xl translate-x-3 translate-y-1">Email</div>
                </div>
                <p className="text-[#7B7B7B] text-md">For direct conversations and opportunities.</p>
                </a>
                <div className="h-15 bg-[#e6e6e6]"/>
                <a href="https://github.com/UDAY005-UI" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                <div className="flex justify-center">
                    <img src={github} alt="gmail" className="h-10"/>
                    <div className="text-2xl translate-x-3 translate-y-1">GitHub</div>
                </div>
                <p className="text-[#7B7B7B] text-md">Code, experiments, and ongoing work.</p>
                </a>
                <div className="h-15 bg-[#e6e6e6]"/>
                <a href="https://www.linkedin.com/in/uday-senapati-a45157351/" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                <div className="flex justify-center">
                    <img src={linkedin} alt="gmail" className="h-10"/>
                    <div className="text-2xl">LinkedIn</div>
                </div>
                <p className="text-[#7B7B7B] text-md">Professional updates and connections.</p>
                </a>
        </div>
      </div>
    </div>
  );
}
