import { Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import { TBlog } from "../../../types/blog.type";
import moment from "moment";
import myImg from "../../../assets/junayed noman1.png";

const BlogCard = ({ blog, className }: { blog: TBlog; className?: string }) => {
  const { _id, title, thumbnail, description, tags, createdAt } = blog || {};
  return (
    <div className={`border-b-neutral-700 ${className}`}>
      <div className="flex gap-3 items-center">
        <div className="border-[2px] border-purple rounded-full">
          <Image
            src={myImg}
            width={50}
            height={50}
            className="rounded-full"
            alt="junayed noman"
          />
        </div>
        <div>
          <h5 className="text-lg text-white-100 font-semibold">
            Junayed Noman
          </h5>
          <p className="text-white-200 text-sm">Full stack developer</p>
        </div>
      </div>
      <div className="mt-6">
        <span className="text-slate-400 text-sm">
          {moment(createdAt).fromNow()}
        </span>
      </div>
      <div className="mt-3">
        <Link href={`/blogs/${_id}`}>
          <Popover
            placement="topLeft"
            content={
              <Image
                src={thumbnail}
                alt="image"
                width={400}
                height={250}
                className="sm:w-[400px] w-full rounded-[12px]"
              />
            }
          >
            <h3 className="sm:text-[26px] text-2xl font-semibold text-white-100">
              {title}
            </h3>
          </Popover>
        </Link>
        <p className="text-white-100 mt-2 sm:text-base text-sm leading-6">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        {tags.map((tag) => (
          <Link
            key={tag}
            className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
            href={"/"}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
