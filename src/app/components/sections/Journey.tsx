import React from "react";
import { Timeline } from "../ui/Timeline";
export function Journey() {
  const data = [
    {
      title: "2021",
      content: (
        <div className="md:mt-0 mt-2">
          <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
            Learning HTML & CSS
          </h5>
          <p className="mt-2 text-neutral-200 leading-6">
            At the end of 2021 I started my web development journey. I started
            learning HTML and CSS, building static websites, and exploring the
            fundamentals of web design. This phase introduced me to the world of
            front-end development, shaping my interest in crafting visually
            appealing, user-friendly interfaces.
          </p>
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
          </div>
          <div className="mt-7">
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Dropping Out of College
            </h5>
            <div className="mt-2 text-neutral-200 leading-6">
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
                  them to do." -Eddy Zhong
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
            </div>
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
    {
      title: "2025",
      content: (
        <div className="md:mt-0 mt-2">
          <div>
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Starting professional career
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In December 2024, I joined 'Spark Tech' as a Junior Full Stack
              Developer. While my designation is full-stack, my focus is
              primarily on backend development. I am responsible for designing
              and developing APIs and seamlessly integrating them with the
              frontend.
            </p>
            <p className="mt-2 text-neutral-200 leading-6">
              In 2025, I aim to level up my skills in PostgreSQL, Prisma ORM, and dive into GraphQL. I also plan to
              explore Docker and AWS to take my backend development to the next
              level.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="journey" className="relative">
      <div className="md:pb-12 pb-5 md:pt-0 pt-10 max-w-[1150px] mx-auto">
        <Timeline data={data} />
      </div>
    </section>
  );
}
