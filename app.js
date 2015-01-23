var body = $('body');
var form = $('form');

body.append("<h1>ToDo App<h1>");

body.append("<form>");
form.attr("action", "index.html");
form.attr("method", "POST");
body.append("<input>");
body.append("<ul>");

var inputBox = $('input');
inputBox.attr("type", "text");
inputBox.attr("placeholder", "What do you need to learn?");

var ul = $('ul');

body.append("<p id='itemcount'>0 items left</p>")
body.append("<button>Delete All Completed</button>");
var button = $('button');
button.attr("id", "deleteAll");


function createToDo(input){
  var item = $("<li>" + input + "<span class='delete'>Delete</span></li>").fadeIn();
  ul.append(item);
  updateCount();
}

$('ul').on('click', 'li', function(e){
  $(this).toggleClass("completed");
  updateCount();
})

$('ul').on('click', 'li span', function(e){
  $(this.parentElement).fadeOut(400, function(){
    $(this).remove();
  });
  updateCount();
})

function updateCount(){
  $('p').replaceWith("<p id=itemsLeft>" + $("li:not([class= completed])").length + " items left </p>");
}

inputBox.keyup(function(event){
  if(event.keyCode == 13){
    var inputBoxText = $(this).val()
    createToDo(inputBoxText);
    return false;
  }
})

$(button).on('click', function(){
  $('.completed').remove();
})
