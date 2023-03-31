import Card from "#/components/common/Card";
import discoverData from "#mocks/discover.json";
import { useState } from "react";

const Discover = () => {
  const discover = discoverData.discover;
  const [numToShow, setNumToShow] = useState(8);

  const handleClick = () => {
    setNumToShow(numToShow + 4);
  };
  // filter state
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <div className="section-gap-s bg-grayPrimary">
      <div className="container mx-auto">
        <div className="mb-5">
          <h2 className="text-3xl font-integralCF mb-10">{discover.title}</h2>

          {/* Filter Items */}
          <div className="flex justify-between">
            <ul className="flex items-center">
              <li className={`${selectedCategory === "All" ? "filter-active bg-primary" : ""} text-white px-5 py-2 rounded-full font-DmSans font-semibold text-lg`} onClick={() => setSelectedCategory("All")}>
                All Categories
              </li>
              {discoverData.discover.category.map((category: any, i: number) => {
                return (
                  <li
                    key={i}
                    className={`${selectedCategory === category.title ? "filter-active " : ""} text-black bg-grayPrimaryLight px-6 py- rounded-full font-DmSans font-semibold text-lg ml-3`}
                    onClick={() => setSelectedCategory(category.title)}
                  >
                    {category.title}
                  </li>
                );
              })}
            </ul>
            <div><button className="flex font-DmSans text-primary font-semibold bg-grayPrimaryLight px-5 py-3 text-lg rounded-full"><img src="/images/icon/filter.svg" alt="" className="mr-1"/>All Filters</button></div>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-10">
            {discover.items.filter((item:any) => (selectedCategory === "All" ? true : item.item_cate === selectedCategory)).slice(0, numToShow).map((item: any, i: number) => {
              {console.log("items.title", item.item_cate);
              }
              return (
                <>
                  <Card
                    key={i}
                    thumb={item.thumb}
                    author={item.avatar}
                    title={item.title}
                    amount={item.amount}
                    stock={item.stock}
                    time={item.time}
                    btn={item.btn}
                  />
                </>
              )
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
