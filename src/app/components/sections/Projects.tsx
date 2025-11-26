"use client";
import { useHandleQuery } from "../../../hooks/query";
import { TProject } from "../../../types/project.type";
import Container from "../ui/Container";
import NodataPurple from "../ui/NodataPurple";
import { ProjectCard } from "../ui/ProjectCard";
import PurpleLoading from "../ui/PurpleLoading";
import SectionTitle from "../ui/SectionTitle";

const Projects = () => {
  const { data, isLoading, isError } = useHandleQuery("projects", "/projects", {
    isDeleted: false,
    sort: "-updatedAt",
  });
  if (isLoading) {
    return <PurpleLoading />;
  }
  const projects = data?.data?.result || [];
  return (
    <section id="projects" className="md:py-14 py-8">
      <Container>
        <SectionTitle>My Works in Code</SectionTitle>
        {projects?.length < 1 || isError ? (
          <NodataPurple />
        ) : (
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-10 xl:max-w-[1200px] md:max-w-[770px] max-w-sm mx-auto">
            {projects.map((project: TProject) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
