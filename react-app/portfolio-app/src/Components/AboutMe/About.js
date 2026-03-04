import React, { useEffect, useState } from "react";
import { IMG_ILLUSTRATION, IMG_PREFIX } from "../constants";
import "../../SCSS/About/about.scss";

const About = () => {
    const [waveActive, setWaveActive] = useState(false);
    const [holderScales, setHolderScales] = useState([]);
    const [waveDurations, setWaveDurations] = useState([]);

    useEffect(() => {
        // Generate random scales for each waveHolder (0.5 to 2)
        const scales = Array.from({ length: 6 }, () =>
            Math.random() * (1.1 - 0.65) + 0.85
        );
        setHolderScales(scales);

        // Generate random durations for each wave (5000-15000ms)
        const durations = Array.from({ length: 18 }, () =>
            Math.random() * 10000 + 5000 // 5-15 seconds
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
                        I am a passionate software developer with a strong background in web
                        development and a keen interest in creating innovative solutions. With
                        experience in various programming languages and frameworks, I enjoy
                        tackling complex problems and continuously learning new technologies.
                        My goal is to contribute to impactful projects and collaborate with
                        like-minded individuals to drive technological advancements.
                    </p>
                </div>
                <div className="about-image">
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
                            const durationIdx = holderIdx * 3 + (["one", "two", "three"].indexOf(waveIdx));
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