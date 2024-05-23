import React from "react";
import { Container } from "../../Common/Container";
import ColumnLayout from "../../Common/ColumnLayout";
import { Heading } from "../../Common/Heading";
import { Feature } from "./Features/Feature";
import "@/app/_css/product/features.css";
import "@/app/_css/product/overview-intro.css";
const OverviewIntro = ({ features, title, columns, align }) => {
    return (
        <Container className="bg-white">
            {title ? (
                <div className="app__overview__intro__title">
                    <Heading align="text-center" size="text-3xl">
                        {title}
                    </Heading>
                </div>
            ) : (
                ""
            )}
            <div className="app__overview__intro__description">
                <p>
                    You don’t just run. You’ve moved beyond that. Which is why
                    you need Forerunner
                    <sup className="registered-symbol">®</sup> 165 — the
                    purpose-built GPS running smartwatch that helps you meet
                    your goals with personalised adaptive training plans and a
                    bright display to light up your progress.
                </p>
            </div>

            <ColumnLayout columns={columns}>
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} align={align} />
                ))}
            </ColumnLayout>
        </Container>
    );
};

export default OverviewIntro;
