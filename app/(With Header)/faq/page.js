import React from "react";
import { MdOutlineContactSupport } from "react-icons/md";

import "./index.css";
const Privacy = () => {
    return (
        <>
            <div className="py-4 bg-white">
                <h3 className="uppercase font-normal text-base text-center">
                    FAQ{"'"}s
                </h3>
            </div>
            <section class="content__section content__section--hero text-center">
                <div className="w-full flex justify-center">
                    <MdOutlineContactSupport className="text-center text-[6rem] text-white" />
                </div>

                <h1 class="content__section__heading">
                    Frequently Asked Question{"'"}s
                </h1>
                <div class="content__section__copy">
                    <p>
                        Get answers to your questions quickly and conveniently
                        with our FAQ page. Browse through commonly asked queries
                        and find solutions effortlessly. Simplify your
                        experience with our comprehensive FAQ section.
                    </p>
                </div>
            </section>
            <section class="content__section">
                <div class="content__section__icon--squiggly-spacer"></div>
                <h2 class="content__section__heading">
                    What personal data does Garmin collect?
                </h2>
                <div class="content__section__copy">
                    <p>
                        Garmin makes products that are engineered on the inside
                        for life on the outside. We ask for personal data — such
                        as your name, email address, location, and other
                        information — so you can sign in to your account,
                        receive personalized support, receive important safety
                        information about your devices, and get the most out of
                        our products.
                    </p>
                </div>
                <details class="content__section__details" index="1">
                    <summary class="content__section__details__summary">
                        Learn More
                    </summary>
                    <div class="content__section__details__content">
                        <h3 class="content__section__details__content__heading">
                            When You Make a Garmin Account
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                Garmin stores information such as your name,
                                email address, and password so you can sign in.
                                It also helps us verify your account if you call
                                customer support.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            When You Sync Devices
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                When you sync devices, data such as your IP
                                address, sync time and date, and battery level
                                will be uploaded to Garmin.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            When You Buy Products or Subscriptions
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                When you buy products or subscriptions through
                                our website, stores, or apps, we ask for
                                information such as your name, address, phone
                                number, and other information needed to collect
                                your payment and fulfill your order. We have a
                                third party process your payment information,
                                but Garmin does not store your payment card
                                details.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            When You Use Location Features
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                Sometimes we need to collect your device’s
                                location. That makes it a lot easier to tell you
                                about things such as weather in your area,
                                nearby traffic, and even movie prices near you.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            When You Use Auto Navigation
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                With your consent, Garmin collects information
                                that includes location, direction, and speed to
                                help with features such as parking and traffic.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            When You Contact Garmin
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                We know you might want to stay off the grid, but
                                we may collect things such as your contact,
                                device, or subscription information during
                                support calls to ensure that you get the help
                                you need.
                            </p>
                        </div>
                        <div class="content__section__details__content__copy">
                            <a href="https://www.garmin.com/en-GB/privacy/global/policy/">
                                View Full Privacy Policy
                            </a>
                        </div>
                    </div>
                </details>
            </section>
            <section class="content__section">
                <div class="content__section__icon--squiggly-spacer"></div>
                <h2 class="content__section__heading">
                    Why does Garmin ask for your personal data?
                </h2>
                <div class="content__section__copy">
                    <p>
                        From providing product support to offering clear
                        directions to your destination, any information we ask
                        you for is used to improve your experience with Garmin.
                    </p>
                </div>
                <details class="content__section__details" index="2">
                    <summary class="content__section__details__summary">
                        Learn More
                    </summary>
                    <div class="content__section__details__content">
                        <h3 class="content__section__details__content__heading">
                            To Keep You Informed
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                When we have something important to tell you
                                about your products, apps, subscriptions, or
                                account — such as vital safety information, app
                                updates, new products or deals, and updates to
                                our privacy policy — we use collected contact
                                information to reach you.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            To Improve Our Sites and Apps
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                When you visit our sites or use our apps, we
                                collect information — such as your IP address,
                                location, times that you visit, and more — to
                                let us know how people navigate our sites and
                                apps and how we can improve them.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            To Give You Information You Might Actually Find
                            Interesting
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                We use things such as cookies, pixel tags, and
                                similar tools to help us provide better, more
                                relevant content on our sites.
                            </p>
                            <p>
                                We also use these tools to see how effective our
                                ads are and to identify any problems that we
                                need to fix. All in all, we just want to give
                                you websites worth browsing.
                            </p>
                        </div>
                        <div class="content__section__details__content__copy">
                            <a href="https://www.garmin.com/en-GB/privacy/global/policy/">
                                View Full Privacy Policy
                            </a>
                        </div>
                    </div>
                </details>
            </section>

            <section class="content__section">
                <div class="content__section__icon--squiggly-spacer"></div>
                <h2 class="content__section__heading">
                    Does Garmin sell your personal data?
                </h2>
                <div class="content__section__copy">
                    <p>
                        No! We don’t sell your personal data to anyone. And we
                        only share personal data with others in specific
                        situations.
                    </p>
                </div>
                <details class="content__section__details" index="3">
                    <summary class="content__section__details__summary">
                        Learn More
                    </summary>
                    <div class="content__section__details__content">
                        <h3 class="content__section__details__content__heading">
                            Data Shared with Content and Feature Providers
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                With your consent, we share information
                                collected from your auto navigation device —
                                such as location, direction, and speed — with
                                third parties that provide content and features
                                such as traffic and parking information.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            Data Shared Within Garmin
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                Garmin is global, which means that Garmin has
                                companies all over the world that work together
                                to provide our products/services and support our
                                business. No matter which Garmin company handles
                                your information, it is still secured under this
                                privacy policy.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            Data Shared with Service Providers
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                We share personal data with third parties who
                                provide services — such as fulfilling orders,
                                processing payments, and sending emails to
                                customers — for us.
                            </p>
                        </div>
                        <h3 class="content__section__details__content__heading">
                            Data Shared for Legal Reasons
                        </h3>
                        <div class="content__section__details__content__copy">
                            <p>
                                We will share your personal data when required
                                to by law enforcement and in other legal
                                matters.
                            </p>
                        </div>
                        <div class="content__section__details__content__copy">
                            <a href="https://www.garmin.com/en-GB/privacy/global/policy/">
                                View Full Privacy Policy
                            </a>
                        </div>
                    </div>
                </details>
            </section>
            <section class="content__section">
                <div class="content__section__icon--squiggly-spacer"></div>
                <h2 class="content__section__heading">
                    How can you manage your personal data?
                </h2>
                <div class="content__section__copy">
                    <p>
                        Visit our{" "}
                        <a href="https://www.garmin.com/account/datamanagement">
                            Account Management Center
                        </a>{" "}
                        to manage your data or exercise your rights. If you have
                        questions about your rights,{" "}
                        <a href="https://www.garmin.com/privacy/your-data-protection-rights/policy/">
                            click here
                        </a>{" "}
                        to learn more.
                    </p>
                </div>
                <div class="content__section__details__content__copy">
                    {/* <a href="https://www.garmin.com/en-GB/privacy/global/policy/">
                        View Full Privacy Policy
                    </a> */}
                </div>
            </section>
        </>
    );
};

export default Privacy;
