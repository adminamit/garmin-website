import React from "react";
import { Container } from "../../../Common/Container";
import ColumnLayout from "../../../Common/ColumnLayout";
import { Heading } from "../../../Common/Heading";
import { Feature } from "./Feature";
import "@/app/_css/product/features.css";
const FeaturesBlock = ({
    heading,
    items,
    align = "center",
    columns = 3,
    type,
    headingSize,
}) => {
    return (
        <Container className="bg-white">
            {heading ? (
                <>
                    <Heading align="text-left" size="text-3xl">
                        {heading}
                    </Heading>
                    <div className="app__line-divider -mt-2 mb-8 h-[1px] w-full bg-black"></div>
                </>
            ) : (
                ""
            )}

            <ColumnLayout columns={columns} type={type}>
                {items.map((feature, index) => (
                    <Feature
                        key={index}
                        {...feature}
                        align={align}
                        headingSize={headingSize}
                    />
                ))}
            </ColumnLayout>
        </Container>
    );
};

export default FeaturesBlock;
