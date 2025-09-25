// import logo from "../assets/images/logo.png";
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                <img
                  src={logo}
                  alt="MusSolution"
                  className="w-full h-full object-cover"
                ></img>
              </div> */}
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                MusSolution
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="mb-4">© 2025 MusSolution. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hsSolutionover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
