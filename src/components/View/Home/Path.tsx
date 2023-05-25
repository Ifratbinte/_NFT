import PathItem from "#/components/common/Path";
import pathItem from "#mocks/path.json";
import styles from "./home.module.css";

const Path = () => {
  return (
    <div className="container mx-auto section-gap relative ">
      <h1 className="text-4xl font-bold mb-20 text-center">{pathItem.title}</h1>
      <ul className={`${styles.path} flex justify-center bg-hero-gfx bg-no-repeat bg-center`}>
        {pathItem.path.map((item: any, i: number) => {
          return <PathItem title={item.title} />;
        })}
      </ul>
    </div>
  );
};

export default Path;
