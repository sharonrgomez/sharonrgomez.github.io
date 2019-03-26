var myList = [];
window.setTimeout(function() {
  var response = prompt("What would you like to do?");
  while(response!=="quit"){

    if(response==="show"){
      console.log("*MY TO-DO LIST*")
      console.log("---------------");
      console.log(" INDEX | ITEMS");
      myList.forEach(function(items, i){
        console.log("   " + i + "     " + items);
      });
      console.log("---------------");
    }
    else if(response==="add"){
      var item = prompt("Enter a new item.");
      myList.push(item);
      console.log(item + " was added to the list.");
    }
    else if(response==="del"){
      var item = prompt("Enter the index of the item to be deleted.");
      console.log(myList[item] + " was removed from the list.");
      myList.splice(item, 1);
    }

    response = prompt("What would you like to do?");
  }
  console.log("App closed.");
}, 500);
