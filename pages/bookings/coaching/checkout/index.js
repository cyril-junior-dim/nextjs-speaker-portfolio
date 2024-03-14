import React, { useState } from "react";
import { useRouter } from "next/router";
import { RiQuestionLine } from "react-icons/ri";
import { useInvalidUrlRoutes } from "../../../../security/helpers";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {
  Navbar,
  Product,
  PayPalCheckoutButton,
  Popup,
} from "../../../../components";
import products from "../../../../data/product-data";
import styles from "../../../../styles/pages/checkout.module.css";
import Head from "next/head";

const Checkout = () => {
  useInvalidUrlRoutes();

  const router = useRouter();
  const [buttonPopup, setButtonPopup] = useState(true);

  try {
    const product = products[router.query.product];

    return (
      <div className={styles.checkout}>
        <Head>
          <title>Checkout</title>
          <meta name="description" content="Coaching Checkout" />
          <meta property="og:title" content="Checkout" />
          <meta property="og:description" content="Coaching checkout" />
          <meta
            property="og:url"
            content="https://cyriljuniordim.com/bookings/coaching/checkout"
          />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/assets/logos/logo-white.png" />
        </Head>
        <div className={styles.checkout}>
          <Navbar />
        </div>
        <div className={styles.checkoutDetailsContainer}>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2>Instructions</h2>
            <>{product.instructions}</>
          </Popup>
          <div className={`${styles.checkoutDetails} section__padding`}>
            <div className={styles.checkoutHelp}>
              <RiQuestionLine
                color="#000000"
                size={32}
                onClick={() => setButtonPopup(true)}
              />
            </div>
            <Product
              title={product.title}
              description={product.description}
              price={"€" + product.price}
              img={product.img}
            />
            <div className={styles.paypalButtonContainer}>
              <PayPalScriptProvider
                options={{
                  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                  currency: "EUR",
                }}
              >
                <PayPalCheckoutButton product={product} />{" "}
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e.message);
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "80vh",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              margin: "auto",
            }}
          >
            500 | Internal Server Error
          </h1>
        </div>
      </div>
    );
  }
};

export default Checkout;
