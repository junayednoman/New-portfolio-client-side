"use client";
import PForm from "../../../components/form/PForm";
import PInput from "../../../components/form/PInput";
import PSelect from "../../../components/form/PSelect";
import PTextArea from "../../../components/form/PTextArea";
import PUploading from "../../../components/form/PUploading";
import PButton from "../../../components/ui/PButton";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect, useMemo, useRef, useState } from "react";
import { techOptions } from "../../../../constants/project.constant";
import { IJoditEditorProps } from "jodit-react";
import dynamic from "next/dynamic";
import { projectValidationSchema } from "../../../../validaiton/project.validation";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { zodResolver } from "@hookform/resolvers/zod";
import DashboardSectionTitle from "../../../components/dashboard/DashboardSectionTitle";
import { useUpdateWithFormData } from "../../../../hooks/mutation";
import { useHandleQuery } from "../../../../hooks/query";
import Loading from "../../../components/ui/Loading";
import NoData from "../../../components/ui/NoData";

const EditProject = ({ params }: { params: { projectId: string } }) => {
  const {
    data: projectData,
    isFetching,
    isError,
    refetch: refetchProjectData,
  } = useHandleQuery("get-project", `/projects/${params.projectId}`);

  useEffect(() => {
    refetchProjectData();
  }, [params.projectId, refetchProjectData]);

  const [content, setContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<any | undefined>(undefined);
  // for rich text editor
  const editor = useRef(null);
  const config: IJoditEditorProps["config"] = useMemo(
    () => ({
      height: "700px",
      toolbar: true,
      readonly: false,

      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "font", // Font family
        "paragraph",
        "fontsize", // Font size
        "brush", // Text color and background color
        "|",
        "ul",
        "ol",
        "|",
        "align", // Text alignment
        "outdent", // Decrease indent
        "indent", // Increase indent
        "|",
        "link",
        "image",
        "video",
        "table", // Table creation
        "hr", // Horizontal line
        "source", // HTML source view
        "|",
        "undo",
        "redo",
        "|",
        "fullsize", // Fullscreen
        "print", // Print
      ],
    }),

    []
  );

  // update project
  const { mutateAsync: updateProject, isPending: isUpdatePending } =
    useUpdateWithFormData("update-project", `/projects/${params.projectId}`);

  // handle image uploading
  const handleThumbnailUpload = (file: any) => {
    setThumbnail(file.fileList[0]);
  };

  const handleUpdateProject: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    data.content = content;
    formData.append("data", JSON.stringify(data));
    if (thumbnail) {
      formData.append("thumbnail", thumbnail?.originFileObj);
    }
    await updateProject(formData);
    refetchProjectData();
  };

  const project = projectData?.data;
  useEffect(() => {
    if (project) {
      setContent(project?.content || "");
    }
  }, [project]);

  if (isFetching) {
    return <Loading className="h-[70vh]" />;
  }

  const defaultValues = {
    title: project?.title,
    description: project?.description,
    url: project?.url,
    github_client: project?.github_client,
    github_server: project?.github_server,
    techs: project?.techs,
    content: project?.content,
  };
  const defaultThumbnailList = [
    {
      uid: "1",
      name: project?.title,
      status: "done",
      url: project?.thumbnail,
    },
  ];

  return (
    <>
      <DashboardSectionTitle heading="Edit Project" />
      {!project || isError ? (
        <NoData />
      ) : (
        <div className="flex justify-between gap-8 mt-8">
          <div>
            <PForm
              defaultValues={defaultValues}
              resolver={zodResolver(projectValidationSchema)}
              handleFormSubmit={handleUpdateProject}
            >
              <div className="space-y-2 w-[600px]">
                <PInput
                  name="title"
                  label="Title"
                  placeholder="Enter project title"
                />
                <PUploading
                  defaultFileList={defaultThumbnailList}
                  label="Thumbnail"
                  onChange={handleThumbnailUpload}
                />
                <div className="-mt-10px">
                  <PTextArea
                    name="description"
                    label="Description"
                    placeholder="Enter project description"
                  />
                </div>
                <PInput
                  name="url"
                  label="Url"
                  placeholder="Enter project url"
                />
                <PInput
                  name="github_client"
                  label="Client Side Github"
                  placeholder="Enter github url"
                />
                <PInput
                  name="github_server"
                  label="Server Side Github"
                  placeholder="Enter github url"
                />
                <PSelect
                  options={techOptions}
                  name="techs"
                  label="Technologies"
                  placeholder="Select project technologies"
                  mode="multiple"
                />
                <PButton disabled={isUpdatePending} htmlType="submit">
                  {isUpdatePending ? "Updating..." : "Update"}
                </PButton>
              </div>
            </PForm>
          </div>
          <div className="w-full">
            {/* rich text editor */}
            <label className="font-semibold inline-block" htmlFor="content">
              Content
            </label>
            <div className="mt-2">
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProject;
