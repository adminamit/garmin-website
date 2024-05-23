import React from "react";
import "@/app/_css/components/message/message.css";
export const Message = ({ message, error, success, warning, className }) => {
    const messageToRender = message || error || success || warning;

    if (messageToRender) {
        return (
            <>
                {/* <div
                    className={[
                        "message",
                        className,
                        error && "error",
                        success && "success",
                        warning && "warning",
                        !error && !success && !warning && "default",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    {messageToRender}
                </div> */}

                <div className="flash-msg">
                    <div className="g__alert g__alert--error g__alert--with-close-btn">
                        <div className="g__alert__slot g__alert__slot--center-align">
                            <span>{messageToRender}</span>
                        </div>
                        <span
                            role="button"
                            aria-label="Close"
                            tabindex="0"
                            className="g__alert__close-btn"
                        >
                            <div className="g__icon g__icon--small g__icon--dark">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100"
                                >
                                    <path d="M74.3 80.6c-1.4 0-2.8-.5-3.9-1.6L48.8 57.4 27.2 79c-2.1 2.1-5.6 2.1-7.7 0s-2.1-5.6 0-7.7L41 49.7 19.4 28.1c-2.1-2.1-2.1-5.6 0-7.7 2.1-2.1 5.6-2.1 7.7 0L48.7 42l21.6-21.6c2.1-2.1 5.6-2.1 7.7 0 2.1 2.1 2.1 5.6 0 7.7L56.5 49.7l21.6 21.6c2.1 2.1 2.1 5.6 0 7.7-1 1.1-2.4 1.6-3.8 1.6z"></path>
                                </svg>
                            </div>
                        </span>
                    </div>
                </div>
            </>
        );
    }
    return null;
};
