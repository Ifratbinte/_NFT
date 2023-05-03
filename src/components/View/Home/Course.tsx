import CourseCard from '#/components/common/CourseCard'
import courseItem from "#mocks/course.json"
import React from 'react'

const Course = () => {
  return (
    <div className='container mx-auto section-gap'>
       <h1 className="text-4xl font-bold mb-14 text-left">{courseItem.course.title}</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {courseItem?.course?.card?.map((course: any) => (
            <CourseCard
              key={course.id}
              thumb={course.thumb}
              badge={course.badge}
              title={course.title}
              desc={course.desc}
              rating={course.rating}
              total_rating={course.total_rating}
              total_stu={course.student}
              total_lec={course.lecture}
              time={course.time}
              title_style='text-xl'
            />
          ))}
      </div>
    </div>
  )
}

export default Course