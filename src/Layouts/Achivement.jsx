import Aljihaad from "../assets/images/aljihaad.png";
import sertif1 from "../assets/images/sertif1.jpg";
import sertif2 from "../assets/images/sertif2.jpg";
import sertif3 from "../assets/images/sertif3.png";
import bnsp from "../assets/images/bnsp.jpg";
import lombaaws from "../assets/images/lomba aws.jpeg";
import unj from "../assets/images/unj.png";
import ssa from "../assets/images/ssa.jpg";
import { useState } from "react";
function Achivement() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDesc, setSelectedDesc] = useState("");
  const Achivment = [
    {
      image: sertif1,
      title:
        "Certificate as the 2nd Runner-up of C4 (Cloud Computing Club Competition) in DKI Jakarta (March 16, 2023 – March 17, 2023)",
      tech: ["Provincial Competition"],
      description:
        "Achieved 2nd runner-up in the static web competition organized by AWS and SAGASITAS at the DKI Jakarta Education Sub-department, competing against 106 teams.",
      link: "",
      github: "#",
    },
    {
      image: lombaaws,
      title:
        "2nd Runner-up of C4 (Cloud Computing Club Competition) for DKI Jakarta (March 16, 2023 – March 17, 2023)",
      tech: ["Provincial Competition"],
      description:
        "Secured 2nd runner-up position in the static web competition organized by AWS and SAGASITAS at the DKI Jakarta Education Sub-department, among 106 teams.",
      link: "",
      github: "#",
    },
    {
      image: ssa,
      title:
        "Grand Finalist SATUASA STUDENT AWARD 3 (August 10, 2022 – October 1, 2022)",
      tech: ["Provincial Competition"],
      description:
        "Reached the finalist stage in the technology & information competition held at the East Jakarta Mayor's Office, selected from 150 teams.",
      link: "",
      github: "#",
    },
    {
      image: unj,
      title: "3rd Place TECHNIFEST (2022)",
      tech: ["National Competition"],
      description:
        "Won 3rd place in the WEB DEVELOPMENT competition using the Laravel framework, organized by Jakarta State University (UNJ), competing with 100 teams.",
      link: "",
      github: "#",
    },
    {
      image: sertif2,
      title:
        "Certificate as Grand Finalist C4 (Cloud Computing Club Competition) for DKI Jakarta (March 16, 2023 – March 17, 2023)",
      tech: ["Provincial Competition"],
      description:
        "Finalist in the static web competition organized by AWS and SAGASITAS at the DKI Jakarta Education Sub-department, among 106 teams.",
      link: "",
      github: "#",
    },
    {
      image: sertif3,
      title: "ZiSWAF Committee Chair Certificate (2023)",
      tech: ["Organization"],
      description:
        "Served as the committee chair for the 2023 ZISWAF (Zakat, Infaq, Shodaqoh, and Waqf) event at the Al-Jihaad Mosque.",
      link: "",
      github: "#",
    },
    {
      image: bnsp,
      title: "BNSP Certificate",
      tech: ["Certificate"],
      description:
        "Successfully obtained the BNSP (National Professional Certification Agency) certificate in the field of Information Technology.",
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
              <div
                className="h-52 overflow-hidden cursor-pointer"
                onClick={() => {
                  setSelectedImage(project.image);
                  setSelectedTitle(project.title);
                  setSelectedDesc(project.description);
                }}
              >
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
        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative bg-white rounded-lg shadow-lg max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-700 bg-gray-200 rounded-full px-2 py-1 hover:bg-gray-300"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="w-full h-auto rounded-t-lg object-contain max-h-[60vh]"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-slate-800">
                  {selectedTitle}
                </h3>
                <p className="text-slate-600">{selectedDesc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Achivement;
