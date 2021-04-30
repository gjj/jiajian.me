import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import DisplayPicture from "../images/dp.jpg";

function Home() {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="flex flex-col md:flex-row max-w-4xl items-center h-auto lg:h-screen mx-auto my-32 lg:my-0 justify-center">
        <img
          className="rounded-full shadow-xl mx-auto h-48 w-48 mb-4 lg:mb-0"
          src={DisplayPicture}
        />
        <div className="w-full mx-6 lg:mx-0">
          <div className="p-4 lg:p-12 text-center justify-center lg:text-left">
            <p className="hidden lg:block">Hey! I’m</p>
            <h1 className="text-4xl font-bold mt-2">Jia Jian</h1>
            <div className="flex flex-row lg:justify-start justify-center gap-4 pt-4 lg:pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                alt="LinkedIn"
                title="LinkedIn"
                href="https://www.linkedin.com/in/jiajian"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                alt="GitHub"
                title="GitHub"
                href="https://github.com/gjj"
              >
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
