import "../styles/globals.css";
import { LocationContextProvider } from "../security/helpers";
import { Footer } from "../components/";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "EUR",
      }}
    >
      <LocationContextProvider>
        <Component {...pageProps} />
        <Footer />
      </LocationContextProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
