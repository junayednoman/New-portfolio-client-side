import { projects } from "../../../constants/project.constant";
import FContainer from "../ui/FContainer";
import { ProjectCard } from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

const Projects = () => {
  return (
    <section className="py-14">
      <FContainer>
        <SectionTitle>Works in Code</SectionTitle>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-10 xl:max-w-[1200px] md:max-w-[770px] max-w-sm mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </FContainer>
    </section>
  );
};

export default Projects;
