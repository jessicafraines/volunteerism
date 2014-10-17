var students = ['bob', 'joe', 'sally', 'dakota', 'brian', 'dave', 'jessica', 'pat', 'gary', 'janice'];
var student;

document.addEventListener('DOMContentLoaded', function(){
  var $button = document.querySelector('button');
  var $select = document.querySelector('select');

  $button.addEventListener('click', function(){
    var value = $select.value;
    switch(value){
      case 'randomStudent':
      var s = Math.floor((Math.random() * 10) + 1);
      student = students[s];
      var $target = document.querySelector('.target');
      $target.innerHTML = "";
      var docFragment = createPTag();
      $target.appendChild(docFragment);
      break;
      case 'neighborPairing':
      var neighbors = [];
      for(var i = 0; i <= 2; i++){
        var n = students.shift();
        //neighbors.push('n');
        alert('n');
      }
    };
  });
});

function createPTag(){
    var docFragment = document.createDocumentFragment();
    var $div        = document.createElement('div');
    $div.setAttribute('class', 'myClass');
    var $p          = document.createElement('p');
    $p.textContent  = student;
    $div.appendChild($p);

    docFragment.appendChild($div);

    return docFragment;
}
