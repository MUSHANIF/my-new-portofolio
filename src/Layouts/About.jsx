import fotoMus from "../assets/images/musgunung.png";
import fotoMusFormal from "../assets/images/formal.png";
import fotodiri from "../assets/images/fotodiri.jpg";
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 section-title">
            About Me
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get to know more about me and my journey as a developer
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
              <img
                src={fotodiri}
                alt="MusSolution"
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Who am I?
            </h3>
            <p className="text-slate-600 mb-6">
              I'm a passionate Full Stack Developer with over 3 years of
              experience creating digital products that people love. I
              specialize in JavaScript technologies across the whole stack
              (React.js, Vue.js, PHP, Laravel).
            </p>
            <p className="text-slate-600 mb-8">
              My journey in tech started when I was 18 years old, building
              simple websites for fun when i was in high school. Since then,
              I've established companies to build web applications, and
              everything in between.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-slate-600 mb-1">
                  <span className="font-semibold text-slate-800">Name:</span>{" "}
                  Musthafa Hanif
                </p>
                <p className="text-slate-600 mb-1">
                  <span className="font-semibold text-slate-800">Email:</span>{" "}
                  hanifmusthafa2005@gmail.com
                </p>
              </div>
              <div>
                <p className="text-slate-600 mb-1">
                  <span className="font-semibold text-slate-800">From:</span>{" "}
                  Bekasi, Jawa Barat, Indonesia
                </p>
                <p className="text-slate-600 mb-1">
                  <span className="font-semibold text-slate-800">
                    Freelance:
                  </span>{" "}
                  Available
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/CV%20MUSTHAFA%20HANIF.pdf"
                download="CV MUSTHAFA HANIF.pdf"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="border-2 border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
