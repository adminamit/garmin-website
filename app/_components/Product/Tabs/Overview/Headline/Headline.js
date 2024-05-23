import React from "react";
import { Container } from "../../../Common/Container";
import ColumnLayout from "../../../Common/ColumnLayout";
import "@/app/_css/product/headline.css";
const Headline = ({ text }) => {
    return (
        <Container>
            <ColumnLayout columns="1">
                <h2
                    className="app__headline app__headline--dark app__headline--center app__headline--mobile--center"
                    data-translate=""
                >
                    <span
                        className="app__headline__container"
                        style={{
                            "background-color": "rgb(0, 0, 0)",
                            "padding-top": "3rem",
                            "padding-bottom": "3rem",
                            "font-size": " 4.5em",
                        }}
                    >
                        <span className="app__headline__primary-text">
                            {text}
                        </span>
                    </span>
                </h2>
            </ColumnLayout>
        </Container>
    );
};

export default Headline;
