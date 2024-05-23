import { useRef, useState, useEffect } from "react";
import "@/app/_css/helpers/sticky.css";
const StickyContainer = ({ children }) => {
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const containerRef = useRef();

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > elTopOffset + elHeight) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    // add/remove scroll event listener
    useEffect(() => {
        var container = containerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(container.top, container.height);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    return (
        <div
            id="sticky-container"
            className={`navbar${sticky.isSticky ? " sticky" : ""}`}
            ref={containerRef}
        >
            {children}
        </div>
    );
};

export default StickyContainer;
