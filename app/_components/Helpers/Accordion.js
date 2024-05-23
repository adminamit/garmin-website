import { use, useState } from "react";
import "@/app/_css/accordion.css";
export const Accordion = ({ title, children }) => {
    const [active, setActive] = useState(false);
    const handleActiveChange = () => {
        active ? setActive(false) : setActive(true);
    };
    return (
        <div className="g__collapsible-region">
            <div
                className="g__collapsible-region__heading"
                onClick={() => handleActiveChange()}
            >
                <div className="heading-wrapper">
                    <div className="g__heading g__heading--center g__heading--light">
                        <h2>{title}</h2>
                    </div>
                </div>
                <span
                    role="img"
                    aria-label="Expand"
                    className={`g__collapsible-region__heading__icon ${
                        active
                            ? "g__collapsible-region__heading__icon--open"
                            : ""
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18.2 11.2"
                    >
                        <path d="M9.1 11.2L0 2.2 2.2 0l6.9 7L16 0l2.2 2.2-9.1 9z"></path>
                    </svg>
                </span>
            </div>
            <div
                className={`g__collapsible-region__body ${
                    active ? "g__collapsible-region__body--open" : ""
                }`}
            >
                {children}
            </div>
        </div>
    );
};
