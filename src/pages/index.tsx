import Counter from "#/components/View/Home/Counter";
import Course from "#/components/View/Home/Course";
import Hero from "#/components/View/Home/Hero";
import Mentor from "#/components/View/Home/Mentor";
import Partners from "#/components/View/Home/Partners";
import Path from "#/components/View/Home/Path";
import Review from "#/components/View/Home/Review";
import Article from "#components/View/Home/Article";
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
