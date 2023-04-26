import Counter from "#/components/common/Counter";
import Button from "#components/Button/btnPrimary";
import TextBlock from "#components/common/Text_block";
import heroData from "#mocks/hero.json";

const Hero = () => {
  const hero = heroData.hero;
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-s section-gap-xs">
      <div className="flex items-center justify-between flex-col lg:flex-row-reverse gap-10 h-4/5 md:px-0 px-8">
        <div className="flex lg:justify-end justify-center w-full">
          <img src={hero.thumb} alt="" />
        </div>
        <div className="w-full text-center lg:text-left lg:mr-12 mr-0 mb-5 lg:mb-0">
          <TextBlock title={hero.title} paragraph={hero.content} title_style="lg:text-5xl text-3xl" />
          <Button btn_name={hero.btn_name} />
          <ul className="flex items-center lg:justify-between lg:w-2/3 mt-6">
            {hero?.counter?.map((counter: any, i: number) => {
              return <Counter key={i} point={counter.point} topic={counter.topic} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
