import Aljihaad from "../assets/images/aljihaad.png";
import sertif1 from "../assets/images/sertif1.jpg";
import sertif2 from "../assets/images/sertif2.jpg";
import sertif3 from "../assets/images/sertif3.png";
import lombaaws from "../assets/images/lomba aws.jpeg";
import unj from "../assets/images/unj.png";
import ssa from "../assets/images/ssa.jpg";
function Achivement() {
  const Achivment = [
    {
      image: sertif1,
      title:
        "Certificate as the 2nd Runner-up of C4 (Cloud Computing Club Competition) in DKI Jakarta (March 16, 2023 – March 17, 2023)",
      tech: ["Provincial Competition"],
      description:
        "As the 2nd runner-up winner organized by AWS and SAGASITAS in the static web competition at the DKI Jakarta Education Sub-dept. from 106 teams.",
      link: "",
      github: "#",
    },
    {
      image: lombaaws,
      title:
        "2nd Runner-up of C4 (Cloud Computing Club Competition) for DKI Jakarta (March 16, 2023 – March 17, 2023)",
      tech: ["Provincial Competition"],
      description:
        "As the 2nd runner-up winner organized by AWS and SAGASITAS in the static web competition at the DKI Jakarta Education Sub-dept. from 106 teams",
      link: "",
      github: "#",
    },
    {
      image: ssa,
      title:
        "Grand Finalist SATUASA STUDENT AWARD 3 (10 August 2022 – 1 October 2022)",
      tech: ["Provincial Competition"],
      description:
        "As a participant who entered the Finalist stage of the technology & information competition from 150 teams held at the East Jakarta Mayor's Office.",
      link: "",
      github: "#",
    },
    {
      image: unj,
      title: "3rd Place TECHNIFEST (2022)",
      tech: ["National Competition"],
      description:
        "Achieved 3rd place in the WEB DEVELOPMENT competition using the Laravel framework for students organized by Jakarta State University (UNJ) from 100 teams.",
      link: "",
      github: "#",
    },
    {
      image: sertif2,
      title:
        "Certificate as Grand Finalist C4 (Cloud Computing Club Competition) for DKI Jakarta (March 16, 2023 – March 17, 2023)",
      tech: ["Provincial Competition"],
      description:
        "As a Finalist in the competition organized by AWS and SAGASITAS in the static web competition at the DKI Jakarta Education Sub-dept. from 106 teams.",

      link: "",
      github: "#",
    },
    {
      image: sertif3,
      title: "ZiSWAF Committee Chair Certificate (2023)",
      tech: ["Organization"],
      description:
        "As the committee chair for the 2023 ZISWAF (Zakat, Infaq, Shodaqoh, and Waqf) event at the Al-Jihaad Mosque.",
      link: "",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 section-title">
            My Achivement
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I have participated in various competitions and organizations that
            have helped me develop my skills and knowledge. Here are some of the
            achievements I am proud of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Achivment.map((project, index) => (
            <div
              key={index}
              className="project-card rounded-xl overflow-hidden bg-white"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-slate-800 w-full">
                    {project.title}
                  </h3>
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        t === "Organization"
                          ? "bg-indigo-100 text-indigo-800"
                          : "bg-green-200 text-green-900"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Achivement;
