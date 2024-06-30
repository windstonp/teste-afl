import type { AppProps } from "next/app";
import "../global/globalStyles.css";
import "react-datepicker/dist/react-datepicker.css";
import RootLayout from "../layouts/rootLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
