"use client";

import { Popconfirm, Table, Tag } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TProject } from "../../../types/project.type";
import { useDeleteData } from "../../../hooks/mutation";
import DashboardSectionTitle from "../../components/dashboard/DashboardSectionTitle";
import { useHandleQuery } from "../../../hooks/query";
import Image from "next/image";

export type TTableProps = Pick<
  TProject,
  "title" | "_id" | "thumbnail" | "isDeleted"
>;

const Projects = () => {
  const [projectIdToBeDeleted, setProjectIdToBeDeleted] = useState("");
  const {
    data,
    isFetching,
    isLoading,
    refetch: refetchProjectData,
  } = useHandleQuery("projects", `/projects`);

  console.log("userIdToBeDeleted, ", projectIdToBeDeleted);
  const projectData = data?.data?.result;

  // delete project
  const { mutateAsync: deleteProject } = useDeleteData(
    "delete-project",
    `/projects/${projectIdToBeDeleted}`
  );
  const handleProjectDelete = async () => {
    await deleteProject();
    refetchProjectData();
  };

  const projectItems = projectData?.map((project: TTableProps) => ({
    key: project._id,
    title: project.title,
    thumbnail: project.thumbnail,
    isDeleted: project.isDeleted,
  }));

  console.log("projectItems, ", projectData);
  const columns = [
    {
      title: "Thumbnail",
      key: "title",
      render: ({ thumbnail }: { thumbnail: string }) => (
        <Image
          className="rounded-[10px]"
          src={thumbnail}
          alt="thumbnail"
          width={70}
          height={70}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      key: "isDeleted",
      render: ({ isDeleted }: { isDeleted: string }) =>
        isDeleted ? (
          <Tag color="red">Deleted</Tag>
        ) : (
          <Tag color="green">Active</Tag>
        ),
    },
    {
      title: "Actions",
      render: ({ key, isDeleted }: { key: string; isDeleted: boolean }) => (
        <div className="flex  items-center gap-2">
          <Link
            className={`${isDeleted && "pointer-events-none opacity-50"}`}
            href={`/edit-project/${key}`}
          >
            <Tag
              color="blue-inverse"
              className="flex items-center justify-center p-2 cursor-pointer rounded-[6px]"
            >
              <Pencil size={17} />
            </Tag>
          </Link>

          <Popconfirm
            title="Delete the project"
            description="Are you sure to delete this project?"
            onConfirm={handleProjectDelete}
            onOpenChange={() => setProjectIdToBeDeleted(key)}
            okText="Yes"
            cancelText="No"
          >
            <Tag
              color="red-inverse"
              className={`flex items-center justify-center p-2 cursor-pointer rounded-[6px] ${
                isDeleted && "pointer-events-none opacity-50"
              }`}
            >
              <Trash2 size={17} />
            </Tag>
          </Popconfirm>
        </div>
      ),
      key: "address",
    },
  ];

  return (
    <div>
      <DashboardSectionTitle heading="My Projects" />

      <div className="mt-6">
        <Table
          loading={isFetching || isLoading}
          dataSource={projectItems}
          columns={columns}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};

export default Projects;
