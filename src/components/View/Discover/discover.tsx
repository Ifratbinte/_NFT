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
        <div className="mb-5">
          <h2 className="text-3xl font-DmSans font-bold mb-10">{discover.title}</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">
            {discover.items.slice(0, numToShow).map((item: any, i: number) => {
              return (
                <Card
                  key={i}
                  thumb={item.thumb}
                  author={item.avater}
                  title={item.title}
                  amount={item.amount}
                  stock={item.stock}
                  time={item.time}
                  btn={item.btn}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full border-2 border-primary text-primary font-bold font-DmSans text-lg px-7  py-2" onClick={handleClick}>
            More NFTs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
