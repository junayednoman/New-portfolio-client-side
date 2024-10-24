"use client";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import PSelect from "../../components/form/PSelect";
import PTextArea from "../../components/form/PTextArea";
import PUploading from "../../components/form/PUploading";
import PButton from "../../components/ui/PButton";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useMemo, useRef, useState } from "react";
import { IJoditEditorProps } from "jodit-react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { zodResolver } from "@hookform/resolvers/zod";
import DashboardSectionTitle from "../../components/dashboard/DashboardSectionTitle";
import { techOptions } from "../../../constants/project.constant";
import { blogValidationSchema } from "../../../validaiton/blog.validation";
import { categoryOptions } from "../../../constants/blog.constant";
import { usePostWithFormData } from "../../../hooks/mutation";

const CreateBlog = () => {
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

  const { mutate: createBlog, isPending } = usePostWithFormData(
    "create-blog",
    "/blogs"
  );

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    data.content = content;
    formData.append("data", JSON.stringify(data));

    if (thumbnail) {
      formData.append("thumbnail", thumbnail?.originFileObj);
    }

    createBlog(formData);
    console.log("data, ", data, thumbnail);
  };

  // handle image uploading
  const handleThumbnailUpload = (file: any) => {
    setThumbnail(file.fileList[0]);
  };

  return (
    <>
      <DashboardSectionTitle heading="Create Blog" />
      <div className="flex justify-between gap-8 mt-8">
        <div>
          <PForm
            resolver={zodResolver(blogValidationSchema)}
            handleFormSubmit={handleSubmit}
          >
            <div className="space-y-2 w-[600px]">
              <PInput
                name="title"
                label="Title"
                placeholder="Enter blog title"
              />
              <PUploading label="Thumbnail" onChange={handleThumbnailUpload} />
              <div className="-mt-10px">
                <PTextArea
                  name="description"
                  label="Description"
                  placeholder="Enter blog description"
                />
              </div>

              <PSelect
                options={categoryOptions}
                name="category"
                label="Category"
                placeholder="Select a category"
              />
              <PSelect
                options={techOptions}
                name="tags"
                label="Tags"
                placeholder="Select tags"
                mode="multiple"
              />
              <PButton htmlType="submit">
                {isPending ? "Publishing..." : "Publish"}
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

export default CreateBlog;
