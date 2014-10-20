
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function addItemToList($list, itemText){
  var $li = document.createElement("li");
  $li.innerHTML = itemText;
  $list.appendChild($li);
}

document.addEventListener("DOMContentLoaded", function(){
  var $form = document.getElementById("generate-group");
  var students = ['bob', 'joe', 'sally', 'dakota', 'brian', 'dave', 'jessica', 'pat', 'gary', 'janice'];

  $form.addEventListener("submit", function(event){
    event.preventDefault();
    var $ul = document.getElementById("results");
    $ul.innerHTML = "";

    var groupCriteria = $form.querySelector("select").value;
    switch(groupCriteria){
      case "randomStudent":
      var studentNumber = getRandomInt(0, students.length);
      var studentName = students[studentNumber];
      addItemToList($ul, studentName);
      break;
      case "neighborPairing":
      var studentsClone = students.slice(0);
      while( studentsClone.length > 0 ){
        var studentNames = studentsClone.splice(0, 2);
        addItemToList($ul, studentNames.join(" &amp; "));
      }
      break;
      case "teamsOfThree":
      var studentsClone = students.slice(0);
      while (studentsClone.length > 0){
        var studentNames = studentsClone.splice(0, 3);
        addItemToList($ul, studentNames.join(" &amp; "));
      }
      break;
      case "randomPairing":

    } //closing of switch statement
  }); //closing of submit eventListener
}); //closing of DOMContentLoaded eventListener
