import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ArtBid from "#/components/ArtBid";
import Service from "#/components/Service";
import Hero from "#components/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <ArtBid />
    </>
  );
}
