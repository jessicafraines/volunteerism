var students = ['bob', 'joe', 'sally', 'dakota', 'brian', 'dave', 'jessica', 'pat', 'gary', 'janice'];
var student;

document.addEventListener('DOMContentLoaded', function(){
  var $button = document.querySelector('button');
  var $select = document.querySelector('select');

  $button.addEventListener('click', function(){
    if ($select.value === 'randomStudent'){
      var s = Math.floor((Math.random() * 10) + 1);
      student = students[s];
      var $target = document.querySelector('.target');
      $target.value = '';
      var docFragment = createPTag();
      $target.appendChild(docFragment);
    }
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
