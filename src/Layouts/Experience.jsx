function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 section-title">
            My Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My professional journey and education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <i className="fas fa-briefcase text-indigo-600 mr-3"></i>
              Work Experience
            </h3>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">
                      Full Stack Developer
                    </h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                      Januari 2022 - April 2022
                    </span>
                  </div>
                  <p className="text-indigo-600 font-medium mb-3">
                    PT 3 Gen Mandiri Sejati
                  </p>
                  <p className="text-slate-600">
                    My internship experience here included creating a company
                    portfolio website in the first month and developing a
                    web-based application for an online cafeteria two months. I
                    was able to enhance my skills in designing and developing
                    web applications using the Laravel framework.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">
                      Junior Web Developer (Internship)
                    </h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                      May 2023 - February 2024
                    </span>
                  </div>
                  <p className="text-indigo-600 font-medium mb-3">Datapolis</p>
                  <p className="text-slate-600">
                    Creating an TPS system for insurance company. I was able to
                    enhance my skills in designing and developing web
                    applications using the Laravel framework.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">
                      Web Developer
                    </h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                      February 2024 - Present
                    </span>
                  </div>
                  <p className="text-indigo-600 font-medium mb-3">Datapolis</p>
                  <p className="text-slate-600">
                    Creating an TPS system for insurance company. I was able to
                    enhance my skills in designing and developing web
                    applications using the Laravel framework and Vue.js.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">
                      Freelance Web Developer
                    </h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                      December 2024 - Present
                    </span>
                  </div>

                  <p className="text-slate-600">
                    I have been working on several freelance projects, helping
                    clients build their online presence and improve their
                    digital products. My work includes developing websites,
                    creating web applications, and providing ongoing support and
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <i className="fas fa-graduation-cap text-emerald-600 mr-3"></i>
              Education
            </h3>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">
                      Rekayasa Perangkat Lunak
                    </h4>
                    <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">
                      2020 - 2023
                    </span>
                  </div>
                  <p className="text-emerald-600 font-medium mb-3">
                    Smkn 46 Jakarta
                  </p>
                  <p className="text-slate-600">
                    Focused on software development methodologies and database
                    systems. Graduated with honors.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-800">
                      System Information
                    </h4>
                    <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">
                      2023 - 2027
                    </span>
                  </div>
                  <p className="text-emerald-600 font-medium mb-3">
                    Terbuka University
                  </p>
                  <p className="text-slate-600">
                    Currently pursuing a degree in System Information, focusing
                    on software engineering and data management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
