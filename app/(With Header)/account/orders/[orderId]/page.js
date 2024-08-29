import OrderWrapper from "./OrderWrapper";

const Order = async ({ params: { orderId } }) => {
    console.log(orderId);
    return <OrderWrapper orderId={orderId} />;
};

export default Order;
