"use client";

import { useHandleQuery } from "../../../hooks/query";
import { TBlog } from "../../../types/blog.type";
import BlogCard from "../../components/ui/BlogCard";
import Container from "../../components/ui/Container";
import DotBackground from "../../components/ui/DotBackground";
import NodataPurple from "../../components/ui/NodataPurple";
import PurpleLoading from "../../components/ui/PurpleLoading";
import SectionTitle from "../../components/ui/SectionTitle";

const Blogs = () => {
  const { data, isError, isLoading } = useHandleQuery("blogs", "/blogs", {
    isDeleted: false,
    limit: 3,
  });
  const blogs = data?.data?.result || [];
  return (
    <main>
      <DotBackground>
        <div className="md:pt-32 pt-10 relative">
          <div className="relative">
            <div
              className="lg:h-[600px] h-[400px] lg:w-[600px] w-[400px] absolute lg:top-0 top-60 xl:right-40 right-0 z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(125,51,204,0.2566367611497724) 0%, rgba(0,0,0,0) 80%)",
              }}
            />
          </div>
          <Container>
            <SectionTitle>All Blogs</SectionTitle>
            <div className="md:mt-16 mt-10 z-10">
              {isLoading ? (
                <PurpleLoading />
              ) : blogs?.length < 1 || isError ? (
                <NodataPurple />
              ) : (
                blogs.map((blog: TBlog, i: number) => (
                  <BlogCard
                    className={`
                    ${
                      i === 0
                        ? "pb-10"
                        : i === blogs.length - 1
                        ? "pt-10"
                        : "py-10"
                    }
                    ${i !== blogs?.length - 1 && "border-b"}
                    `}
                    key={blog._id}
                    blog={blog}
                  />
                ))
              )}
            </div>
          </Container>
        </div>
      </DotBackground>
    </main>
  );
};

export default Blogs;
