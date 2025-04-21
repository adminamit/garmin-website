import React from "react";
import "./index.css";
import Link from "next/link";
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
      <div className="max-w-[900px] mx-auto px-4">
        <h1 className="oswald uppercase text-[2.5rem] font-normal tracking-wider leading-[1.25] my-12 text-center">
          Contact Us
        </h1>
        <div>
          <h3 id="generalenquiries">GENERAL ENQUIRIES</h3>
          <hr />
          <h4 id="garmineuropeltd">AMIT GPS & Navigation LLP</h4>
          <p>
            JA0326, 3rd Floor, DLF Tower A Jasola, <br />
            New Delhi, 110025
            <br />
            <img
              src="https://static.garmincdn.com/shared/uk/contact-us/phone.gif"
              alt="Telephone"
              height="18"
            />{" "}
            011 4800 5800/813/825 <br />
            <a href="mailto:info@garmin-india.com">info@garmin-india.com</a>
            <br />
            <br />
          </p>
          <h3 id="technicalsupport">TECHNICAL SUPPORT</h3>
          <hr />
          <p>
            For help and support, please contact 011-48005813/825 or send us an
            email at{" "}
            <a href="mailto:support.india@amitintl.com">
              support.india@amitintl.com
            </a>
            <br />
            <p>
              Working Hours : Monday to Friday: 9:30 AM – 6:00 PM (Saturday,
              Sunday & National Holidays: Closed)
            </p>
            <br />
          </p>

          <h3 id="marketing">MARKETING</h3>
          <hr />
          <p>
            For marketing related queries: marketing@garmin-india.com
            <br />
            <br />
          </p>
          {/* <h3 id="careers">CAREERS</h3>
                    <hr />
                    <h5 id="wanttojoinourteam">Want to join our team?</h5>
                    <p>
                        Garmin is an extremely active company. To satisfy our
                        customers, we have built a strong and passionate team.
                        Come and consult our{" "}
                        <Link href="/career">job&nbsp;opportunities</Link>!
                    </p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
