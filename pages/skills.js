import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Skills
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-20 grid-flow-col text-center mx-20">
            <div className="space-y-16">
              <div className="row-start-1 row-end-2 border rounded-lg bg-white shadow-2xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-indigo-600 border-b-2 border-indigo-600 m-2 mb-10">
                  Frontend
                </div>
                <Image
                  src="/skills/front-skills.png"
                  alt="front skills"
                  width={380}
                  height={900}
                />
              </div>
              <div className="row-span-1 border rounded-lg bg-white shadow-2xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-indigo-600 border-b-2 border-indigo-600 m-2 mb-10">
                  Mobile
                </div>
                <Image
                  src="/skills/mobile-skills.png"
                  alt="mobile skills"
                  width={380}
                  height={220}
                />
              </div>
            </div>

            <div className="space-y-16">
              <div className="row-span-1 border rounded-lg bg-white shadow-2xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-indigo-600 border-b-2 border-indigo-600 m-2 mb-10">
                  Backend
                </div>
                <Image
                  src="/skills/back-skills.png"
                  alt="back skills"
                  width={380}
                  height={600}
                />
              </div>

              <div className="row-span-1 border rounded-lg bg-white shadow-2xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-indigo-600 border-b-2 border-indigo-600 m-2 mb-10">
                  Deployment
                </div>
                <Image
                  src="/skills/deployment-skills.png"
                  alt="deployment skills"
                  width={380}
                  height={460}
                />
              </div>
            </div>

            <div className="space-y-16">
              <div className="row-span-1 border rounded-lg bg-white shadow-2xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-indigo-600 border-b-2 border-indigo-600 m-2 mb-10">
                  Communication
                </div>
                <Image
                  src="/skills/communication-skills.png"
                  alt="communication skills"
                  width={380}
                  height={440}
                />
              </div>

              <div className="row-span-1 border rounded-lg bg-white shadow-2xl transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-400/40 hover:text-blue-600">
                <div className="text-3xl font-bold text-indigo-600 border-b-2 border-indigo-600 m-2 mb-10">
                  Certification
                </div>
                <Image
                  src="/skills/certification-skills.png"
                  alt="certification skills"
                  width={380}
                  height={240}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-indigo-500"></span>
        </div>
      </section>
    </>
  );
}
