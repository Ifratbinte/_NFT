import serviceData from "#mocks/service.json";
import TextPlate from "#components/common/TextPlate";

const Service = () => {
  const service = serviceData.service;
  return (
    <div className="lg:section-gap section-gap-s relative bg-grayPrimary">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between gap-5">
          <div className="lg:w-5/12">
            <h3 className="lg:text-3xl text-2xl font-integralCF lg:w-3/4 mb-8 lg:mb-0 text-center lg:text-left">{service.title}</h3>
          </div>
          {service.item.map((service: any, i: number) => {
            return <TextPlate key={i} icon={service.icon}  title={service.title} content={service.content}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
