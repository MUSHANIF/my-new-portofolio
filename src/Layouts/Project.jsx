import Aljihaad from "../assets/images/aljihaad.png";
import dashboardAljihaad from "../assets/images/dashboardAljihaad.png";
import afr from "../assets/images/afr.png";
import rakes from "../assets/images/rakes.jpg";
import dumas from "../assets/images/dumass.PNG";
import mental from "../assets/images/mental.png";
import kopiAnugrah from "../assets/images/kopiAnugrah.png";
import mindly from "../assets/images/mindly.png";
import pangan from "../assets/images/pangan.png";
import apari from "../assets/images/apari.png";
function Project() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 section-title">
            My Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Some of my recent work and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={Aljihaad}
                alt="Landing Page Aljihaad"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Landing Page Musholla Aljihaad
                </h3>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-red-200 mx-2 text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                A landing page for the Musholla Aljihaad community, showcasing
                its features and services.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://aljihaad.com/"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={dashboardAljihaad}
                alt="Health Tracker App"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Dashboard Analitics Aljihaad
                </h3>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-red-200 mx-2 text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                A dashboard for managing and analyzing data related to the
                Aljihaad community, providing insights and reports for zakat and
                infaq.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={afr}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Dashboard Integrated Data System For Insurance
                </h3>
                <span className="bg-green-100 mx-2 text-green-800 text-xs px-2 py-1 rounded">
                  Vue.Js
                </span>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                A dashboard for managing and analyzing data related to the
                insurance industry, providing insights and reports for insurance
                products.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={rakes}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Website Rapor Kesehatan Siswa (Rakes)
                </h3>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Website to manage and analyze health data related to students,
                provide insights and reports for monitoring student health at my
                school, and this is my competition project with friends at my
                school and won 3rd place in the competition held by Jakarta
                State University.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={dumas}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Website Pengaduan masyarakat (dumas)
                </h3>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Website to manage and analyze data related to public complaints,
                provide insights and reports to monitor complaints from people
                living in Jakarta. This is also a competition project with
                friends when I was in high school and managed to become a
                finalist in a competition organized by Student award 3.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={mental}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Website Mental Health
                </h3>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                A website to manage and analyze mental health data, providing
                insights and reports to monitor mental health in Jakarta. This
                is also a competition project with friends when I was in high
                school and managed to become the 1st runner-up in a competition
                organized by AWS
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={pangan}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Website Pangan (Project Freelance)
                </h3>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                A company website for a food company, providing information
                about the company and its products. This project is a freelance
                project that I worked on for a client.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={apari}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Website Apari
                </h3>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  Laravel
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Corporate website for a company providing services in the
                information technology field, providing information about
                insurance learning and exams to obtain an insurance degree.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={kopiAnugrah}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Website Kopi Anugrah (Project Freelance)
                </h3>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  React JS
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                E-commerce website for a coffee shop, showcasing various coffee
                products and allowing users to place orders online.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://anugrahpanganbersinar.com/"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card rounded-xl overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img
                src={mindly}
                alt="AI Content Generator"
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              ></img>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Website Mindly (Education)
                </h3>
                <span className="bg-red-200  text-red-900 text-xs px-2 py-1 rounded">
                  React JS
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Educational website providing resources and information for
                students, including study materials and learning tips about
                mental health
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://mindlysikolog.netlify.app/"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
