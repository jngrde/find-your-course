export function fetchCourses() {
  return fetch('http://localhost:5000/api/courses/getall')
    .then(res => res.json())
    .catch(() => {
      return []
    })
}
