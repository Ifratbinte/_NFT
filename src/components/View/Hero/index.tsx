import Button from "#components/Button/btnPrimary";
import heroData from "#mocks/hero.json";
import { FaEthereum } from "react-icons/fa";
import styles from "./hero.module.css";
import Banner from "#/components/common/Banner";

const Hero = () => {
  const hero = heroData.hero;
  return (
    <div className={`${styles.hero} container mx-auto md:h-70v relative section-b-gap-s lg:mt-36 mt-10`}>
      <div className="flex items-center justify-between flex-col lg:flex-row-reverse gap-10 h-4/5">
        
        <div className="relative flex w-full">
          <div className="absolute left-20 z-50 top-36">
            <img src={hero.badge} alt="" />
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
        <div className="w-full lg:w-3/4 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-integralCF mb-5">{hero.title}</h2>
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
