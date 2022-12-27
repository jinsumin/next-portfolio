import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills-section">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>

          <div className="grid grid-cols-1 mx-4 sm:mx-24 md:mx-16 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-20 text-center">
            <div className="row-span-1 space-y-16">
              <div className="border mx-4 rounded-lg bg-white shadow-xxl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-cyan-600 border-b-2 border-cyan-600 m-2 mb-10">
                  Frontend
                </div>
                <Image
                  src="/skills/front-skills.png"
                  alt="front skills"
                  width={380}
                  height={900}
                  quality={20}
                />
              </div>
              <div className="border mx-4 rounded-lg bg-white shadow-xxl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-cyan-600 border-b-2 border-cyan-600 m-2 mb-10">
                  Certification
                </div>
                <Image
                  src="/skills/actfl_opic.png"
                  alt="certification skills"
                  width={380}
                  height={140}
                  quality={20}
                />
              </div>
            </div>

            <div className="row-span-1 space-y-16">
              <div className="border mx-4 rounded-lg bg-white shadow-xxl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-cyan-600 border-b-2 border-cyan-600 m-2 mb-10">
                  Backend
                </div>
                <Image
                  src="/skills/back-skills.png"
                  alt="back skills"
                  width={380}
                  height={600}
                  quality={20}
                />
              </div>

              <div className="border mx-4 rounded-lg bg-white shadow-xxl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-cyan-600 border-b-2 border-cyan-600 m-2 mb-10">
                  Mobile
                </div>
                <Image
                  src="/skills/mobile-skills.png"
                  alt="mobile skills"
                  width={380}
                  height={320}
                  quality={20}
                />
              </div>
            </div>

            <div className="row-span-1 space-y-16">
              <div className="border mx-4 rounded-lg bg-white shadow-xxl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-cyan-600 border-b-2 border-cyan-600 m-2 mb-10">
                  Communication
                </div>
                <Image
                  src="/skills/communication-skills.png"
                  alt="communication skills"
                  width={380}
                  height={440}
                  quality={20}
                />
              </div>

              <div className="border mx-4 rounded-lg bg-white shadow-xxl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-cyan-600 border-b-2 border-cyan-600 m-2 mb-10">
                  Deployment
                </div>
                <Image
                  src="/skills/deployment-skills.png"
                  alt="deployment skills"
                  width={380}
                  height={460}
                  quality={20}
                />
              </div>
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
