// API URL FROM JSONPlaceholder
// https://jsonplaceholder.typicode.com/todos/1

// .then  method
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
  return response.json()
})
.then((data) => {
console.log(data)
})

//async await method
const getData = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
const cheese = await response.json()
console.log(cheese)
}

getData()