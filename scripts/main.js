
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function addItemToList($list, itemText){
  var $li = document.createElement("li");
  $li.innerHTML = itemText;
  $list.appendChild($li);
}

function neighborGrouping(list, groupSize, target){
  var listClone = list.slice(0);
  while (listClone.length > 0){
    var listItems = listClone.splice(0, groupSize);
    addItemToList(target, listItems.join(" &amp; "));
  }
}
function arrayShuffle(array){
  var arrayClone = array.slice(0);
  var temp;
  for(var i = 0; i < arrayClone.length; i++){
    var rand = getRandomInt(0, arrayClone.length);
    temp = arrayClone[i];
    arrayClone[i] = arrayClone[rand];
    arrayClone[rand] = temp;
    
  }
  return arrayClone;
} 

function show(element){
  element.classList.remove("hidden");
}

function hide(element){
  element.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function(){
  var $form = document.getElementById("generate-group");
  var students = ['bob', 'joe', 'sally', 'dakota', 'brian', 'dave', 'jessica', 'pat', 'gary', 'janice'];

  var $select = $form.querySelector("select");
  var $numBox = $form.querySelector("input[type=number]");

  $select.addEventListener("change", function(event){
    if(event.currentTarget.value === "randomNPairing"){
      show($numBox);
    } else {
      hide($numBox);
    }
  });

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
      neighborGrouping(students, 2, $ul);
      break;
      case "teamsOfThree":
      neighborGrouping(students, 3, $ul);
      break;
      case "randomPairing":
      var shuffledStudents = arrayShuffle(students);
      neighborGrouping(shuffledStudents, 2, $ul);
      break;
      case "randomNPairing":
      var shuffledStudents = arrayShuffle(students);
      var quantity = $numBox.value;
      neighborGrouping(shuffledStudents, $numBox, $ul);
      break;

    } //closing of switch statement
  }); //closing of submit eventListener
}); //closing of DOMContentLoaded eventListener
