import serviceData from "#mocks/service.json";
import TextPlate from "#components/common/TextPlate";

const Service = () => {
  const service = serviceData.service;
  return (
    <div className="section-gap relative bg-grayPrimary">
      <div className="container mx-auto">
        <div className="flex justify-between gap-5">
          <div className="lg:w-5/12">
            <h3 className="text-3xl font-integralCF font-bold lg:w-3/4">{service.title}</h3>
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
