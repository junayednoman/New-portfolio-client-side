"use client";

import { Popconfirm, Table, Tag } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useDeleteData } from "../../../hooks/mutation";
import DashboardSectionTitle from "../../components/dashboard/DashboardSectionTitle";
import { useHandleQuery } from "../../../hooks/query";
import Image from "next/image";
import { TBlog } from "../../../types/blog.type";

export type TTableProps = Pick<
  TBlog,
  "title" | "_id" | "category" | "thumbnail" | "isDeleted"
>;

const Blogs = () => {
  const [blogIdToBeDeleted, setBlogIdToBeDeleted] = useState("");
  const {
    data,
    isFetching,
    isLoading,
    refetch: refetchBlogData,
  } = useHandleQuery("blogs", `/blogs`);

  const blogData = data?.data?.result;

  // delete blog
  const { mutateAsync: deleteBlog } = useDeleteData(
    "delete-blog",
    `/blogs/${blogIdToBeDeleted}`
  );
  const handleBlogDelete = async () => {
    await deleteBlog();
    refetchBlogData();
  };

  const blogItems = blogData?.map((blog: TTableProps) => ({
    key: blog._id,
    title: blog.title,
    thumbnail: blog.thumbnail,
    isDeleted: blog.isDeleted,
    category: blog.category,
  }));

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
      title: "Category",
      dataIndex: "category",
      key: "category",
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
            href={`/edit-blog/${key}`}
          >
            <Tag
              color="blue-inverse"
              className="flex items-center justify-center p-2 cursor-pointer rounded-[6px]"
            >
              <Pencil size={17} />
            </Tag>
          </Link>

          <Popconfirm
            title="Delete the blog"
            description="Are you sure to delete this blog?"
            onConfirm={handleBlogDelete}
            onOpenChange={() => setBlogIdToBeDeleted(key)}
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
      <DashboardSectionTitle heading="My Blogs" />

      <div className="mt-6">
        <Table
          loading={isFetching || isLoading}
          dataSource={blogItems}
          columns={columns}
          scroll={{ x: 800 }}
        />
      </div>
    </div>
  );
};

export default Blogs;
