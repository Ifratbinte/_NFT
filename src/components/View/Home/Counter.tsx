import CounterTemp from "#/components/common/CounterTemp";
import countDown from "#mocks/counter.json";

const Counter = () => {
  return (
    <div className="container mx-auto bg-black rounded-xl p-16">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {countDown.counter.map((counter: any, i:number) => (
          <CounterTemp key={i} point={counter.point} topic={counter.topic} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
