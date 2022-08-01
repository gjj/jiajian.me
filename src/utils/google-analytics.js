import { useEffect } from "react";
import ReactGA from "react-ga4";

/**
 * Initialise Google Analytics 4 only once (if GTAG_ID is provided)
 *
 * The ReactGA.send("pageview") is explicitly called afterwards because
 * the pageview event is not automatically triggered on first initialisation
 * but will be automatically triggered by the GA script on subsequent page views.
 */
export const useGoogleAnalytics = () => {
  useEffect(() => {
    try {
      const GTAG_ID = process.env.REACT_APP_GTAG_ID;
      if (GTAG_ID?.startsWith("G-")) {
        ReactGA.initialize(GTAG_ID);
        ReactGA.send("pageview");
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
};
