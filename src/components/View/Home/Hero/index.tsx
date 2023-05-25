import CourseCard from "#/components/common/Card";
import Counter from "#/components/common/CounterTemp";
import Button from "#components/button/btnPrimary";
import TextBlock from "#components/common/Text_block";
import heroData from "#mocks/hero.json";
import { useEffect, useState } from "react";

const Hero = () => {
  const [hero, setHero] = useState<any>({});

  useEffect(() => {
    setHero(heroData.hero);
  }, []);

  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-s section-gap-xs">
      <div className="section-b-gap flex items-center justify-between flex-col lg:flex-row-reverse gap-10 h-4/5 md:px-0 px-8">
        <div className="flex lg:justify-end justify-center w-full">
          <img src={hero.thumb} alt="" />
        </div>
        <div className="w-full text-center lg:text-left lg:mr-12 mr-0 mb-5 lg:mb-0">
          <TextBlock title={hero.title} paragraph={hero.content} title_style="lg:text-5xl text-3xl" />
          {/* <Button btn_name={hero.btn_name} /> */}
          <ul className="flex items-center lg:justify-between lg:w-2/3 mt-6">
            {hero?.counter?.map((counter: any, i: number) => {
              return <Counter key={i} point={counter.point} topic={counter.topic} />;
            })}
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div className="grid grid-cols-2 gap-6">
          {hero?.course?.card?.map((course: any) => (
            <CourseCard
              key={course.id}
              thumb={course.thumb}
              badge={course.badge}
              title={course.title}
              rating={course.rating}
              total_rating={course.total_rating}
              title_style="text-sm"
              id={course.id}
            />
          ))}
        </div>
        <div>
          <TextBlock title={heroData.hero.course.title} paragraph={heroData.hero.course.content} title_style="lg:text-4xl text-3xl w-5/6"/>
          <Button btn_name="Enroll Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
