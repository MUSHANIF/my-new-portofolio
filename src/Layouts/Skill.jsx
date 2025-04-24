function Skill() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 section-title">
            My Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Technologies I work with and my proficiency level
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div class="skill-card bg-white p-8 rounded-xl fade-in">
            <div class="text-indigo-600 mb-4">
              <i class="fab fa-react text-4xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Frontend Development</h3>
            <p class="text-gray-600 mb-4">
              Building responsive and interactive user interfaces with modern
              frameworks.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
                React
              </span>
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
                Vue.js
              </span>
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
                Tailwind CSS
              </span>
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
                JavaScript
              </span>
            </div>
          </div>

          <div class="skill-card bg-white p-8 rounded-xl fade-in delay-1">
            <div class="text-indigo-600 mb-4">
              <i class="fas fa-server text-4xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Backend Development</h3>
            <p class="text-gray-600 mb-4">
              Creating robust server-side applications and APIs with various
              technologies.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
                Node.js
              </span>
              <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">
                Laravel
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-800 mb-8 text-center">
            Other Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm flex items-center">
              <i className="fab fa-git-alt text-2xl text-orange-600 mr-3"></i>
              <span className="font-medium">Git</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm flex items-center">
              <i className="fab fa-docker text-2xl text-blue-500 mr-3"></i>
              <span className="font-medium">Docker</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm flex items-center">
              <i className="fab fa-figma text-2xl text-purple-600 mr-3"></i>
              <span className="font-medium">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skill;
