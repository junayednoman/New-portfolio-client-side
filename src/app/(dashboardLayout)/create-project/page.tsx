"use client";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import PSelect from "../../components/form/PSelect";
import PTextArea from "../../components/form/PTextArea";
import PUploading from "../../components/form/PUploading";
import PButton from "../../components/ui/PButton";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useMemo, useRef, useState } from "react";
import { techOptions } from "../../../constants/project.constant";
import { IJoditEditorProps } from "jodit-react";
import dynamic from "next/dynamic";
import { projectValidationSchema } from "../../../validaiton/project.validation";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { zodResolver } from "@hookform/resolvers/zod";
import DashboardSectionTitle from "../../components/dashboard/DashboardSectionTitle";
import { usePostWithFormData } from "../../../hooks/mutation";

const CreateProject = () => {
  const [content, setContent] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<any | undefined>(undefined);
  // for rich text editor
  const editor = useRef(null);
  const config: IJoditEditorProps["config"] = useMemo(
    () => ({
      height: "700px",
      toolbar: true,
      readonly: false,
      placeholder: "Start typings...",

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

  const { mutate: createProject, isPending } = usePostWithFormData(
    "create-post",
    "/projects"
  );
  // handle image uploading
  const handleThumbnailUpload = (file: any) => {
    setThumbnail(file.fileList[0]);
  };

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    data.content = content;
    formData.append("data", JSON.stringify(data));

    if (thumbnail) {
      formData.append("thumbnail", thumbnail?.originFileObj);
    }

    createProject(formData);
  };

  return (
    <>
      <DashboardSectionTitle heading="Create Project" />
      <div className="flex justify-between gap-8 mt-8">
        <div>
          <PForm
            resolver={zodResolver(projectValidationSchema)}
            handleFormSubmit={handleSubmit}
          >
            <div className="space-y-2 w-[600px]">
              <PInput
                name="title"
                label="Title"
                placeholder="Enter project title"
              />
              <PUploading label="Thumbnail" onChange={handleThumbnailUpload} />
              <div className="-mt-10px">
                <PTextArea
                  name="description"
                  label="Description"
                  placeholder="Enter project description"
                />
              </div>
              <PInput name="url" label="Url" placeholder="Enter project url" />
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
              <PButton disabled={isPending} htmlType="submit">
                {isPending ? "Submitting..." : "Submit"}
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
    </>
  );
};

export default CreateProject;
