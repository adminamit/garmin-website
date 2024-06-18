import React from "react";
import "./index.css";
const Shipping = () => {
    return (
        <div className="max-w-[900px] mx-auto my-16 copy px-4">
            <h1 className="oswald uppercase text-[2.5rem] font-normal tracking-wider leading-[1.25] my-6">
                Shipping, Return, and Cancellation Policy
            </h1>
            <p>
                Thank you for choosing Garmin products! At AMIT GPS AND
                NAVIGATION LLP, we strive to ensure that your purchases reach
                you in excellent condition and on time. Please find below our
                shipping, return, and cancellation policy:
            </p>
            <div>
                <h2 id="costs">Shipping Policy</h2>
                <ul>
                    <li>
                        The Company has partnered with reputed courier agencies
                        to ensure prompt and secure delivery. Since the delivery
                        of products is address specific, please ensure that the
                        address entered while placing the order is correct.
                    </li>
                    <li>
                        At present, we do not have the option to deliver a
                        single order to multiple destinations. You will need to
                        place different orders.
                    </li>
                    <li>
                        The time taken for delivery tends to vary according to
                        the destination; however, we make our best efforts to
                        ensure that the orders are delivered on time. Subject to
                        the payment confirmation from Payment Gateway, items in
                        your order will be shipped out within 3-5 working days
                        from the order date. 
                    </li>
                    <li>
                        All Orders will be processed from Monday to Friday.
                        Orders which are placed on Saturday and Sunday will be
                        processed on the next working day.
                    </li>
                    <li>
                        The shipping cost, if applicable, is mentioned on the
                        product page. The amount that you pay while placing the
                        order on the platform would include the product and
                        courier charges.
                    </li>
                    <li>
                        All orders are shipped with an invoice from AMIT. In
                        case you don't receive an invoice, you may submit an
                        email to{" "}
                        <a href="mailto:info@Garmin-india.com">
                            info@Garmin-india.com
                        </a>
                    </li>
                    <li>
                        A shipping confirmation with your tracking ID will be
                        sent to you after the product has been dispatched. You
                        can use tracking ID to track your order by visiting the
                        webpage of the logistic partner.
                    </li>
                </ul>
            </div>
            <div>
                <h2 id="whereweship">Replacement & Return Policy</h2>
                <ul>
                    <li>
                        We are committed to ensuring full customer satisfaction
                        with respect to the products available on our platform.
                        However, we shall not accept any return or exchange of
                        our products, except for those cases where a wrong (as
                        per order) or defective product has been delivered. You
                        shall return the wrong/defective product in unused
                        condition, in its original packaging along with its
                        original tags and invoice, failing which
                        replacement/refund may not be possible.  
                    </li>
                    <li>
                        The customer shall raise the ticket for replacement
                        within 1 day of the receipt of the wrong /
                        defective product and shall provide all the proof asked
                        from their side to prove the wrong or damaged
                        or non-operational product was received. We shall
                        process the replacement/refund (at our election) only
                        after verifying the received products. The company shall
                        reserve the right to reject the returns which do not
                        match and are incomplete with the proof which the
                        customer had submitted at the time of raising the
                        replacement ticket.
                    </li>
                    <li>
                        Customers should not return the products before
                        receiving a confirmation mail from us about the
                        same. After receiving the confirmation mail the Customer
                        shall arrange for a reverse-pickup and must follow
                        instructions for reverse logistics from our team.
                    </li>
                    <li>
                        If you believe that the packaging of your order has been
                        tampered with or damaged before delivery, please refuse
                        to take delivery of the package, and submit a ticket on
                        the same day at{" "}
                        <a href="mailto:info@Garmin-india.com">
                            info@Garmin-india.com
                        </a>
                        , mentioning your order ID and picture of the damaged
                        parcel.
                    </li>
                </ul>
            </div>
            <div>
                <h2 id="orderstatus">Warranty Guidelines</h2>
                <p>
                    <a href="/consumer-limited-warranty">
                        Click Here to check warranty guidelines.
                    </a>
                </p>
            </div>
            <div>
                <h2 id="returns">Cancellation Policy</h2>
                <p>
                    <b>Cancellation By the Company:</b> <br />
                    There may be certain orders that the Company cannot accept,
                    and therefore, we reserve the right, at our sole discretion,
                    to refuse or cancel any order. Some reasons may include
                    limitation on quantity available for purchase; errors in
                    pricing or product information or certain issues identified
                    by our fraud avoidance department or any other issue which
                    the Company identifies for not accepting the order. We also
                    reserve the right to ask for additional information about
                    accepting orders in certain cases. We will notify you in
                    case your order has been cancelled fully or partially or if
                    any additional information is required to accept your order,
                    we will initiate the process of refunding the amount to your
                    account via the same payment mode.
                </p>
                <p>
                    <b>Cancellation by Customer:</b>
                    <br />
                    Once an order is placed, it cannot be cancelled by the
                    customer.
                </p>
            </div>

            <div>
                <p>
                    For all queries and concerns you can reach us either by
                    calling on <a href="tel:+91 1148005811">+91 1148005811</a>{" "}
                    or writing to us on 
                    <a href="mailto:info@Garmin-india.com">
                        info@Garmin-india.com
                    </a>
                </p>
                <p>
                    Note: Please refer to the Garmin Warranty Policy for
                    warranty guidelines.
                </p>
            </div>
        </div>
    );
};

export default Shipping;
