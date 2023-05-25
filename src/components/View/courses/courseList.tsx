import CourseCard from "#/components/common/Card";
import courseItem from "#mocks/course.json";
import { useState } from "react";

const CourseList = () => {
  console.log({ courseItem });
  const [item, setItem] = useState(3);

  const handleClick = () => {
    setItem(item + 3);
    console.log({item});
    
  };

  return (
    <div className="container mx-auto section-gap">
      <div className="grid gap-8">
        {courseItem?.course?.card?.slice(0, item).map((course: any) => (
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
      <div className="flex justify-center mt-8">
        <button onClick={handleClick}>Load More</button>
      </div>
    </div>
  );
};

export default CourseList;
