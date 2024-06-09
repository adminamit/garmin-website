import { useState } from "react";
import Navigation from "./Navigation";
import { List } from "./List";

import "@/app/_css/product/accessories.css";
export const Accessories = ({ accessories }) => {
    const [activeCategory, setActiveCategory] = useState("");
    // const handleActiveCategoryChange = (category) =>{
    //     setActiveCategory()
    // }
    return (
        <div className="app__product__accessories">
            <div className="app__product__accessories-container">
                <div className="app__product__accessories-container-inner">
                    <Navigation
                        accessories={accessories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    />
                    <List
                        accessories={accessories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    />
                </div>
                {accessories.length == 0 ? (
                    <div className="text-center oswald">
                        <h4 className="text-lg">No accessories found!</h4>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
