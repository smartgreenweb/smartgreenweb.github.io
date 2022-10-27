import React, { useRef, useState } from "react";

import heroVideo from "../assets/heroVideo.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import { LogoWorkMark } from "./Logo";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full -z-10"
      />

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${isVideoPlaying ? "" : "bg-black/80"
          } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <div className="pb-36">
          <LogoWorkMark className="w-auto h-16 bg-transparent lg:h-28 fill-white" />
        </div>
        <h1 className="text-5xl lg:text-7xl font-neuereg">Ushering in the <span className="font-bold font-neueit text-niagra">future...</span>
        </h1>
        <h1 className="mb-12 text-5xl lg:text-7xl font-neuereg">
          of fish produce
        </h1>


      </div>
    </div>
  );
};

export default HeroSection;
