import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import { Kanit, Montserrat } from "next/font/google";
export const kanit = Kanit({ subsets: ["latin"], weight: ["500"] });
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={kanit.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
