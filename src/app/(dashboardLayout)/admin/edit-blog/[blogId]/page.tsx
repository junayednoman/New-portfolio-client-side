"use client";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";
import PSelect from "../../../../components/form/PSelect";
import PTextArea from "../../../../components/form/PTextArea";
import PUploading from "../../../../components/form/PUploading";
import PButton from "../../../../components/ui/PButton";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect, useMemo, useRef, useState } from "react";
import { techOptions } from "../../../../../constants/project.constant";
import { IJoditEditorProps } from "jodit-react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import DashboardSectionTitle from "../../../../components/dashboard/DashboardSectionTitle";
import { useUpdateWithFormData } from "../../../../../hooks/mutation";
import { useHandleQuery } from "../../../../../hooks/query";
import Loading from "../../../../components/ui/Loading";
import { categoryOptions } from "../../../../../constants/blog.constant";
import NoData from "../../../../components/ui/NoData";

const EditBlog = ({ params }: { params: { blogId: string } }) => {
  const {
    data: blogData,
    isFetching,
    isError,
    refetch: refetchBlogData,
  } = useHandleQuery("get-blog", `/blogs/${params.blogId}`);

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

  useEffect(() => {
    refetchBlogData();
  }, [params.blogId, refetchBlogData]);

  // update blog
  const { mutateAsync: updateBlog, isPending: isUpdatePending } =
    useUpdateWithFormData("update-blog", `/blogs/${params.blogId}`);

  // handle image uploading
  const handleThumbnailUpload = (file: any) => {
    setThumbnail(file.fileList[0]);
  };

  const handleUpdateBlog: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    data.content = content;
    formData.append("data", JSON.stringify(data));
    if (thumbnail) {
      formData.append("thumbnail", thumbnail?.originFileObj);
    }
    await updateBlog(formData);
    refetchBlogData();
  };

  const blog = blogData?.data;
  useEffect(() => {
    if (blog) {
      setContent(blog?.content || "");
    }
  }, [blog]);

  if (isFetching) {
    return <Loading className="h-[70vh]" />;
  }

  const defaultValues = {
    title: blog?.title,
    description: blog?.description,
    category: blog?.category,
    tags: blog?.tags,
    content: blog?.content,
  };
  const defaultThumbnailList = [
    {
      uid: "1",
      name: blog?.title,
      status: "done",
      url: blog?.thumbnail,
    },
  ];

  return (
    <>
      <DashboardSectionTitle heading="Edit Blog" />
      {!blog || isError ? (
        <NoData />
      ) : (
        <div className="flex justify-between gap-8 mt-8">
          <div>
            <PForm
              defaultValues={defaultValues}
              handleFormSubmit={handleUpdateBlog}
            >
              <div className="space-y-2 w-[600px]">
                <PInput
                  name="title"
                  label="Title"
                  placeholder="Enter blog title"
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

export default EditBlog;
