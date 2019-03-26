// array
var cat = ["Chowdie", 8, "Calico"];
// cat[0] retrieves Chowdie

// object
var cat = {
  name: "Chowdie",
  age: 8,
  breed: "Calico"
}
// cat.name retrieves Chowdie

/* both are key-value pairs:
in arrays, the keys are 0 up to array.length.
in objects, the keys are custom-named.

to add new data to array:
cat.push("Bronx")
cat.unshift("small")

to add new data to an object:
cat.home = "Bronx"
cat.size = "small"
*/

// obj inside an array
var posts = [
  {
    title: "First post",
    author: "Sharon Levin",
    comments: ["comment1", "comment2","comment3"]
  },
  {
    title: "Second post",
    author: "Sharon Levin",
    comments: ["comment1", "comment2","comment3"]
  }
]
// posts[0].title to access title
// posts[0].comments[1] to access the first post, second comment

// array of objects inside an object
var myObj = {
  friends: [
    {name: "Ron"},
    {name: "Hermoine"},
    {name: "Harry"}
  ]
}
// to retrieve "Harry"
// myObj.friends[2].name
