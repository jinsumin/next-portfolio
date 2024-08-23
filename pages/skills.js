import { FaCode, FaPaintBrush, FaServer, FaDatabase, FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <div id="skills-section">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Skills
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="p-6 border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
              <FaCode className="text-4xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                Languages
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                C, C++, Java, JavaScript, TypeScript, Dart
              </h2>
            </div>

            <div className="p-6 border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
              <FaPaintBrush className="text-4xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                Frontend
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                HTML, CSS, Flutter, React, Next.js
              </h2>
            </div>

            <div className="p-6 border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
              <FaServer className="text-4xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                Backend
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Spring Framework, JPA, MyBatis
              </h2>
            </div>

            <div className="p-6 border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
              <FaDatabase className="text-4xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                Infra & DB
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Oracle, MySQL, AWS, Firebase
              </h2>
            </div>

            <div className="p-6 border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
              <FaTools className="text-4xl text-indigo-500 mb-4 mx-auto" />
              <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                Tools
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                VS Code, IntelliJ, Notion, Zeplin, Figma
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-cyan-500"></span>
        </div>
      </section>
    </div>
  );
}
