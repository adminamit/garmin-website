import React from "react";
import "./index.css";
const Terms = () => {
  return (
    <div className="max-w-[900px] mx-auto my-16 copy px-4">
      <h2>Compliance</h2>
      <p>To view a Declaration of Conformity (DoC):</p>

      <ul className="list-disc mt-4">
        <li>
          For aviation DoC, go to{" "}
          <a
            href="https://support.garmin.com/en-GB/ql/?focus=manuals"
            target="_blank"
            rel="noopener"
          >
            Manuals,
          </a>
          <> </>search by product name and click on the Manuals tab.
        </li>
        <li>
          For all other products go to{" "}
          <a
            href="https://support.garmin.com/en-GB/manuals/doc/"
            target="_blank"
            rel="noopener"
          >
            DoC,
          </a>
          <> </>and select your product.
        </li>
      </ul>
      <p>
        For more information on the following topics, go to Product Design and
        Materials within the{" "}
        <a
          href="https://www.garmin-india.com/c/sustainability"
          target="_blank"
          rel="noopener"
        >
          Environment,
        </a>{" "}
        page
      </p>

      <ul className="list-disc mt-4">
        <li>Battery Information Sheets</li>
        <li>Safety Data Sheets (SDS)</li>
        <li>Restriction of Hazardous Substances (RoHS)</li>
        <li>
          Registration, Evaluation, Authorisation and Restriction of Chemical
          Substances (REACH)
        </li>
        <li>Waste Electrical and Electronic Equipment (WEEE)</li>
      </ul>
    </div>
  );
};

export default Terms;
