import pathItem from "#mocks/path.json";
import styles from "./home.module.css"

const Path = () => {
  return (
    <div className="container mx-auto section-gap relative">
      <h1 className="text-4xl font-bold mb-10 text-center">{pathItem.title}</h1>
      <ul className={`${styles.path} flex`}>
        {pathItem.path.map((item: any, i: number) => {
          return <li key={i} className="path relative flex items-center justify-center font-semibold h-[132px] w-[132px] shadow-baseShadow bg-white hover:bg-black text-black hover:text-white rounded-full transition duration-500 mr-20 last:mr-0"><h5 className="text-center p-3">{item.title}</h5></li>
        })}
      </ul>
    </div>
  );
};

export default Path;
