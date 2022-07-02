import ProjectItems from "../components/projects/project-items";

export default function Projects({ projects }) {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-4 gap-8">
          {projects.results.map((project) => (
            <ProjectItems key={project.id} data={project} />
          ))}
        </div>
      </section>
    </>
  );
}
