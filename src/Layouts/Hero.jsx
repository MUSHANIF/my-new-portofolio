import fotodiri from "../assets/images/fotodiri.jpg";
import fotoMusFormal from "../assets/images/formal.png";
function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-gradient min-h-screen flex items-center pt-20"
      >
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-slate-800">Hi, I'm </span>
                <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                  Musthafa Hanif
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-8">
                Full Stack Developer
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-lg">
                I specialize in creating beautiful and functional web
                applications. With a passion for coding and a keen eye for
                design, I bring ideas to life through clean and efficient code.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition shadow-lg text-center"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition text-center"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center overflow-hidden shadow-xl floating">
                  <img
                    src={fotoMusFormal}
                    alt="MusSolution"
                    className="w-full h-full object-cover"
                  ></img>
                </div>
                <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-full bg-indigo-100/50 backdrop-blur-md -z-10"></div>
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-emerald-100/50 backdrop-blur-md -z-10"></div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="tech-card p-6 rounded-xl">
              <div className="text-4xl text-indigo-600 mb-4">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Clean Code</h3>
              <p className="text-slate-600">
                Readable, maintainable and efficient code
              </p>
            </div>

            <div className="tech-card p-6 rounded-xl">
              <div className="text-4xl text-emerald-600 mb-4">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Responsive</h3>
              <p className="text-slate-600">Fully responsive on all devices</p>
            </div>

            <div className="tech-card p-6 rounded-xl">
              <div className="text-4xl text-amber-600 mb-4">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Fast</h3>
              <p className="text-slate-600">Lightning fast load times</p>
            </div>

            <div className="tech-card p-6 rounded-xl">
              <div className="text-4xl text-rose-600 mb-4">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">SEO</h3>
              <p className="text-slate-600">Optimized for search engines</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
