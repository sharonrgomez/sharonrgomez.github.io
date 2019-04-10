// check off each item by click
$("ul").on("click", "li", function(){
  // "this" targets each individual li clicked, rather than all li
  $(this).toggleClass("completed");
});

// delete items
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
  // stops event bubbling
  event.stopPropagation();
});

// add items
$("input[type='text']").keypress(function(event){
  // take item from text input only when user hits enter
  if(event.which === 13){
    var newTodo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>");
  }
});

// fade in/out input box
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
