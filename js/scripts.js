//Business Logic
//Create Constructor
function Tasks (task) {
  this.task = task;
}
//Create a method to strikethrough task marking as complete (button)

//Create a method to delete complete task (button)


//user interface
$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    //Append task to ul

    var task = $("input").val();
    $("input").val("");

    var appendedTask = $("ul").append('<li>' + task + '</li>');
    $("li").click(function(){
      $(this).addClass('strike');
    });
    $("li").dblclick(function(){
      $(this).remove();
    });
  });
});
