import React from "react";
import Image from "next/image";
import "./index.css";
const Career = () => {
    return (
        <div className="banner">
            <div className="py-3 w-full text-center">
                <h5 className="oswald uppercase font-400 text-base tracking-wider">
                    Careers
                </h5>
            </div>
            <div className="w-full h-[500px] relative flex items-center">
                <Image
                    src="https://static.garmincdn.com/emea/gdc/careers/careers-hero-lg.jpg"
                    width={0}
                    height={0}
                    unoptimized
                    className="w-full h-full object-cover absolute"
                />
                <div className="banner__caption text-white ">
                    <h1 className="text-[2.5rem] oswald my-4">
                        GARMIN CAREERS
                    </h1>
                    <p className="my-4 font-light">Put Your Passion to Work</p>
                </div>
            </div>
            <div className="bg-black py-16 text-center text-white px-4">
                <h1 className="text-[2.5rem] oswald my-4">
                    We Fuel People{"'"}s Passions
                </h1>
                <p className="my-4 font-light text-base">
                    We make products for everywhere that people live, work and
                    play. Our customers are passionate about our products. And
                    so are we.
                </p>
            </div>
            <div className="px-5 pt-8">
                <div className="media-spotlight grid sm:grid-cols-2 gap-8 items-center pb-8">
                    <div className="media-spotlight__media relative">
                        <Image
                            className="media-image w-auto max-w-full block"
                            width={0}
                            height={0}
                            src="https://static.garmincdn.com/emea/gdc/careers/passion-to-work.jpg"
                            alt="Garmin Building"
                            unoptimized
                        />
                        <svg
                            className="media-play absolute top-1/2 left-1/2 w-[80px] opacity-65 hover:opacity-100 transition-opacity duration-200 cursor-pointer "
                            tabIndex="0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 144 144"
                        >
                            <path
                                className="play-triangle fill-white"
                                d="M121.5 72l-79 45.2V26.8z"
                            ></path>
                            <circle
                                className="play-circle"
                                cx="72"
                                cy="72"
                                r="66.3"
                            ></circle>
                        </svg>
                    </div>
                    <div className="p-8">
                        <h2 className="oswald tracking-wider text-[2rem] my-8">
                            Put Your Passion to Work.
                        </h2>
                        <p className="text-base font-light">
                            When you work at Garmin, adventure doesn{"'"}t have
                            to wait for the weekend. This is where you can put
                            your passions into action. From test flights to
                            training rides, there are so many ways to use our
                            products and follow your passions every day.
                        </p>
                    </div>
                </div>
                <div className="media-spotlight grid sm:grid-cols-2 gap-8 items-center pb-8">
                    <div className="p-8">
                        <h2 className="oswald tracking-wider text-[2rem] my-8">
                            We Put Passion Into Our Products.
                        </h2>
                        <p className="text-base font-light ">
                            The Garmin mission is to be an enduring company by
                            creating superior products for automotive, aviation,
                            marine, outdoor and sports that are an essential
                            part of our customers’ lives. Learn how an idea
                            becomes a product in this lighthearted look at our
                            development process.
                        </p>
                    </div>
                    <div className="media-spotlight__media relative">
                        <Image
                            className="media-image w-auto max-w-full block"
                            width={0}
                            height={0}
                            src="https://static.garmincdn.com/emea/gdc/careers/passion-to-products.jpg"
                            alt="Garmin Building"
                            unoptimized
                        />
                        <svg
                            className="media-play absolute top-1/2 left-1/2 w-[80px] opacity-65 hover:opacity-100 transition-opacity duration-200 cursor-pointer "
                            tabIndex="0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 144 144"
                        >
                            <path
                                className="play-triangle fill-white"
                                d="M121.5 72l-79 45.2V26.8z"
                            ></path>
                            <circle
                                className="play-circle"
                                cx="72"
                                cy="72"
                                r="66.3"
                            ></circle>
                        </svg>
                    </div>
                </div>
                <div className="media-spotlight grid sm:grid-cols-2 gap-8 items-center pb-8">
                    <div className="media-spotlight__media relative">
                        <Image
                            className="media-image w-auto max-w-full block"
                            width={0}
                            height={0}
                            src="https://static.garmincdn.com/emea/gdc/careers/meet-our-people.jpg"
                            alt="Garmin Building"
                            unoptimized
                        />
                        <svg
                            className="media-play absolute top-1/2 left-1/2 w-[80px] opacity-65 hover:opacity-100 transition-opacity duration-200 cursor-pointer "
                            tabIndex="0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 144 144"
                        >
                            <path
                                className="play-triangle fill-white"
                                d="M121.5 72l-79 45.2V26.8z"
                            ></path>
                            <circle
                                className="play-circle"
                                cx="72"
                                cy="72"
                                r="66.3"
                            ></circle>
                        </svg>
                    </div>
                    <div className="p-8">
                        <h2 className="oswald tracking-wider text-[2rem] my-8">
                            Meet Our People
                        </h2>
                        <p className="text-base font-light">
                            At Garmin our people are our most valuable asset.
                            Aamer A., team leader software engineering, shares
                            why Garmin invests in his passions, and how he
                            follows those passions in and out of the office.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-8 text-center">
                <h1 className="text-[2rem] oswald my-4 tracking-wider">
                    WHAT{"'"}S YOUR PASSION?
                </h1>
            </div>

            <div className=" max-w-[1200px] mx-auto px-4">
                <div className="grid sm:grid-cols-3 gap-5 mb-16">
                    <div className="border border-borderColor py-8 px-4">
                        <h3 className="oswald font-normal text-[1.5rem] tracking-wider leading-5 mb-4">
                            Product Support Advisor
                        </h3>
                        <div className="career__copy">
                            <p className="text-base font-light">
                                The role is full time in the office
                                (Southampton) for the first 6 months with the
                                opportunity to work from home 2 days after
                                successful completion of probation.
                                <br />
                                Salary £26,000 per annum increasing to £27,000
                                per annum after successful completion of
                                probation.
                            </p>
                            <p className="text-base">
                                <strong>Purpose of job</strong>
                            </p>
                            <ul className="text-base font-light">
                                <li>
                                    This role exists within a busy call centre
                                    environment providing technical advice.
                                </li>
                                <li>
                                    You will be responsible for answering
                                    telephone and email and live chat enquiries
                                    from Garmin Europe consumers.{" "}
                                </li>
                                <li>
                                    Responsible for providing excellent quality
                                    advice in order to meet daily personal and
                                    team performance targets.
                                </li>
                            </ul>
                            <p className="text-base font-light">
                                <a href="https://static.garmincdn.com/shared/uk/_downloads/careers/Product_Support_Advisor.pdf">
                                    Click to download the full job spec PDF
                                </a>
                            </p>
                            <p className="text-base">
                                <strong>Interested?</strong>
                                <br />
                                If you wish to apply for any of our open
                                vacancies, please send a covering letter and
                                copy of your CV to{" "}
                                <a href="mailto:careers.ge@garmin.com">
                                    careers.ge@garmin.com
                                </a>
                                . Please include what job it is you are applying
                                for.
                            </p>
                        </div>
                    </div>
                    <div className="border border-borderColor py-8 px-4">
                        <h3 className="oswald font-normal text-[1.5rem] tracking-wider leading-5 mb-4">
                            Product Support Advisor
                        </h3>
                        <div className="career__copy">
                            <p className="text-base font-light">
                                The role is full time in the office
                                (Southampton) for the first 6 months with the
                                opportunity to work from home 2 days after
                                successful completion of probation.
                                <br />
                                Salary £26,000 per annum increasing to £27,000
                                per annum after successful completion of
                                probation.
                            </p>
                            <p className="text-base">
                                <strong>Purpose of job</strong>
                            </p>
                            <ul className="text-base font-light">
                                <li>
                                    This role exists within a busy call centre
                                    environment providing technical advice.
                                </li>
                                <li>
                                    You will be responsible for answering
                                    telephone and email and live chat enquiries
                                    from Garmin Europe consumers.{" "}
                                </li>
                                <li>
                                    Responsible for providing excellent quality
                                    advice in order to meet daily personal and
                                    team performance targets.
                                </li>
                            </ul>
                            <p className="text-base font-light">
                                <a href="https://static.garmincdn.com/shared/uk/_downloads/careers/Product_Support_Advisor.pdf">
                                    Click to download the full job spec PDF
                                </a>
                            </p>
                            <p className="text-base">
                                <strong>Interested?</strong>
                                <br />
                                If you wish to apply for any of our open
                                vacancies, please send a covering letter and
                                copy of your CV to{" "}
                                <a href="mailto:careers.ge@garmin.com">
                                    careers.ge@garmin.com
                                </a>
                                . Please include what job it is you are applying
                                for.
                            </p>
                        </div>
                    </div>
                    <div className="border border-borderColor py-8 px-4">
                        <h3 className="oswald font-normal text-[1.5rem] tracking-wider leading-5 mb-4">
                            Product Support Advisor
                        </h3>
                        <div className="career__copy">
                            <p className="text-base font-light">
                                The role is full time in the office
                                (Southampton) for the first 6 months with the
                                opportunity to work from home 2 days after
                                successful completion of probation.
                                <br />
                                Salary £26,000 per annum increasing to £27,000
                                per annum after successful completion of
                                probation.
                            </p>
                            <p className="text-base">
                                <strong>Purpose of job</strong>
                            </p>
                            <ul className="text-base font-light">
                                <li>
                                    This role exists within a busy call centre
                                    environment providing technical advice.
                                </li>
                                <li>
                                    You will be responsible for answering
                                    telephone and email and live chat enquiries
                                    from Garmin Europe consumers.{" "}
                                </li>
                                <li>
                                    Responsible for providing excellent quality
                                    advice in order to meet daily personal and
                                    team performance targets.
                                </li>
                            </ul>
                            <p className="text-base font-light">
                                <a href="https://static.garmincdn.com/shared/uk/_downloads/careers/Product_Support_Advisor.pdf">
                                    Click to download the full job spec PDF
                                </a>
                            </p>
                            <p className="text-base">
                                <strong>Interested?</strong>
                                <br />
                                If you wish to apply for any of our open
                                vacancies, please send a covering letter and
                                copy of your CV to{" "}
                                <a href="mailto:careers.ge@garmin.com">
                                    careers.ge@garmin.com
                                </a>
                                . Please include what job it is you are applying
                                for.
                            </p>
                        </div>
                    </div>
                    <div className="border border-borderColor py-8 px-4">
                        <h3 className="oswald font-normal text-[1.5rem] tracking-wider leading-5 mb-4">
                            Product Support Advisor
                        </h3>
                        <div className="career__copy">
                            <p className="text-base font-light">
                                The role is full time in the office
                                (Southampton) for the first 6 months with the
                                opportunity to work from home 2 days after
                                successful completion of probation.
                                <br />
                                Salary £26,000 per annum increasing to £27,000
                                per annum after successful completion of
                                probation.
                            </p>
                            <p className="text-base">
                                <strong>Purpose of job</strong>
                            </p>
                            <ul className="text-base font-light">
                                <li>
                                    This role exists within a busy call centre
                                    environment providing technical advice.
                                </li>
                                <li>
                                    You will be responsible for answering
                                    telephone and email and live chat enquiries
                                    from Garmin Europe consumers.{" "}
                                </li>
                                <li>
                                    Responsible for providing excellent quality
                                    advice in order to meet daily personal and
                                    team performance targets.
                                </li>
                            </ul>
                            <p className="text-base font-light">
                                <a href="https://static.garmincdn.com/shared/uk/_downloads/careers/Product_Support_Advisor.pdf">
                                    Click to download the full job spec PDF
                                </a>
                            </p>
                            <p className="text-base">
                                <strong>Interested?</strong>
                                <br />
                                If you wish to apply for any of our open
                                vacancies, please send a covering letter and
                                copy of your CV to{" "}
                                <a href="mailto:careers.ge@garmin.com">
                                    careers.ge@garmin.com
                                </a>
                                . Please include what job it is you are applying
                                for.
                            </p>
                        </div>
                    </div>
                    <div className="border border-borderColor py-8 px-4">
                        <h3 className="oswald font-normal text-[1.5rem] tracking-wider leading-5 mb-4">
                            Product Support Advisor
                        </h3>
                        <div className="career__copy">
                            <p className="text-base font-light">
                                The role is full time in the office
                                (Southampton) for the first 6 months with the
                                opportunity to work from home 2 days after
                                successful completion of probation.
                                <br />
                                Salary £26,000 per annum increasing to £27,000
                                per annum after successful completion of
                                probation.
                            </p>
                            <p className="text-base">
                                <strong>Purpose of job</strong>
                            </p>
                            <ul className="text-base font-light">
                                <li>
                                    This role exists within a busy call centre
                                    environment providing technical advice.
                                </li>
                                <li>
                                    You will be responsible for answering
                                    telephone and email and live chat enquiries
                                    from Garmin Europe consumers.{" "}
                                </li>
                                <li>
                                    Responsible for providing excellent quality
                                    advice in order to meet daily personal and
                                    team performance targets.
                                </li>
                            </ul>
                            <p className="text-base font-light">
                                <a href="https://static.garmincdn.com/shared/uk/_downloads/careers/Product_Support_Advisor.pdf">
                                    Click to download the full job spec PDF
                                </a>
                            </p>
                            <p className="text-base">
                                <strong>Interested?</strong>
                                <br />
                                If you wish to apply for any of our open
                                vacancies, please send a covering letter and
                                copy of your CV to{" "}
                                <a href="mailto:careers.ge@garmin.com">
                                    careers.ge@garmin.com
                                </a>
                                . Please include what job it is you are applying
                                for.
                            </p>
                        </div>
                    </div>
                    <div className="border border-borderColor py-8 px-4">
                        <h3 className="oswald font-normal text-[1.5rem] tracking-wider leading-5 mb-4">
                            Product Support Advisor
                        </h3>
                        <div className="career__copy">
                            <p className="text-base font-light">
                                The role is full time in the office
                                (Southampton) for the first 6 months with the
                                opportunity to work from home 2 days after
                                successful completion of probation.
                                <br />
                                Salary £26,000 per annum increasing to £27,000
                                per annum after successful completion of
                                probation.
                            </p>
                            <p className="text-base">
                                <strong>Purpose of job</strong>
                            </p>

                            <p className="text-base font-light">
                                <a href="https://static.garmincdn.com/shared/uk/_downloads/careers/Product_Support_Advisor.pdf">
                                    Click to download the full job spec PDF
                                </a>
                            </p>
                            <p className="text-base">
                                <strong>Interested?</strong>
                                <br />
                                If you wish to apply for any of our open
                                vacancies, please send a covering letter and
                                copy of your CV to{" "}
                                <a href="mailto:careers.ge@garmin.com">
                                    careers.ge@garmin.com
                                </a>
                                . Please include what job it is you are applying
                                for.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="media-spotlight grid sm:grid-cols-2 gap-8 items-center pb-8">
                    <div className="media-spotlight__media relative">
                        <Image
                            className="media-image w-auto max-w-full block"
                            width={0}
                            height={0}
                            src="https://static.garmincdn.com/emea/gdc/careers/world-map.jpg"
                            alt="Garmin Building"
                            unoptimized
                        />
                    </div>
                    <div className="p-8">
                        <h2 className="oswald tracking-wider text-[2rem] my-8">
                            A WORLD OF OPPORTUNITIES
                        </h2>
                        <p className="text-base font-light">
                            With more than 19,900 associates in 60 offices
                            around the globe, Garmin is committed to worldwide
                            collaboration. We bridge distances and cultural
                            barriers through a shared interest in innovation and
                            helping our customers do what they love.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
