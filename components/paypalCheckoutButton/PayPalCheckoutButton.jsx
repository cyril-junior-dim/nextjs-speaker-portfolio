import React, { useState } from 'react';
import Router from 'next/router'
import styles from './PayPalCheckoutButton.module.css';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckoutButton = (props) => {
    const { product } = props;
    // const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const random = (length = 8) => {
        // Declare all characters
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        // Pick characters randomly
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    };

    const handleApprove = async (orderID, title) => {
        // If response is success
        // setPaidFor(true);

        if(title === "Script Evaluation") {
            await Router.push({
                pathname: '/bookings/coaching/checkout/submit-script',
                query: {key: random()}
            });
        }

        if(title === "Video Evaluation") {
            await Router.push( {
                pathname: '/bookings/coaching/checkout/submit-video',
                query: {key: random()}
            });
        }

        if(title === "10-Session Bundle") {
            window.location.assign('https://www.picktime.com/cyriljuniordim');
        }

        alert("Purchase successful, thank you for your purchase!");
    }

    if (error) {
        // Display error message, modal, or redirect user to error page
        alert(error);
    }

    return (
        <div className={styles.checkoutButtons}>
            <PayPalButtons
                style={{
                    color: "gold",
                    layout: "vertical",
                    height: 48,
                    tagline: false,
                    shape: "rect",
                }}
                onClick={(data, actions) => {
                    // Validate on button click, client or server side
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: "product.description",
                                amount: {
                                    value: product.price,
                                    currency_code:"EUR"
                                }
                            }
                        ]
                    });
                }}
                onApprove={async(data, actions) => {
                    const order = await actions.order.capture();
                    console.log("order", order);
                    await handleApprove(data.orderID, product.title);
                }}
                onCancel={() => {
                    // Display cancel message, modal, or redirect user to cancel page or back to cart
                }}
                onError={(err) => {
                    setError(err);
                    console.error("PayPal Checkout onError", err)
                }}
            />
        </div>
    )
};

export default PayPalCheckoutButton;