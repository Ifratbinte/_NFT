import PartnerCard from "#components/common/Partners";
import partnersData from "#mocks/partners.json";
const Partners = () => {
  return (
    <div className="container mx-auto section-gap-s">
      <h1 className="text-4xl font-bold mb-10 text-left">{partnersData.title}</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {partnersData.partners.map((partner: any) => {
          return <PartnerCard key={partner.id} logo={partner.logo} />;
        })}
      </div>
    </div>
  );
};

export default Partners;
