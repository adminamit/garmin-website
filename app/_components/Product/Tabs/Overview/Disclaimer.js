import React from "react";
import { Container } from "../../Common/Container";

const Disclaimer = () => {
    return (
        <div>
            <Container
                theme="app__layout-container--neutral"
                width="app__layout-container--small"
            >
                <div className="app__disclaimer__block">
                    <div className="app__disclaimer__item" data-translate="">
                        <sup>1</sup>
                        <span>
                            When paired with your compatible iPhone or Android
                            smartphone. Certain smartphones are not compatible
                            with Venu 3 voice functionality features; see{" "}
                            <a href="https://garmin.com/VoiceFunctionality">
                                Garmin.com/VoiceFunctionality.
                            </a>
                            <br />{" "}
                        </span>
                    </div>
                    <div className="app__disclaimer__item" data-translate="">
                        <sup>2</sup>
                        <span>
                            {" "}
                            <a href="https://www.garmin.com/en-GB/legal/atdisclaimer/"></a>
                            <a href="https://www.garmin.com/en-GB/legal/atdisclaimer">
                                Activity tracking accuracy.
                            </a>{" "}
                        </span>
                    </div>
                </div>
                <div className="app__disclaimer__block">
                    <div className="app__disclaimer__item" data-translate="">
                        <sup>3</sup>
                        <span>
                            This is not a medical device and is not intended for
                            use in the diagnosis or monitoring of any medical
                            condition; see{" "}
                            <a href="https://www.garmin.com/en-GB/legal/atdisclaimer/">
                                Garmin.com/ataccuracy
                            </a>
                            . Pulse Ox not available in all countries.
                        </span>
                    </div>
                    <div className="app__disclaimer__item" data-translate="">
                        <sup>4</sup>
                        <span>
                            When paired with your{" "}
                            <a href="https://support.garmin.com/en-GB/?faq=pvL8aWsaLU2iKyvF8VrpP9">
                                compatible smartphone.
                            </a>{" "}
                            For safety and tracking features requirements and
                            limitations, see{" "}
                            <a href="https://www.garmin.com/en-GB/legal/idtermsofuse">
                                Garmin.com/safety.
                            </a>{" "}
                            Incident detection is unavailable when the watch is
                            in wheelchair mode.
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Disclaimer;
