import Filter from "#/components/forms/Filter";
import PageHeadBlock from "#components/common/PageHead";
import pageHeadData from "#mocks/pagehead.json";

const PageHead = () => {
  console.log({ pageHeadData });

  return (
    <div className="lg:section-gap sm:section-gap-s section-gap-xs bg-black">
      <PageHeadBlock title={pageHeadData.course_pageHead.title} desc={pageHeadData.course_pageHead.desc} />
    </div>
  );
};

export default PageHead;
