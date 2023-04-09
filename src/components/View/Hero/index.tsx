import Banner from "#/components/common/Banner";
import Button from "#components/Button/btnPrimary";
import heroData from "#mocks/hero.json";

const Hero = () => {
  const hero = heroData.hero;
  return (
    <div className="container mx-auto section-gap">
      <div className="flex items-center justify-between flex-col lg:flex-row-reverse gap-10 h-4/5">
        <div className="flex lg:justify-end justify-center w-full relative">
          <div className="">
            <img src={hero.badge} alt="" className="hidden sm:block sm:absolute sm:z-10 top-32 xl:left-28 lg:left-0 md:left-24 sm:left-1 " />
          </div>
          <div className="flex justify-center items-center">
            {hero.banner.map((banner: any, i: number) => {
              return (
                <Banner
                  id={i}
                  image={banner.image}
                  author={banner.author}
                  author_name={banner.author_name}
                  title={banner.title}
                  ends_time={banner?.badge?.ends_time}
                  badge_title={banner?.badge?.title}
                  bid_price={banner?.badge?.bid_price}
                  bid_hour={banner?.badge?.bid_hour}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full text-center lg:text-left">
          <span className="font-DmSans uppercase font-semibold tracking-wide text-purple px-5 py-2 rounded-full bg-purple-dim text-sm">{hero.subtitle}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-DmSans font-bold tracking-tighter my-5">{hero.title}</h2>
          <p className="text-lg font-DmSans text-paragraph mb-9">{hero.content}</p>
          <Button btn_name={hero.btn_name} />
          <ul className="flex items-center lg:justify-between justify-center lg:w-2/3 mt-6">
            {hero?.counter?.map((counter: any, i: number) => {
              return (
                <li key={i} className="">
                  <div className="text-4xl font-DmSans font-bold">{counter.title}</div>
                  <span className="text-md">{counter.subtitle}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
