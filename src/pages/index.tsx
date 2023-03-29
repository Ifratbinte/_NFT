import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ArtBid from "#/components/View/ArtBid";
import Service from "#/components/View/Service";
import Hero from "#components/View/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <ArtBid />
    </>
  );
}
