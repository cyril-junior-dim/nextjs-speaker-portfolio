import "../styles/globals.css";
import { LocationContextProvider } from "../security/helpers";
import { Footer } from "../components/";

function MyApp({ Component, pageProps }) {
  return (
    <LocationContextProvider>
      <Component {...pageProps} />
      <Footer />
    </LocationContextProvider>
  );
}

export default MyApp;
