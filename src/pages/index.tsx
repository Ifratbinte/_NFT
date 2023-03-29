import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ArtBid from "#/components/View/ArtBid";
import Service from "#/components/View/Service";
import Hero from "#components/View/Hero";
import Feature from "#/components/View/Feature";
import SignUp from "#components/View/SignUp"
import Discover from "#/components/View/Discover";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <ArtBid />
      <Feature/>
      <SignUp/>
      <Discover/>
    </>
  );
}
