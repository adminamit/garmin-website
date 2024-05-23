import React from "react";
import Image from "next/image";
import NewsletterSignup from "@/app/_components/Newsletter";
import "./index.css";
const About = () => {
    return (
        <div>
            <Image
                src="https://static.garmincdn.com/contentful/directory/about%20us/41086-D-1.jpg"
                width={0}
                height={0}
                unoptimized
                className="w-full h-[400px]"
            />
            <div className="container base base__small white">
                <div className="container container--constraint">
                    <h1 className="h1 light text-center">
                        <p>ABOUT US</p>
                    </h1>
                    <div className="g__copy g__copy--center g__copy--light">
                        <div>
                            <p>
                                We make products that are engineered on the
                                inside for life on the outside. We do this so
                                our customers can make the most of the time they
                                spend pursuing their passions.
                                <br />
                                <br />
                                <br />
                                With more than 19,000 associates in 80 offices
                                around the world, we bring GPS navigation and
                                wearable technology to the automotive, aviation,
                                marine, outdoor and fitness markets. We think
                                every day is an opportunity to innovate and a
                                chance to beat yesterday.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container light">
                <div className="container--constraint">
                    <div className="g__card-container g__card-container--light">
                        <div className="g__card-container g__card-container__constraint">
                            <div className="g__card g__card--light g__card--third g__card--non-clickable g__card__vertical">
                                <div className="g__card__outer__wrapper">
                                    <div className="g__card__wrapper">
                                        <div className="g__card__content">
                                            <div className="heading g__heading g__heading--center g__heading--light">
                                                <h3>
                                                    <p>MISSION</p>
                                                </h3>
                                            </div>
                                            <div className="copy copy-only g__copy g__copy--center g__copy--light g__copy--primary">
                                                <div>
                                                    <p>
                                                        To be an enduring
                                                        company by creating
                                                        superior products for
                                                        automotive, aviation,
                                                        marine, outdoor, and
                                                        sports that are an
                                                        essential part of our
                                                        customers{"'"} lives.
                                                        <br />
                                                        <br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="g__card g__card--light g__card--third g__card--non-clickable g__card__vertical">
                                <div className="g__card__outer__wrapper">
                                    <div className="g__card__wrapper">
                                        <div className="g__card__content">
                                            <div className="heading g__heading g__heading--center g__heading--light">
                                                <h3>
                                                    <p>VISION</p>
                                                </h3>
                                            </div>
                                            <div className="copy copy-only g__copy g__copy--center g__copy--light g__copy--primary">
                                                <div>
                                                    <p>
                                                        We will be the global
                                                        leader in every market
                                                        we serve, and our
                                                        products will be sought
                                                        after for their
                                                        compelling design,
                                                        superior quality, and
                                                        best value.
                                                        <br />
                                                        <br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="g__card g__card--light g__card--third g__card--non-clickable g__card__vertical">
                                <div className="g__card__outer__wrapper">
                                    <div className="g__card__wrapper">
                                        <div className="g__card__content">
                                            <div className="heading g__heading g__heading--center g__heading--light">
                                                <h3>
                                                    <p>VALUES</p>
                                                </h3>
                                            </div>
                                            <div className="copy copy-only g__copy g__copy--center g__copy--light g__copy--primary">
                                                <div>
                                                    <p>
                                                        The foundation of our
                                                        culture is honesty,
                                                        integrity, and respect
                                                        for associates,
                                                        customers, and business
                                                        partners. Each associate
                                                        is fully committed to
                                                        serving customers and
                                                        fellow associates
                                                        through outstanding
                                                        performance and
                                                        accomplishing what we
                                                        say we will do.
                                                        <br />
                                                        <br />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure className="figure">
                <Image
                    className="image"
                    src="https://static.garmincdn.com/gdc/about-us/41119-about-us-lifestyle-image-FULL-IMAGE-DESKTOP.jpg"
                    alt="About Garmin Lifestyle - Aviation, Automotive, Fitness, Marine and Outdoor Recreation"
                    width={0}
                    height={0}
                    unoptimized
                />
            </figure>
            <h2 className="text-center my-4 oswald text-[2rem]">
                <p>STRATEGIES</p>
            </h2>

            <div className="g__tile-container">
                <div className="g__tile g__tile--base g__tile--full g__tile--dark g__tile--vertical-bottom g__tile--horizontal-center">
                    <figure className="g__tile__background">
                        <picture>
                            <Image
                                className="g__tile__background__image"
                                src="https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-people-DESKTOP.jpg"
                                width={0}
                                height={0}
                                unoptimized
                            />
                        </picture>
                    </figure>
                    <div className="g__tile__content">
                        <div className="g__tile__heading g__heading g__heading--center g__heading--dark">
                            <h3>
                                <p>PEOPLE</p>
                            </h3>
                        </div>
                        <div className="g__tile__copy g__copy g__copy--center g__copy--dark g__copy--primary">
                            <div>
                                <p>
                                    We hire the best talent and provide our
                                    associates with competitive compensations,
                                    generous benefits, career growth
                                    opportunities, and a fun and engaging
                                    culture that encourages long-term
                                    contributions.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="g__tile-container">
                <div className="g__tile g__tile--base g__tile--half g__tile--dark g__tile--vertical-bottom g__tile--horizontal-center">
                    <figure className="g__tile__background">
                        <picture>
                            <Image
                                className="g__tile__background__image"
                                src="https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-PRODUCTS-DESKTOP.jpg"
                                width={0}
                                height={0}
                                unoptimized
                            />
                        </picture>
                    </figure>
                    <div className="g__tile__content">
                        <div className="g__tile__heading g__heading g__heading--center g__heading--dark">
                            <h3>
                                <p>PRODUCTS</p>
                            </h3>
                        </div>
                        <div className="g__tile__copy g__copy g__copy--center g__copy--dark g__copy--primary">
                            <div>
                                <p>
                                    We offer products with essential utility,
                                    leading-edge technologies, compelling
                                    features, and exceptional ease-of-use to
                                    create clear differentiators our customers
                                    appreciate and desire.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="g__tile g__tile--base g__tile--half g__tile--dark g__tile--vertical-bottom g__tile--horizontal-center">
                    <figure className="g__tile__background">
                        <picture>
                            <Image
                                className="g__tile__background__image"
                                src="https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-OPERATIONS-DESKTOP.jpg"
                                width={0}
                                height={0}
                                unoptimized
                            />
                        </picture>
                    </figure>
                    <div className="g__tile__content">
                        <div className="g__tile__heading g__heading g__heading--center g__heading--dark">
                            <h3>
                                <p>OPERATIONS</p>
                            </h3>
                        </div>
                        <div className="g__tile__copy g__copy g__copy--center g__copy--dark g__copy--primary">
                            <div>
                                <p>
                                    We embrace a vertically integrated business
                                    model with strategic design, manufacturing,
                                    distribution, sales, and support centres
                                    around the world to maximise our value to
                                    customers.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="g__tile g__tile--base g__tile--half g__tile--dark g__tile--vertical-bottom g__tile--horizontal-center">
                    <figure className="g__tile__background">
                        <picture>
                            <Image
                                className="g__tile__background__image"
                                src="https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-GROWTH-DESKTOP.jpg"
                                width={0}
                                height={0}
                                unoptimized
                            />
                        </picture>
                    </figure>
                    <div className="g__tile__content">
                        <div className="g__tile__heading g__heading g__heading--center g__heading--dark">
                            <h3>
                                <p>GROWTH</p>
                            </h3>
                        </div>
                        <div className="g__tile__copy g__copy g__copy--center g__copy--dark g__copy--primary">
                            <div>
                                <p>
                                    We relentlessly pursue innovation to create
                                    new products and markets that lead to growth
                                    opportunities.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="g__tile g__tile--base g__tile--half g__tile--dark g__tile--vertical-bottom g__tile--horizontal-center">
                    <figure className="g__tile__background">
                        <picture>
                            <Image
                                className="g__tile__background__image"
                                src="https://static.garmincdn.com/gdc/about-us/41119-about-us-strategies-TILE-BANNER-SUSTAINABILITY-DESKTOP.jpg"
                                width={0}
                                height={0}
                                unoptimized
                            />
                        </picture>
                    </figure>
                    <div className="g__tile__content">
                        <div className="g__tile__heading g__heading g__heading--center g__heading--dark">
                            <h3>
                                <p>SUSTAINABILITY</p>
                            </h3>
                        </div>
                        <div className="g__tile__copy g__copy g__copy--center g__copy--dark g__copy--primary">
                            <div>
                                <p>
                                    We continuously reinvest in people,
                                    facilities and equipment to focus on
                                    long-term success and stability.
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsletterSignup
                title="SIGN UP FOR NEWS"
                description="Get product news and promotions based on your preferences and registered devices.
                Learn about email privacy."
            />
        </div>
    );
};

export default About;
