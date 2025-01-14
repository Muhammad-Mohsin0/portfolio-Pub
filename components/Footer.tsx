import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-[10px]">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="opacity-100 "
          width={0}
          height={0}
          style={{ width: "100%", height: "0%" }}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohsin.signin00@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mohsin
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-2 md:mt-0">
          {socialMedia.map((info) =>
            info.link ? (
              <Link
                key={info.id}
                href={info.link}
                target="_blank"
                className={`w-10 h-10 cursor-pointer flex justify-center items-center 
      backdrop-filter backdrop-blur-lg saturate-180 hover:bg-white hover ${info.hoverBg}
      bg-black-200 rounded-lg border border-black-300 hover:${info.hoverColor}`}
              >
                <info.Icon className=" w-5 h-5 " />
              </Link>
            ) : null
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
