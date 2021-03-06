import ProjectItems from "../components/projects/project-items";

export default function Projects({ projects }) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-6 gap-12 mx-10">
            {projects !== null ? projects.results.map((aProject) => (
              <ProjectItems key={aProject.id} data={aProject} />
            )) : null}
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-12">
          <span className="h-1 w-20 rounded bg-indigo-500"></span>
        </div>
      </section>
    </>
  );
}
