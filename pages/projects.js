import ProjectItems from "../components/projects/project-items";

export default function Projects({ projects }) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-6 gap-12">
            {projects.results.map((aProject) => (
              <ProjectItems key={aProject.id} data={aProject} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
