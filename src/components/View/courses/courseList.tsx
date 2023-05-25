import CourseCard from "#/components/common/Card";
import courseItem from "#mocks/course.json";

const CourseList = () => {
  console.log({courseItem});
  
  return (
    <div className="container mx-auto section-gap">
      <div className="grid gap-8">
        {courseItem?.course?.card?.map((course: any) => (
          <CourseCard
            id={course.id}
            thumb={course.thumb}
            badge={course.badge}
            title={course.title}
            desc={course.desc}
            rating={course.rating}
            total_rating={course.total_rating}
            title_style="text-xl"
            isLarge
            mentor={course.mentor}
            mentor_name={course.mentor_name}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
