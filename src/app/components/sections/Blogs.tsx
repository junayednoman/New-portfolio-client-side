import Image from "next/image";
import FContainer from "../ui/FContainer";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";
import { BackgroundLines } from "../ui/BackgroundLines";
import { Popover } from "antd";
import MagicButton from "../ui/MagicButton";
import DotBackground from "../ui/DotBackground";

const Blogs = () => {
  return (
    <section>
      <DotBackground>
        <div className="md:py-24 py-16 relative">
          <div className="relative">
            <div
              className="lg:h-[600px] h-[400px] lg:w-[600px] w-[400px] absolute lg:top-0 top-60 xl:right-40 right-0 z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(125,51,204,0.2566367611497724) 0%, rgba(0,0,0,0) 80%)",
              }}
            />
          </div>
          <FContainer>
            <SectionTitle>Written thoughts</SectionTitle>
            <div className="md:mt-16 mt-10 z-10">
              <div className="pb-10 border-b border-b-neutral-700">
                <div className="flex gap-3 items-center">
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
                    <p className="text-white-200 text-sm">
                      MERN stack developer
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href={"/"}>
                    <Popover
                      placement="topLeft"
                      content={
                        <Image
                          src={
                            "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg1mzf36r5bq3rp9jej3t.jpeg"
                          }
                          alt="image"
                          width={400}
                          height={400}
                          className="sm:w-[400px] w-full rounded-[12px]"
                        />
                      }
                    >
                      <h3 className="sm:text-[26px] text-2xl font-semibold text-white-100">
                        Building an API to summarise articles using ChatGPT API
                      </h3>
                    </Popover>
                  </Link>
                  <p className="text-white-100 mt-2 sm:text-base text-sm leading-6">
                    Once you receive a response from OpenAI, you’ll need to
                    parse it to extract the summarized content. The response
                    from the chat completions function comes in the format of an
                    array where every item have a message property with content
                    of the message. The code snippet below demonstrates how to
                    extract the first message returned by openAI. In the
                    summariser project, we create an API route named
                    summariser/route.ts. This route will handle incoming POST
                    requests and extract the URL of the article we want to
                    summarize. Here's a snippet of the code:
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Programming
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Coding
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Debug
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Web Development
                  </Link>
                </div>
              </div>
              <div className="py-10 border-b border-b-neutral-700">
                <div className="flex gap-3 items-center">
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
                    <p className="text-white-200 text-sm">
                      MERN stack developer
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href={"/"}>
                    <h3 className="sm:text-[26px] text-2xl font-semibold text-white-100">
                      Building an API to summarise articles using ChatGPT API
                    </h3>
                  </Link>
                  <p className="text-white-100 mt-2 sm:text-base text-sm leading-6">
                    Once you receive a response from OpenAI, you’ll need to
                    parse it to extract the summarized content. The response
                    from the chat completions function comes in the format of an
                    array where every item have a message property with content
                    of the message. The code snippet below demonstrates how to
                    extract the first message returned by openAI. In the
                    summariser project, we create an API route named
                    summariser/route.ts. This route will handle incoming POST
                    requests and extract the URL of the article we want to
                    summarize. Here's a snippet of the code:
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Programming
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Coding
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Debug
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Web Development
                  </Link>
                </div>
              </div>
              <div className="pt-10">
                <div className="flex gap-3 items-center">
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
                    <p className="text-white-200 text-sm">
                      MERN stack developer
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href={"/"}>
                    <h3 className="sm:text-[26px] text-2xl font-semibold text-white-100">
                      Building an API to summarise articles using ChatGPT API
                    </h3>
                  </Link>
                  <p className="text-white-100 mt-2 sm:text-base text-sm leading-6">
                    Once you receive a response from OpenAI, you’ll need to
                    parse it to extract the summarized content. The response
                    from the chat completions function comes in the format of an
                    array where every item have a message property with content
                    of the message. The code snippet below demonstrates how to
                    extract the first message returned by openAI. In the
                    summariser project, we create an API route named
                    summariser/route.ts. This route will handle incoming POST
                    requests and extract the URL of the article we want to
                    summarize. Here's a snippet of the code:
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Programming
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Coding
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Debug
                  </Link>
                  <Link
                    className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                    href={"/"}
                  >
                    Web Development
                  </Link>
                </div>
              </div>
              <div className="z-50 flex md:justify-center mt-10">
                <MagicButton>View More</MagicButton>
              </div>
            </div>
            <div className="md:-mt-[230px] lg:-ml-[660px] md:-ml-[560px]">
              <div className="relative h-[520px] md:w-[850px] w-full">
                <BackgroundLines>
                  <span className="hidden">d</span>
                </BackgroundLines>
              </div>
            </div>
          </FContainer>
        </div>
      </DotBackground>
    </section>
  );
};

export default Blogs;
