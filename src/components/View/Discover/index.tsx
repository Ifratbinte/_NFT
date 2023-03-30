import Card from "#/components/common/Card";
import discoverData from "#mocks/discover.json";
import { useState } from "react";

const Discover = () => {
  const discover = discoverData.discover;
  const [numToShow, setNumToShow] = useState(8);

  const handleClick = () => {
    setNumToShow(numToShow + 4);
  };

  return (
    <div className="section-gap-s bg-grayPrimary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-5">
            <h2 className="text-3xl font-integralCF">{discover.title}</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-6">
              {discover.items.slice(0, numToShow).map((items: any, i: number) => (
                <Card
                  key={i}
                  thumb={items.thumb}
                  author={items.avatar}
                  title={items.title}
                  amount={items.amount}
                  stock={items.stock}
                  time={items.time}
                  btn={items.btn}
                />
              ))}
            </div>
          </div>
          <button className="rounded-full border-2 border-primary text-primary font-bold font-DmSans text-lg px-7  py-2" onClick={handleClick}>
            More NFTs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
