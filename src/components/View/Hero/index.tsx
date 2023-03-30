import Button from "#components/Button/btnPrimary";
import heroData from "#mocks/hero.json";
import { FaEthereum } from "react-icons/fa";
import styles from "./hero.module.css";

const Hero = () => {
  const hero = heroData.hero;
  return (
    <div className={`${styles.hero} container mx-auto md:h-70v relative section-b-gap-s mt-10 lg:mt-44`}>
      <div className="flex items-center flex-col lg:flex-row-reverse gap-10">
        <div className="relative flex w-full">
          <div className="absolute left-64 z-50 top-28">
            <img src={hero.badge} alt="" />
          </div>
          {hero.banner.map((banner: any, i: number) => {
            return (
              <div className="flex justify-center items-center" key={i}>
                <div className={`${i === 0 && "z-30 left-80" } ${i === 1 && "z-20 left-20" } ${i === 2 && "z-10 right-32" } relative`}>
                  <img src={banner.image} alt="" />
                  <div className="absolute top-0 w-full h-full flex flex-col justify-between py-6 lg:px-10 px-5 ">
                    <div>
                      <h4 className="text-2xl text-white font-semibold font-DmSans">{banner.title}</h4>
                      <div className="flex items-center py-3">
                        <img src={banner.author} alt={banner.author_name} />
                        <span className="text-lg text-white pl-3 font-DmSans">{banner.author_name}</span>
                      </div>
                    </div>
                    <ul className="flex justify-between flex-wrap py-3 px-4 rounded-xl backdrop-blur-md bg-white/30">
                      <li className="w-1/2 text-sm text-slate-50 font-DmSan pb-2">{banner?.badge?.title}</li>
                      <li className="w-1/2 text-sm text-slate-50 font-DmSans pb-2">{banner?.badge?.ends_time}</li>
                      <li className="w-1/2 text-slate-50 flex items-center font-DmSans">
                        <FaEthereum className="mr-2" />
                        {banner?.badge?.bid_price}
                      </li>
                      <li className="w-1/2 text-slate-50 font-DmSans">{banner?.badge?.bid_hour}</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-integralCF mb-5">{hero.title}</h2>
          <p className="text-lg font-DmSans text-paragraph mb-9">{hero.content}</p>
          <Button btn_name={hero.btn_name} />
          <ul className="flex items-center lg:justify-between justify-center lg:w-1/2 mt-6">
            {hero?.counter?.map((counter: any, i: number) => {
              return (
                <li key={i} className="px-4 ">
                  <div className="text-3xl font-integralCF font-bold">{counter.title}</div>
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
