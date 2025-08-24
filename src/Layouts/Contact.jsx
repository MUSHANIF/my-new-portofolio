function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 section-title">
            Hubungi Saya Langsung via WhatsApp
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Klik tombol di bawah untuk menghubungi saya langsung melalui
            WhatsApp. Saya siap membantu Anda untuk konsultasi, kerja sama, atau
            sekadar menyapa!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://wa.me/6288809112177"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gradient-to-r from-green-400 to-emerald-600 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200 font-bold text-lg"
          >
            <svg className="w-7 h-7 mr-3" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#25D366" />
              <path
                fill="#fff"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.368.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
              />
            </svg>
            Chat WhatsApp: +62 888 0911 2177
          </a>
          <div className="mt-12 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Atau kunjungi media sosial saya:
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MUSHANIF"
                className="social-icon bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/musthafah/"
                className="social-icon bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/msthf_hnf/"
                className="social-icon bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
