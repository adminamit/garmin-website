"use client";
import React, { useState } from "react";
import "./index.css";
export const VideoBlock = ({ fallBackImage, videoUrl }) => {
    const [active, setActive] = useState(false);
    return (
        <div
            className={`app__video-banner app__video-banner--dark ${
                active ? "app__video-banner--playing" : ""
            }`}
        >
            {/**/}
            {active ? (
                <div className="app__video-banner__video">
                    <iframe
                        className="app__video-banner__video__el"
                        title="Youtube Video"
                        src={videoUrl}
                        allow="autoplay"
                        frameBorder={0}
                        allowFullScreen
                        data-dashlane-frameid={1562}
                    />
                    <div
                        className="app__video-banner__video__close-bt__con"
                        tabIndex={0}
                        onClick={() => {
                            setActive(false);
                        }}
                    >
                        <svg
                            role="img"
                            aria-label="Close"
                            className="app__video-banner__video__close-bt"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                        >
                            <path d="M74.3 80.6c-1.4 0-2.8-.5-3.9-1.6L48.8 57.4 27.2 79c-2.1 2.1-5.6 2.1-7.7 0s-2.1-5.6 0-7.7L41 49.7 19.4 28.1c-2.1-2.1-2.1-5.6 0-7.7 2.1-2.1 5.6-2.1 7.7 0L48.7 42l21.6-21.6c2.1-2.1 5.6-2.1 7.7 0 2.1 2.1 2.1 5.6 0 7.7L56.5 49.7l21.6 21.6c2.1 2.1 2.1 5.6 0 7.7-1 1.1-2.4 1.6-3.8 1.6z" />
                        </svg>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className="app__img-banner">
                <img
                    className="app__img-banner__img app__img-banner__img--desktop"
                    src={fallBackImage.url}
                    alt="video"
                />
                <img
                    className="app__img-banner__img app__img-banner__img--mobile"
                    src={fallBackImage.url}
                    alt="video"
                />
            </div>
            <div
                tabIndex={0}
                className="app__video-banner__video__play-bt app__video-banner__video__play-bt--light"
                onClick={() => {
                    setActive(true);
                }}
            >
                <svg
                    className="app__video-banner__video__play-bt__icon"
                    role="img"
                    aria-label="Play"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 144 144"
                >
                    <path d="M121.5 72l-79 45.2V26.8l79 45.2z" />
                    <path d="M72 143.3C32.7 143.3.7 111.3.7 72S32.7.7 72 .7s71.3 32 71.3 71.3-32 71.3-71.3 71.3zm0-132.6c-33.8 0-61.3 27.5-61.3 61.3s27.5 61.3 61.3 61.3 61.3-27.5 61.3-61.3S105.8 10.7 72 10.7z" />
                </svg>
            </div>
        </div>
    );
};
