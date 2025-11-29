import React from "react";
import { Timeline } from "../ui/Timeline";
export function Journey() {
  const data = [
    {
      title: "2021",
      content: (
        <div className="md:mt-0 mt-2">
          <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
            First Steps
          </h5>
          <p className="mt-2 text-neutral-200 leading-6">
            At the end of 2021 I started learning HTML and CSS and built small
            static sites. It was my first real look at how websites work, and it
            helped me understand that I enjoy creating things on the web.
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
              Moving Toward the MERN Stack
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In mid-2023, I started learning JavaScript, React.js, Next.js and
              Tailwind CSS through Programming Hero. I also worked with Firebase
              Authentication and then moved into Node.js, Express, MongoDB, and
              JWT to understand the full web workflow.
            </p>
          </div>
          <div className="mt-7">
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Leaving College
            </h5>
            <div className="mt-2 text-neutral-200 leading-6">
              In August 2023, I decided to leave college in my second year. I
              wanted to focus on learning real skills, start my career early,
              and support my family. I’ve never believed everyone has to follow
              the usual path, so I chose to take my own way—even if it felt a
              little crazy. The chance to follow my freedom and help my family
              drove my decision, and I’m proud I did it.
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
              Going Deeper in Programming
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In 2024, I continued learning through Programming Hero Level 2. I
              explored TypeScript, Express, Mongoose, Next.js, and Redux and
              started building more structured and real projects.
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
              Starting my career
            </h5>
            <p className="mt-2 text-neutral-200 leading-6">
              In December 2024, I joined Spark Tech as a Junior Full Stack
              Developer. Even though the role is full-stack, most of my work
              focuses on backend development—API design, server logic, and
              working closely with the frontend.
            </p>
            <p className="mt-2 text-neutral-200 leading-6">
              In the middle of 2025, I started taking PostgreSQL and Prisma more
              seriously. I’ve been learning how to write better SQL, model data
              properly, and use Prisma to speed up development. I’ve also begun
              working with Docker and AWS to understand hosting, deployments,
              and real-world backend environments better. I’m currently applying
              these new technologies in my projects to put what I learn into
              practice.
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
