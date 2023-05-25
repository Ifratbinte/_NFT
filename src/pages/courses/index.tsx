import React from 'react'
import PageHead from '#/components/view/courses/pageHead'
import Filter from '#/components/forms/Filter'
import CourseList from '#/components/view/courses/courseList'

const Courses = () => {
  return (
    <>
    <PageHead/>
    <Filter />
    <CourseList/>
    </>
  )
}

export default Courses