import React, { useState, useRef, MutableRefObject } from "react";
import "../App.css";
import { Button, ButtonProps } from "./Button";
import "./HeroSection.css";

function HeroSection(): JSX.Element {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video && video.paused) {
      video.play();
      setIsPlaying(true);
    } else if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Declare additional props for the Button component
  const buttonProps: ButtonProps = {
    buttonStyle: "btn--outline",
    buttonSize: "btn--large",
    children: "", // Add an empty string as children prop
  };

  return (
    <div className="hero-container">
      <video ref={videoRef} loop muted>
        <source
          src={process.env.PUBLIC_URL + "/videos/project-1.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        {/* Spread the buttonProps object to pass down the additional props */}
        <Button {...buttonProps}>GET STARTED</Button>
        <button className="trailer--button" onClick={handlePlayPause}>
          {isPlaying ? "PAUSE TIMELAPSE" : "WATCH TIMELAPSE"}{" "}
          <i
            className={isPlaying ? "fas fa-pause-circle" : "far fa-play-circle"}
          />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
