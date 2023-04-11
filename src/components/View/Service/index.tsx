import TextPlate from "#components/common/TextPlate";
import serviceData from "#mocks/service.json";

const Service = () => {
  const service = serviceData.service;
  return (
    <div className="lg:section-gap md:section-gap-s section-gap-xs relative bg-grayPrimary">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between gap-5">
          <div className="lg:w-1/3">
            <h3 className="xl:text-3xl sm:text-2xl text-xl font-DmSans font-bold xl:w-5/6 mb-8 lg:mb-0 text-center lg:text-left">{service.title}</h3>
          </div>
          <div className="lg:w-2/3 sm:flex sm:items-center">
            {service.item.map((service: any, i: number) => {
              return <TextPlate key={i} icon={service.icon} title={service.title} content={service.content} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
