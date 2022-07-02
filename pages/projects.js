import ProjectItems from "../components/projects/project-items";

export default function Projects({ results }) {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-4 gap-8">
          {/* {results.map((aProject) => (
            <ProjectItems key={aProject.id} data={aProject} />
          ))} */}
        </div>
      </section>
    </>
  );
}
