function Header() {
  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                MS
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                MusSolution
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-600 font-medium hover:text-indigo-600 transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-600 font-medium hover:text-indigo-600 transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-600 font-medium hover:text-indigo-600 transition"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-slate-600 font-medium hover:text-indigo-600 transition"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-slate-600 font-medium hover:text-indigo-600 transition"
              >
                Contact
              </a>
            </div>

            <button id="menu-btn" className="md:hidden text-slate-600">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className="md:hidden hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6"
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-indigo-600 font-medium hover:text-indigo-800 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-slate-600 font-medium hover:text-indigo-600 transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-600 font-medium hover:text-indigo-600 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-slate-600 font-medium hover:text-indigo-600 transition"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-slate-600 font-medium hover:text-indigo-600 transition"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-slate-600 font-medium hover:text-indigo-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
