import { useState } from "react";
import "@/app/_css/tooltip.css";
const Tooltip = ({ title, icon, children, type }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleTooltipText = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    };
    return (
        <div className={`tooltip tooltip--${type}`}>
            <div className="tooltip__summary" onClick={toggleTooltipText}>
                <span
                    className={`tooltip__title ${
                        type === "product" ? "" : "oswald"
                    }`}
                >
                    {title}
                </span>
                <span className="tooltip__icon">{icon}</span>
            </div>
            {isVisible ? <div className="tooltip__text">{children}</div> : " "}
        </div>
    );
};

export default Tooltip;
