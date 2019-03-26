var movieDB = [
  {
    title: "Truman Show",
    hasSeen: true,
    rating: "5 stars"
  },
  {
    title: "Spirited Away",
    hasSeen: true,
    rating: "4.5 stars"
  },
  {
    title: "La La Land",
    hasSeen: false,
    rating: "4 stars"
  }
]

function printDB (arr) {
  arr.forEach(function(movie){
    var seen = "You have ";
    if(movie.hasSeen===true){
      seen += "seen ";
    } else {
      seen += "not seen ";
    }
    console.log(seen + movie.title + " - Rating: " + movie.rating);
  });
}
