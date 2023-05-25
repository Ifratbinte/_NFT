import CourseCard from "#/components/common/Card";
import courseItem from "#mocks/course.json";
import Slider from "react-slick";
import SliderOptions from "#/helpers/slider-init-value";

const Course = () => {
  return (
    <div className="container mx-auto section-gap-s">
      <h1 className="text-4xl font-bold mb-14 text-left">{courseItem.course.title}</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {courseItem?.course?.card?.map((course: any) => (
          <CourseCard
            id={course.id}
            thumb={course.thumb}
            badge={course.badge}
            title={course.title}
            desc={course.desc}
            rating={course.rating}
            total_rating={course.total_rating}
            student={course.student}
            lecture={course.lecture}
            time={course.time}
            title_style="text-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
