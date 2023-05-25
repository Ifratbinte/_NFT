import Article from "#/components/view/home/article";
import Counter from "#/components/view/home/counter";
import Course from "#/components/view/home/course";
import Hero from "#/components/view/home/hero";
import Mentor from "#/components/view/home/mentor";
import Partners from "#/components/view/home/partners";
import Path from "#/components/view/home/path";
import Review from "#/components/view/home/review";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Counter />
      <Path />
      <Course />
      <Review />
      <Mentor />
      <Partners />
      <Article />
    </>
  );
}
