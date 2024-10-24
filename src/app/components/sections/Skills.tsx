"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "../../../lib/utils";
import { AnimatedBeam } from "../ui/BeamSkillTree";
import typescriptIcon from "../../../assets/typescript-svgrepo-com.svg";
import reactIcon from "../../../assets/react.svg";
import reduxIcon from "../../../assets/redux-svgrepo-com.svg";
import nodeIcon from "../../../assets/nodejs-icon-svgrepo-com.svg";
import mongooseIcon from "../../../assets/mongoose.svg";
import expressIcon from "../../../assets/express-js.svg";
import Image from "next/image";
import FContainer from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import DotBackground from "../ui/DotBackground";
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative">
      <DotBackground>
        <div className="md:pt-16 pb-10 pt-14 relative">
          <FContainer>
            <SectionTitle>Powered by</SectionTitle>
            <div
              className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-background sm:p-10 p-0 md:shadow-xl sm:mt-0 mt-10"
              ref={containerRef}
            >
              <div className="flex size-full flex-col max-w-lg items-stretch justify-between sm:gap-10 gap-7">
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div1Ref}>
                    <Image
                      className="pointer-events-none"
                      src={typescriptIcon}
                      alt="Typescript"
                      width={20}
                      height={20}
                    />
                  </Circle>
                  <Circle ref={div5Ref}>
                    <Image
                      className="pointer-events-none"
                      src={nodeIcon}
                      alt="node js"
                      width={20}
                      height={20}
                    />
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div2Ref}>
                    <Image
                      className="pointer-events-none"
                      src={reactIcon}
                      alt="react"
                      width={30}
                      height={30}
                    />
                  </Circle>
                  <Circle ref={div4Ref} className="size-16">
                    <Image
                      src={
                        "https://junayed-noman.web.app/assets/junayed%20noman-_X6r-cS-.jpg"
                      }
                      className="rounded-full pointer-events-none"
                      alt="junayed noman"
                      width={35}
                      height={35}
                    />
                  </Circle>
                  <Circle ref={div6Ref}>
                    <Image
                      className="w-[50px] pointer-events-none"
                      src={mongooseIcon}
                      alt="react"
                      width={50}
                      height={50}
                    />
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div3Ref}>
                    <Image
                      className="pointer-events-none"
                      src={reduxIcon}
                      alt="redux"
                      width={21}
                      height={21}
                    />
                  </Circle>
                  <Circle ref={div7Ref}>
                    <Image
                      className="pointer-events-none"
                      src={expressIcon}
                      alt="express"
                      width={19}
                      height={19}
                    />
                  </Circle>
                </div>
              </div>

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
              />
            </div>
          </FContainer>
        </div>
      </DotBackground>
    </section>
  );
}
