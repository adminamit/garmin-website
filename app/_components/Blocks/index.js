import React, { Fragment } from "react";

import { HeroSlider } from "@/app/_blocks/HeroSlider";
import { Newsletter } from "@/app/_blocks/Newsletter";
import { FeaturedSlider } from "@/app/_blocks/FeaturedSlider";
import { TwoColumnBlock } from "@/app/_blocks/TwoColumnBlock";
import { OneColumnBlock } from "@/app/_blocks/OneColumnBlock";
import { ThreeColumnBlock } from "@/app/_blocks/ThreeColumnBlock";
import { toKebabCase } from "../../_utilities/toKebabCase";
import { CopyBlock } from "@/app/_blocks/CopyBlock";
import { Series } from "@/app/_blocks/Series";
import { LargeImageBlock } from "@/app/_blocks/LargeImageBlock";
import { Heading } from "@/app/_blocks/Heading";
import { ImageGrid } from "@/app/_blocks/FeaturesBlock";
import { SmallIconGrid } from "@/app/_blocks/SmallIconGrid";
import { Headline } from "@/app/_blocks/Headline";
import { Paragraph } from "@/app/_blocks/Paragraph";
import { MediaBlock } from "@/app/_blocks/MediaBlock";
import { IconGrid } from "@/app/_blocks/IconGrid";
import { VideoBlock } from "@/app/_blocks/VideoBlock";
import { CopyFootnote } from "@/app/_blocks/CopyFootenote";
const blockComponents = {
    heroSlider: HeroSlider,
    newsletter: Newsletter,
    featuredSlider: FeaturedSlider,
    twoColumnBlock: TwoColumnBlock,
    oneColumnBlock: OneColumnBlock,
    threeColumnBlock: ThreeColumnBlock,
    copyBlock: CopyBlock,
    series: Series,
    largeImageBlock: LargeImageBlock,
    Heading: Heading,
    imageGrid: ImageGrid,
    smallIconGrid: SmallIconGrid,
    Headline: Headline,
    Paragraph: Paragraph,
    mediaBlock: MediaBlock,
    iconGrid: IconGrid,
    videoBlock: VideoBlock,
    copyFootote: CopyFootnote,
};

export const Blocks = (props) => {
    const { disableTopPadding, blocks } = props;

    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

    if (hasBlocks) {
        return (
            <Fragment>
                {blocks.map((block, index) => {
                    const { blockName, blockType } = block;

                    if (blockType && blockType in blockComponents) {
                        const Block = blockComponents[blockType];

                        if (Block) {
                            return (
                                <Block
                                    key={toKebabCase(blockName)}
                                    id={toKebabCase(blockName)}
                                    {...block}
                                />
                            );
                        }
                    }
                    return null;
                })}
            </Fragment>
        );
    }

    return null;
};
