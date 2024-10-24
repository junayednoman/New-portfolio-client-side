"use client";
import HTMLReactParser from "html-react-parser/lib/index";
import Image from "next/image";
import { useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import copyIcon from "../../../../assets/copy-icon.png";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import { useHandleQuery } from "../../../../hooks/query";
import PurpleLoading from "../../../components/ui/PurpleLoading";
import NodataPurple from "../../../components/ui/NodataPurple";
import Container from "../../../components/ui/Container";
import { FloatButton, Tag } from "antd";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoMdShare } from "react-icons/io";
import { TBlog } from "../../../../types/blog.type";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const blogId = params.blogId;
  const postUrl = `http://localhost:3000/posts/${blogId}`;

  const { data, isLoading, refetch, isError } = useHandleQuery(
    "get-single-blog",
    `blogs/${blogId}`
  );

  useEffect(() => {
    refetch();
  }, [blogId, refetch]);

  if (isLoading) {
    return <PurpleLoading />;
  }
  if (!data?.data || isError) {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        <NodataPurple />;
      </div>
    );
  }
  const blogData: TBlog = data?.data || {};

  return (
    <div className="md:pt-32 pt-12 postDetailPage">
      <Container>
        <div className="text-center max-w-[1100px] mx-auto space-y-6">
          <p className="text-gray-400">
            {moment(blogData?.createdAt).format("DD MMMM, YYYY")}
          </p>
          <h1 className="md:text-[40px] text-[32px] text-white-100 font-semibold md:leading-[55px] leading-[45px]">
            {blogData?.title}
          </h1>
          <div className="flex gap-3 items-center">
            <div className="flex gap-3 items-center text-left">
              <div className="border-[2px] border-purple rounded-full">
                <Image
                  src="https://junayed-noman.web.app/assets/junayed%20noman-_X6r-cS-.jpg"
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="Junamed noman"
                />
              </div>
              <div>
                <h5 className="text-lg text-white-100 font-semibold">
                  Junayed Noman
                </h5>
                <p className="text-white-200 text-sm">MERN stack developer</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="w-full rounded-[10px]"
              width={1920}
              height={1080}
              src={blogData?.thumbnail}
              alt={blogData?.title}
            />
            <p className="text-left mt-3 text-gray-400 md:px-5">
              {blogData?.description}
            </p>
          </div>
        </div>
        <div className="max-w-[900px] mx-auto mt-12">
          {HTMLReactParser(blogData?.content)}
          <div className="flex items-center gap-1 mt-5">
            {blogData?.tags?.map((tag: string) => (
              <Tag key={tag} className="cursor-pointer">
                <Link href={`/posts?tag=${tag.split(" ").join("+")}`}>
                  <span className="capitalize font-semibold text-text">
                    {tag}
                  </span>
                </Link>
              </Tag>
            ))}
          </div>
        </div>
      </Container>

      {/* Share Buttons */}
      <FloatButton.Group
        trigger="click"
        className="xl:mr-4 -mr-7 xl:bottom-16 md:bottom-8 bottom-5"
        type="primary"
        style={{ insetInlineEnd: 94 }}
        icon={<IoMdShare className="duration-700" />}
        closeIcon={<IoMdShare className="-rotate-[180deg] duration-700" />}
      >
        <FacebookShareButton
          url={postUrl}
          className="shadow-lg rounded-full flex"
        >
          <FacebookIcon className="rounded-full shadow-lg" size={35} />
        </FacebookShareButton>
        <TwitterShareButton
          url={postUrl}
          className="shadow-lg rounded-full flex"
        >
          <TwitterIcon className="rounded-full shadow-lg" size={35} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={postUrl}
          className="shadow-lg rounded-full flex"
        >
          <LinkedinIcon className="rounded-full shadow-lg" size={35} />
        </LinkedinShareButton>
        <TwitterShareButton
          url={postUrl}
          className="shadow-lg rounded-full flex"
        >
          <TwitterIcon className="rounded-full shadow-lg" size={35} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={postUrl}
          className="shadow-lg rounded-full flex"
        >
          <WhatsappIcon className="rounded-full shadow-lg" size={35} />
        </WhatsappShareButton>
        <FacebookMessengerShareButton
          appId="123456789"
          url={postUrl}
          className="shadow-lg rounded-full flex"
        >
          <FacebookMessengerIcon className="rounded-full shadow-lg" size={35} />
        </FacebookMessengerShareButton>

        <div className="FCardShadow rounded-full cursor-pointer min-w-[33px] min-h-[33px]">
          <CopyToClipboard text={postUrl}>
            <Image
              src={copyIcon}
              alt="icon"
              width={33}
              height={33}
              className="rounded-full w-full cursor-pointer"
            />
          </CopyToClipboard>
        </div>
      </FloatButton.Group>

      <div className="gotop">
        <FloatButton.BackTop className="xl:mr-9 lg:mr-0 sm:-mr-1 -mr-1 xl:bottom-16 md:bottom-8 bottom-5" />
      </div>
    </div>
  );
};

export default BlogDetails;
