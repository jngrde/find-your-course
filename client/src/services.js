/*eslint no-console: "error"*/

export function fetchCourses() {
  return fetch('http://localhost:5000/api/courses/getall')
    .then(res => res.json())
    .catch(() => {
      return []
    })
}

/*export function makePost(name, password) {
  return fetch('http://loalhost:5000/api/users/authenticate', {
    method: 'POST',
    body: { name, password },
  })
    .then(res => res.json())
    .then(result => console.log(result))
}*/

export function saveToSessionStorage(name, data) {
  sessionStorage.setItem(name, JSON.stringify(data))
}
