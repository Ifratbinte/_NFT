import Button from "#components/Button/btnPrimary";
import heroData from "#mocks/hero.json";
import styles from "./hero.module.css";

const Hero = () => {
  const hero = heroData.hero;
  return (
    <div className={`${styles.hero} container mx-auto h-screen relative section-b-gap`}>
      <div className="flex items-center gap-10">
        <div className="lg:w-1/2">
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
        <div className="lg:w-1/2">
          {hero.banner.map((banner: any, i: number) => {
            return (
              <div className="flex justify-center" key={i}>
                <div className="relative">
                  <img src={banner.image} alt="" />
                  <div className="absolute top-0 w-full h-full flex flex-col justify-between py-6 px-10">
                    <div>
                      <h4 className="text-2xl text-white font-semibold">{banner.title}</h4>
                      <div className="flex items-center py-3">
                        <img src={banner.author} alt={banner.author_name} />
                        <span className="text-lg text-white pl-3">{banner.author_name}</span>
                      </div>
                    </div>
                    <ul className="flex justify-between flex-wrap py-3 px-4 rounded-xl backdrop-blur-md bg-white/30">
                      <li className="w-1/2 text-sm text-slate-50">{banner?.badge?.title}</li>
                      <li className="w-1/2 text-sm text-slate-50">{banner?.badge?.ends_time}</li>
                      <li className="w-1/2 text-slate-50">{banner?.badge?.bid_price}</li>
                      <li className="w-1/2 text-slate-50">{banner?.badge?.bid_hour}</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
