import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/Timeline";
import freelancing from "../../../assets/freelancing.jpg";
import L1Certificate from "../../../assets/L1certificate.png";
export function Education() {
  const data = [
    {
      title: "2021",
      content: (
        <div className="md:mt-0 mt-2">
          <div>
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Secondary School Certificate (SSC)
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              I have Completed my Secondary School Certificate (SSC) from the
              science group in 2021. Though I was not a very serious student I
              loved Physics more than others.
            </p>
          </div>
          <div className="mt-7">
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Learning HTML & CSS
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              At the end of 2021 I started my web development journey. I started
              learning HTML and CSS, building static websites, and exploring the
              fundamentals of web design. This phase introduced me to the world
              of front-end development, shaping my interest in crafting visually
              appealing, user-friendly interfaces.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="md:mt-0 mt-2">
          <div>
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Starting freelancing
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In the mid of 2022, I began my freelancing career, applying my
              skills in HTML, CSS, and Bootstrap to real-world projects. During
              this period, I worked with clients, building responsive websites
              and gaining hands-on experience in managing client requirements,
              timelines, and project delivery.
            </p>
            <Image
              className="rounded-[12px] mt-4"
              src={freelancing}
              alt="html css"
              width={800}
              height={300}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="md:mt-0 mt-2">
          <div>
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Starting MERN Stack Journey
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In the mid of 2023, I began my journey into web development by
              learning JavaScript and Tailwind CSS for responsive designs with{" "}
              <a
                className="font-semibold underline text-purple"
                target="_blank"
                href="https://web.programming-hero.com/home"
              >
                {" "}
                Programming Hero
              </a>
              . I explored Firebase Authentication for user management and
              gained foundational knowledge in Node.js, MongoDB, Express, and
              JWT.
            </p>
            <p className="mt-2 text-neutral-200 leading-6">
              Afterward, I collaborated on some contractual projects. In
              particular, I got an opportunity to develop a{" "}
              <span className="font-medium">
                ‘data collection system’ for around 200 primary schools{" "}
              </span>{" "}
              that won first place in a divisional competition by the primary
              education department.
            </p>
            <div className="relative mt-4">
              <Image
                className="rounded-[10px]"
                src={L1Certificate}
                alt="html css"
                width={900}
                height={100}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[10px]"></div>
            </div>
          </div>
          <div className="mt-7">
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Dropping Out of College
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In August 2023, I made the challenging decision to drop out of
              college at the end the 2nd year. But why?
              <div className="pl-4 mt-4 space-y-3">
                <p className=" text-neutral-200">
                  <span className="font-medium">
                    1. Unconventional mindset 😎:
                  </span>{" "}
                  I reject the idea that there's a single, prescribed way to
                  succeed. Love to be crazy . I don't consider the existing
                  system as constant. Instead, I wanna go beyond that. "No one
                  has ever changed the world by doing what the world has told
                  them to do."-Eddy Zhong
                </p>
                <p className=" text-neutral-200">
                  <span className="font-medium">
                    2. Early Career Opportunities:
                  </span>{" "}
                  I strongly believe in starting career early. As I began
                  Exploring Web Development and Gaining Practical Experience, I
                  realized that I could start my career early in the tech field
                  by focusing on developing industry standard skills.
                </p>
              </div>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="md:mt-0 mt-2">
          <div>
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Improving English Communication
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              I successfully completed a comprehensive 3-month offline course at
              <span className="font-semibold">English Therapy</span>, where I
              focused on refining my spoken English skills. The course
              emphasized improving fluency, pronunciation, and confidence in
              real-life conversations. Through interactive sessions and
              practical exercises, I developed a stronger command of the
              language, enabling me to communicate more effectively in both
              personal and professional settings.
            </p>
          </div>
          <div className="mt-7">
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Diving Deep into MERN Stack
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In mid-2024, I enrolled in the <strong>Level 2</strong> course by{" "}
              <a
                className="font-semibold underline text-purple"
                target="_blank"
                href="https://web.programming-hero.com/home"
              >
                {" "}
                Programming Hero
              </a>
              . During this course, I explored key technologies like TypeScript,
              Express.js, Mongoose, Next.js, and Redux, further enhancing my
              skills to build robust and scalable web applications.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section className="relative">
      <div className="md:pb-12 pb-5 max-w-[1150px] mx-auto">
        <Timeline data={data} />
      </div>
    </section>
  );
}
