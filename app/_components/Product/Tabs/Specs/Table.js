import React from "react";

const Table = ({ productSpecifications }) => {
    return (
        <>
            {productSpecifications.map((group) => {
                return (
                    <table key={group.id}>
                        <tbody>
                            <tr className="title">
                                <td
                                    colSpan="2"
                                    className="border-0 p-0 !pl-0 !pr-0"
                                >
                                    <h3>{group.specificationGroup.title}</h3>
                                </td>
                            </tr>

                            {group.items.map((item) => {
                                return (
                                    <tr>
                                        <th scope="row">
                                            {item.specification.url ? (
                                                <a
                                                    href={
                                                        item.specification.url
                                                    }
                                                >
                                                    Sleep Score and Insights
                                                </a>
                                            ) : (
                                                item.specification.title
                                            )}
                                        </th>
                                        {item.value.toLowerCase() == "yes" ? (
                                            <td className="yes"></td>
                                        ) : (
                                            <td>{item.value}</td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                );
            })}

            {/* <table>
                <tbody>
                    <tr className="title">
                        <td colspan="2" className="border-0 p-0 !pl-0 !pr-0">
                            <h3>General</h3>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Lens material</th>
                        <td>
                            Corning<sup className="registered-symbol">®</sup>{" "}
                            Gorilla<sup className="registered-symbol">®</sup>{" "}
                            Glass 3
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Bezel material</th>
                        <td>Stainless steel</td>
                    </tr>
                    <tr>
                        <th scope="row">Case material</th>
                        <td>Fibre-reinforced polymer</td>
                    </tr>
                    <tr>
                        <th scope="row">Quick release bands</th>
                        <td>Yes (18 mm, Industry standard)</td>
                    </tr>
                    <tr>
                        <th scope="row">Strap material</th>
                        <td>Silicone</td>
                    </tr>
                    <tr>
                        <th scope="row">Physical size</th>
                        <td>
                            41 x 41 x 12 mm
                            <br />
                            Fits wrists with a circumference of 110-175 mm
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Weight</th>
                        <td>
                            Silicone : 40 g with included band
                            <br /> Leather : 34 g with included band{" "}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Built-in speaker/microphone</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Display Size</th>
                        <td>
                            30.4 mm (1.2″) diameter
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Display Resolution</th>
                        <td>
                            390 x 390 pixels
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Colour display</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Large font option</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Battery life</th>
                        <td>
                            Smartwatch mode: Up to 10 days
                            <br /> Battery saver smartwatch mode: Up to 20 days{" "}
                            <br />
                            GPS-Only GNSS mode: Up to 21 hours
                            <br /> All-Systems GNSS mode: Up to 15 hours <br />{" "}
                            All systems GNSS mode with music playback Up to 8
                            hours
                            <br />{" "}
                            <a href="https://support.garmin.com/?faq=wRMnVRKL5i3YvvL05lqMi6&amp;productID=873008&amp;tab=topics&amp;sas_source=grmn">
                                See details
                                <br />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Charging method</th>
                        <td>Garmin proprietary plug charger</td>
                    </tr>
                    <tr>
                        <th scope="row">Memory/history</th>
                        <td>8 GB</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr className="title">
                        <td colspan="2" className="border-0 p-0 !pl-0 !pr-0">
                            <h3>Running features</h3>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">GPS-based distance, time and pace</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Running dynamics</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/running-dynamics/vertical-oscillation/">
                                Vertical oscillation and ratio
                            </a>
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/running-dynamics/ground-contact-time-balance/">
                                Ground contact time and balance
                            </a>
                        </th>
                        <td>Yes (GCT balance with accessory)</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/running-dynamics/cadence/">
                                Cadence
                            </a>{" "}
                            (provides real-time number of steps per minute)
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/garmin-technology/running-science/running-dynamics/running-power/">
                                Running power
                            </a>
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Run workouts</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Foot pod capable</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Run/Walk/Stand detection</th>
                        <td className="yes"></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr className="title">
                        <td colspan="2" className="border-0 p-0 !pl-0 !pr-0">
                            <h3>Gaming Features</h3>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/c/sports-fitness/gaming/">
                                Gaming activity
                            </a>
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/c/sports-fitness/gaming/">
                                GameOn<sup className="tm-symbol">™</sup> app
                                compatible
                            </a>
                        </th>
                        <td className="yes"></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr className="title">
                        <td colspan="2" className="border-0 p-0 !pl-0 !pr-0">
                            <h3>Activity tracking features</h3>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Step counter</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Push tracker</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Move alerts (displays on device after a period of
                            inactivity; walk for a couple of minutes to reset
                            it)
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Weight shift alert&nbsp;</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Auto goal (learns your activity level and assigns a
                            daily step goal)
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/garmin-technology/health-science/calories-burned/">
                                Calories Burned
                            </a>
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Floors climbed</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">Distance travelled</th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <a href="https://www.garmin.com/en-GB/garmin-technology/health-science/intensity-minutes/">
                                Intensity minutes
                            </a>
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            TrueUp<sup className="tm-symbol">™</sup>
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Move IQ<sup className="tm-symbol">™</sup>
                        </th>
                        <td className="yes"></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            Garmin Connect<sup className="tm-symbol">™</sup>{" "}
                            Challenges app
                        </th>
                        <td className="yes"></td>
                    </tr>
                </tbody>
            </table> */}
        </>
    );
};

export default Table;
