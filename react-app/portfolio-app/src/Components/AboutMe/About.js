import React, { useEffect, useState } from "react";
import { IMG_ILLUSTRATION, IMG_PREFIX, IMG_ICONS } from "../constants";
import "../../SCSS/About/about.scss";

const About = () => {
  const [waveActive, setWaveActive] = useState(false);
  const [holderScales, setHolderScales] = useState([]);
  const [waveDurations, setWaveDurations] = useState([]);

  useEffect(() => {
    // Generate random scales for each waveHolder (0.5 to 2)
    const scales = Array.from(
      { length: 6 },
      () => Math.random() * (1.1 - 0.65) + 0.85,
    );
    setHolderScales(scales);

    // Generate random durations for each wave (5000-15000ms)
    const durations = Array.from(
      { length: 18 },
      () => Math.random() * 10000 + 5000, // 5-15 seconds
    );
    setWaveDurations(durations);
  }, []);

  return (
    <div className="about-container">
      <div className="content">
        <div className="about-text">
          <h1>ABOUT</h1>
          <h1>ME !</h1>
          <p>
            Hey there! I'm Harman, a software engineer, game developer,
            procrastitating crocheter, and a fulltime gamer! My history with
            software can be traced back to my younger years with my father and I
            playing games on our PS2. One day, he suggested that I should try
            making games like the ones we used to play. That was the moment I
            got hooked on programming. Whether it's developing software,
            crafting games, or even crocheting, I love diving into new projects
            and challenges. I'm always eager to connect with fellow enthusiasts
            and explore new opportunities in the world of software and game
            development.
          </p>
        </div>
        <div className="about-image">
          <div className="circles-container">
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/crochet.png`}
                alt="Circle Icon"
              />
            </div>
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/controller.png`}
                alt="Circle Icon"
              />
            </div>
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/software.png`}
                alt="Circle Icon"
              />
            </div>
            <div className="circle">
              <img src={`${IMG_PREFIX}${IMG_ICONS}/vr.png`} alt="Circle Icon" />
            </div>
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/basketball.png`}
                alt="Circle Icon"
              />
            </div>
          </div>
          <img
            src={`${IMG_PREFIX}${IMG_ILLUSTRATION}/green_lady.png`}
            alt="About Me Illustration"
          />
        </div>
      </div>

      <div className="box">
        {[0, 1, 2, 3, 4, 5].map((holderIdx) => (
          <div
            key={holderIdx}
            className="waveHolder"
            style={
              holderScales[holderIdx]
                ? { transform: `scale(${holderScales[holderIdx]})` }
                : {}
            }
          >
            {["one", "two", "three"].map((waveIdx) => {
              const durationIdx =
                holderIdx * 3 + ["one", "two", "three"].indexOf(waveIdx);
              return (
                <div
                  key={waveIdx}
                  className={`wave -${waveIdx}`}
                  style={
                    waveDurations[durationIdx]
                      ? {
                          "--wave-duration": `${waveDurations[durationIdx]}ms`,
                        }
                      : {}
                  }
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
