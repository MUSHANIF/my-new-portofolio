function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 section-title">
            Get In Touch
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Feel free to contact me for project inquiries or just to say hello
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                  <p className="text-slate-600">hanifmusthafa2005@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                  <p className="text-slate-600">+62 888 0911 2177</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Location</h4>
                  <p className="text-slate-600">Bekasi, Jawa Barat</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-6">
              Follow Me
            </h3>

            <div className="flex space-x-4">
              <a
                href="#"
                className="social-icon bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="social-icon bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="social-icon bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="social-icon bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <form className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <div className="mb-6">
                <label className="block text-slate-800 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="contact-input w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none"
                ></input>
              </div>

              <div className="mb-6">
                <label className="block text-slate-800 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="contact-input w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none"
                ></input>
              </div>

              <div className="mb-6">
                <label className="block text-slate-800 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="contact-input w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none"
                ></input>
              </div>

              <div className="mb-6">
                <label className="block text-slate-800 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="contact-input w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-emerald-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
