import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ShootingStars } from "../components/ui/ShootingStar";
import { StarsBackground } from "../components/ui/StarBackground";
import { technologies, testimonials } from "@/data";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36 relative">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* <StarsBackground
          starDensity={0.0004} // Adjust star density
          twinkleProbability={2.7} // Twinkle effect
          className="absolute inset-1" // Ensures full-screen coverage
        /> */}

        {/* <ShootingStars
          minSpeed={2}
          maxSpeed={30}
          minDelay={1000}
          maxDelay={4000}
          className="absolute inset-0 " // Shooting stars are non-interactive
        /> */}

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Experiences with React.js
            </p>

            <TextGenerateEffect
              words="Crafting Interfaces into Engaging User Experiences"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Mohsin, a Frontend Developer.
            </p>

            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 max-lg:mt-10">
        {technologies.map((technology) => (
          <React.Fragment key={technology.id}>
            <div className="flex md:max-w-24 max-w-12 gap-2 items-center justify-center">
              <img
                src={technology.img}
                alt={technology.name}
                className="md:w-16 w-8"
              />
              <img
                src=""
                alt=""
                width={technology.id === 4 || technology.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Hero;
