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
  if (!projectData) {
    return <PurpleLoading />;
  }
  return (
    <main className="md:pt-20 bg-black">
      <Banner
        github_client={projectData?.github_client}
        github_server={projectData?.github_server}
        url={projectData?.url}
        image={projectData?.thumbnail}
      />
      <Content content={projectData?.content} techs={projectData?.techs} />
    </main>
  );
};

export default ProjectDetails;
