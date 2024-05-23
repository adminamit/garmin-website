import "@/app/_css/dropdown.css";
export const Dropdown = ({ title, children }) => {
    return (
        <div className="dropdown group">
            <span className="dropdown__title">{title}</span>
            <div className="dropdown__menu">{children}</div>
        </div>
    );
};
