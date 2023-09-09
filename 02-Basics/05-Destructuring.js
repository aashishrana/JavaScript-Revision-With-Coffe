const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course["price"])
// console.log(course.price)

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor)