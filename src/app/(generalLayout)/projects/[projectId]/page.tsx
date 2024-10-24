import handleQuery from "../../../../services/query";
import { TProject } from "../../../../types/project.type";
import Banner from "../../../components/sections/project details/Banner";
import Content from "../../../components/sections/project details/Content";
import PurpleLoading from "../../../components/ui/PurpleLoading";

const ProjectDetails = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const id = params?.projectId;
  const data = await handleQuery(`/projects/${id}`);
  const projectData = data?.data as TProject;
  console.log("projectData, ", projectData);
  if (!projectData) {
    return <PurpleLoading />;
  }
  return (
    <main className="md:pt-20 bg-black">
      <Banner image={projectData?.thumbnail} />
      <Content
        heading={projectData?.title}
        content={projectData?.content}
        techs={projectData?.techs}
        description={projectData?.description}
      />
    </main>
  );
};

export default ProjectDetails;
