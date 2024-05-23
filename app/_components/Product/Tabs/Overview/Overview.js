import React from "react";
import Disclaimer from "./Disclaimer";
import FeaturesBlock from "./Features/FeaturesBlock";
import OverviewIntro from "./Intro";
import { VideoBanner } from "./VideoBanner/VideoBanner";
import Headline from "./Headline/Headline";
import { LifeStyle } from "./LifeStyle";
import { Blocks } from "@/app/_components/Blocks";
export const Overview = ({ productData }) => {
    const introFeatures = [
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/AMOLED_Display.svg",
            title: "",
            description: "1.2″ COLOURFUL AMOLED DISPLAY",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Battery_Life.svg",
            title: "",
            description:
                "UP TO 11 DAYS OF BATTERY LIFE IN SMARTWATCH MODE            ",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/TRAINING-GUIDANCE.svg",
            title: "",
            description: "TRAINING METRICS AND RECOVERY INSIGHTS",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Preloaded_Sports_Apps.svg",
            title: "",
            description: "25+ BUILT-IN GPS AND INDOOR SPORTS APPS",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Touchscreen.svg",
            title: "",
            description: "TOUCHSCREEN AND BUTTONS",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/GPS_tracking.svg",
            title: "",
            description:
                "BUILT-IN GPS FOR TIME, DISTANCE, PACE AND SPEED         ",
        },
    ];
    const features = [
        {
            icon: "https://res.garmin.com/en_GB/products/010-02863-20/g/65366-1.jpg",
            title: "SAFETY AND TRACKING",
            description:
                "If your watch senses that an incident occurred, it will send a message with your live location <sup>3</sup> . Or if you feel unsafe, you can do it manually.",
        },
        {
            icon: "https://res.garmin.com/en_GB/products/010-02863-20/g/65366-2.jpg",
            title: "GARMIN PAY<sup className='tm-symbol'>™</sup> CONTACTLESS PAYMENTS",
            description:
                "Breeze through checkout lines or transit systems with <a href='https://www.garmin.com/en-GB/garminpay/banks/'>participating providers.</a> </p>",
        },
        {
            icon: "https://res.garmin.com/en_GB/products/010-02863-20/g/65366-3.jpg",
            title: "SMART NOTIFICATIONS",
            description:
                "Receive emails, texts and alerts on your multisport watch when paired with your <a href='https://support.garmin.com/en-GB/?faq=pvL8aWsaLU2iKyvF8VrpP9'>iPhone<sup >®</sup> or Android<sup className='tm-symbol'>™</sup> smartphone.</a> </p>",
        },
        {
            icon: "https://res.garmin.com/en_GB/products/010-02863-20/g/65366-1.jpg",
            title: "SAFETY AND TRACKING",
            description:
                "If your watch senses that an incident occurred, it will send a message with your live location <sup>3</sup> . Or if you feel unsafe, you can do it manually.",
        },
        {
            icon: "https://res.garmin.com/en_GB/products/010-02863-20/g/65366-2.jpg",
            title: "GARMIN PAY<sup className='tm-symbol'>™</sup> CONTACTLESS PAYMENTS",
            description:
                "Breeze through checkout lines or transit systems with <a href='https://www.garmin.com/en-GB/garminpay/banks/'>participating providers.</a> </p>",
        },
        {
            icon: "https://res.garmin.com/en_GB/products/010-02863-20/g/65366-3.jpg",
            title: "SMART NOTIFICATIONS",
            description:
                "Receive emails, texts and alerts on your multisport watch when paired with your <a href='https://support.garmin.com/en-GB/?faq=pvL8aWsaLU2iKyvF8VrpP9'>iPhone<sup >®</sup> or Android<sup className='tm-symbol'>™</sup> smartphone.</a> </p>",
        },
    ];
    const connectFeatures = [
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/assistance.svg",
            title: "SAFETY AND TRACKING",
            description:
                "If your watch senses that an incident occurred, it will send a message with your live location <sup>3</sup> . Or if you feel unsafe, you can do it manually.",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Garmin_Pay.svg",
            title: "GARMIN PAY<sup className='tm-symbol'>™</sup> CONTACTLESS PAYMENTS",
            description:
                "Breeze through checkout lines or transit systems with <a href='https://www.garmin.com/en-GB/garminpay/banks/'>participating providers.</a> </p>",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Messaging.svg",
            title: "SMART NOTIFICATIONS",
            description:
                "Receive emails, texts and alerts on your multisport watch when paired with your <a href='https://support.garmin.com/en-GB/?faq=pvL8aWsaLU2iKyvF8VrpP9'>iPhone<sup >®</sup> or Android<sup className='tm-symbol'>™</sup> smartphone.</a> </p>",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/live-tracking.svg",
            title: "LIVETRACK FEATURE",
            description:
                "Friends and family can follow your real-time location<sup>3</sup> and view preplanned courses.",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Garmin_Connect.svg",
            title: "GARMIN CONNECT APP",
            description:
                "See your health and fitness information, connect with friends and more.",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/CONNECT-IQ-STORE.svg",
            title: "CONNECT IQ<sup >™</sup> STORE",
            description:
                " <a href='https://buy.garmin.com/en-GB/GB/p/616398'>Add</a> watch faces, data fields and apps to your paired watch.",
        },
    ];
    const performFeatures = [
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/assistance.svg",
            title: "SAFETY AND TRACKING",
            description:
                "If your watch senses that an incident occurred, it will send a message with your live location <sup>3</sup> . Or if you feel unsafe, you can do it manually.",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Garmin_Pay.svg",
            title: "GARMIN PAY<sup className='tm-symbol'>™</sup> CONTACTLESS PAYMENTS",
            description:
                "Breeze through checkout lines or transit systems with <a href='https://www.garmin.com/en-GB/garminpay/banks/'>participating providers.</a> </p>",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Messaging.svg",
            title: "SMART NOTIFICATIONS",
            description:
                "Receive emails, texts and alerts on your multisport watch when paired with your <a href='https://support.garmin.com/en-GB/?faq=pvL8aWsaLU2iKyvF8VrpP9'>iPhone<sup >®</sup> or Android<sup className='tm-symbol'>™</sup> smartphone.</a> </p>",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/live-tracking.svg",
            title: "LIVETRACK FEATURE",
            description:
                "Friends and family can follow your real-time location<sup>3</sup> and view preplanned courses.",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/Garmin_Connect.svg",
            title: "GARMIN CONNECT APP",
            description:
                "See your health and fitness information, connect with friends and more.",
        },
        {
            icon: "https://static.garmincdn.com/gdc/Product_Pages/ICONS/CONNECT-IQ-STORE.svg",
            title: "CONNECT IQ<sup >™</sup> STORE",
            description:
                " <a href='https://buy.garmin.com/en-GB/GB/p/616398'>Add</a> watch faces, data fields and apps to your paired watch.",
        },
    ];

    return (
        <div>
            <div>
                {/* {lifeStyleBlocks.map((lifeStyle, key) => {
                    return <LifeStyle {...lifeStyle} key={key} />;
                })} */}

                {/* <OverviewIntro
                    features={introFeatures}
                    title="TRAIN BRILLIANTLY"
                    columns="6"
                />

                <FeaturesBlock
                    features={features}
                    title=""
                    columns="3"
                    align="left"
                />
                
                <FeaturesBlock
                    features={performFeatures}
                    title="perform"
                    columns="5"
                /> */}
                {/* <FeaturesBlock
                    features={connectFeatures}
                    title="connect"
                    columns="5"
                /> */}
            </div>
            {/* <Disclaimer /> */}

            <React.Fragment>
                <Blocks blocks={productData.overview} />
            </React.Fragment>
        </div>
    );
};
