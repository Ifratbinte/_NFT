import Counter from "#/components/View/Home/Counter";
import Course from "#/components/View/Home/Course";
import Hero from "#/components/View/Home/Hero";
import Mentor from "#/components/View/Home/Mentor";
import Path from "#/components/View/Home/Path";
import Review from "#/components/View/Home/Review";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Counter/>
      <Path/>
      <Course/>
      <Review/>
      <Mentor/>
    </>
  );
}



