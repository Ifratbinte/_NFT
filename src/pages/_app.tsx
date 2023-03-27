import MasterLayout from "#/container/MasterLayout";
import "#/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MasterLayout >
      <Component {...pageProps} />
    </MasterLayout>
  );
}
