import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
