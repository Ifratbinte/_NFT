import FeatureTemp from "#components/common/Feature";
import featureData from "#mocks/feature.json";

const Feature = () => {
  const feature = featureData.feature;
  return (
    <div className="section-gap-xs sm:section-gap-s lg:section-gap relative bg-grayPrimary">
      <div className="container mx-auto">
        <h3 className="text-2xl sm:text-3xl font-DmSans font-bold mb-10 text-center lg:text-start">{feature.title}</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-12 gap-8">
          {feature.item.map((feature: any, i: number) => {
            return (
              <FeatureTemp
                key={i}
                feat_lg={feature.feat_lg}
                feat_sm={feature.feat_sm}
                author={feature.author}
                author_name={feature.author_name}
                btn={feature.btn}
                title={feature.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
