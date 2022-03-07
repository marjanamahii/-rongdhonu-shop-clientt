import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JwR0pHXk9aWpXNtBmGmi8eOqJJQ9wjL0JoQBS5iDW7U4BkRFg5d7xgGO3Vqdf22Jd3Y8C436LbdWYyqUHoW2zGE00z7vCCN1m');

const Payment = () => {
    const { productId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7000/orders/${productId}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, []);

    return (
        <div style={{ margin: "20px 0 0 0", textAlign: "center" }}>
            <h2>Payment for your order: {order?.name}</h2>
            <h4>Price: ${order?.price}</h4>
            {/* {order?.price &&  */}
            <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements>
            {/* } */}
        </div>
    );
};

export default Payment;