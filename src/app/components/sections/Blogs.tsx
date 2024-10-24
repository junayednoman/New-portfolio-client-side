"use client";
import SectionTitle from "../ui/SectionTitle";
import DotBackground from "../ui/DotBackground";
import Container from "../ui/Container";
import { useHandleQuery } from "../../../hooks/query";
import BlogCard from "../ui/BlogCard";
import { TBlog } from "../../../types/blog.type";
import NodataPurple from "../ui/NodataPurple";
import PurpleLoading from "../ui/PurpleLoading";
import MagicButton from "../ui/MagicButton";

const Blogs = () => {
  const { data, isError, isLoading } = useHandleQuery("blogs", "/blogs", {
    isDeleted: false,
  });
  const blogs = data?.data?.result || [];
  return (
    <section id="blogs">
      <DotBackground>
        <div className="md:pt-24 pt-16 relative">
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
            <SectionTitle>Written thoughts</SectionTitle>
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
              <div className="mt-10">
                <MagicButton link="/blogs">View More</MagicButton>
              </div>
            </div>
          </Container>
        </div>
      </DotBackground>
    </section>
  );
};

export default Blogs;
