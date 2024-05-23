import React from "react";
import "./index.css";
import Image from "next/image";
const Contact = () => {
    return (
        <div className="copy mb-16">
            <div className="w-full text-center">
                <h5 className="oswald uppercase font-400 !text-base tracking-wider">
                    company
                </h5>
            </div>
            <Image
                src="https://static.garmincdn.com/contentful/directory/about%20us/41086-D-1.jpg"
                width={0}
                height={0}
                unoptimized
                className="w-full h-[400px] object-cover"
            />
            <div className="max-w-[900px] mx-auto">
                <h1 className="oswald uppercase text-[2.5rem] font-normal tracking-wider leading-[1.25] my-12 text-center">
                    Contact Us
                </h1>
                <div>
                    <h3 id="generalenquiries">GENERAL ENQUIRIES</h3>
                    <hr />
                    <h4 id="garmineuropeltd">Garmin (Europe) Ltd</h4>
                    <p>
                        Liberty House
                        <br />
                        Hounsdown Business Park
                        <br />
                        Southampton
                        <br />
                        Hampshire
                        <br />
                        SO40 9LR
                        <br />
                        United Kingdom
                        <br />
                        <img
                            src="https://static.garmincdn.com/shared/uk/contact-us/phone.gif"
                            alt="Telephone"
                            height="18"
                        />{" "}
                        +44 (0) 23 8052 4000 <br />
                        <br />
                    </p>
                    <h3 id="technicalsupport">TECHNICAL SUPPORT</h3>
                    <hr />
                    <p>
                        For help and support, please visit our{" "}
                        <a href="https://support.garmin.com/en-GB/">
                            Support Center
                        </a>{" "}
                        where you can find FAQs and technical support phone
                        numbers.
                        <br />
                        <br />
                    </p>
                    <h3 id="aboutus">ABOUT US</h3>
                    <hr />
                    <h4 id="builttolast">Built to last.</h4>
                    <p>
                        Three simple words that describe our products, our
                        company, our culture, our future. As a leading,
                        worldwide provider of navigation, we are committed to
                        making superior products for automotive, aviation,
                        marine, outdoor and sports. For more information about
                        our company, see the{" "}
                        <a href="http://www.garmin.com/en-GB/company/about">
                            about us
                        </a>{" "}
                        section.
                    </p>
                    <p>
                        <br />
                    </p>
                    <h3 id="marketing">MARKETING</h3>
                    <hr />
                    <p>
                        Press &amp; Relations:{" "}
                        <a href="mailto:UKPressOffice@garmin.com">
                            UKPressOffice@garmin.com
                        </a>
                        .<br />
                        <br />
                    </p>
                    <h3 id="careers">CAREERS</h3>
                    <hr />
                    <h5 id="wanttojoinourteam">Want to join our team?</h5>
                    <p>
                        Garmin is an extremely active company. To satisfy our
                        customers, we have built a strong and passionate team.
                        Come and consult our{" "}
                        <a href="https://careers.garmin.com/en-GB/">
                            job&nbsp;opportunities
                        </a>
                        !
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
