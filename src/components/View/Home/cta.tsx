import Button from "#components/button/btnPrimary";
const CTA = () => {
  return (
    <div className="container mx-auto section-gap-s">
      <div className="flex justify-between items-center gap-10">
        <div className="md:w-2/3 md:mr-32">
          <h2 className="text-xl font-semibold text-gray-800 md:text-4xl md:text-left !leading-snug">Make the most of your online learning experience</h2>
        </div>
        <div className="md:w-1/3 text-right">
          <Button btn_name="Join with us" isLarge />
        </div>
      </div>
    </div>
  );
};

export default CTA;
