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
              In mid-2023, I started learning JavaScript and Tailwind CSS
              through Programming Hero. I also worked with Firebase
              Authentication and then moved into Node.js, Express, MongoDB, and
              JWT to understand the full web workflow.
            </p>
          </div>
          <div className="mt-7">
            <h5 className="text-white-100 font-semibold md:text-2xl text-xl">
              Leaving College
            </h5>
            <div className="mt-2 text-neutral-200 leading-6">
              In August 2023, I decided to drop out of college during my second
              year. My reason was simple: I wanted to learn real skills and
              start working earlier instead of waiting until graduation. I felt
              I could grow faster by focusing fully on development and building
              practical experience.
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
              Going Deeper
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
              In the mid of 2025 I started taking PostgreSQL, Prisma more
              seriously. I’ve been learning how to write better SQL, model data
              properly, and use Prisma to speed up development. I’ve also begun
              working with Docker and AWS so I can understand hosting,
              deployments, and real-world backend environments better.
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
