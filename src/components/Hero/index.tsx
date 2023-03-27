import Button from "#components/Button/btnPrimary";
import heroData from "#mocks/hero.json";

const Hero = () => {
  const hero = heroData.hero;
  return (
    <div className="container mx-auto h-screen">
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse items-center gap-10">
        <div className="">
          <h2 className="text-4xl font-integralCF font-bold mb-7">{hero.title}</h2>
          <p className="text-lg font-">{hero.content}</p>
          <Button btn_name={hero.btn_name} />
          <ul className="flex items-center justify-between">
            {hero?.counter?.map((counter: any, i: number) => {
              return (
                <li key={i}>
                  <div className="text-3xl font-integralCF font-bold">{counter.title}</div>
                  <span className="text-md">{counter.subtitle}</span>
                </li>
              );
            })}
          </ul>
        </div>
        {hero.banner.map((banner: any, i: number) => {
            return (
              <div className="relative">
                <img src={banner.image} alt="" />
                <div className="absolute top-0 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl">{banner.title}</h4>
                    <div className="flex items-center">
                      <img src={banner.author} alt={banner.author_name} />
                      <span>{banner.author_name}</span>
                    </div>
                  </div>
                  <div className="flex justify-between flex-wrap">
                    <span>{banner?.badge?.title}</span>
                    <span>{banner?.badge?.bid_price}</span>
                    <span>{banner?.badge?.ends_time}</span>
                    <span>{banner?.badge?.bid_hour}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Hero;
