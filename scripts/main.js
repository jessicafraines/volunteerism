var students = ['bob', 'joe', 'sally', 'dakota', 'brian', 'dave', 'jessica', 'pat', 'gary', 'janice'];

document.addEventListener('DOMContentLoaded', function(){
  var $button = document.querySelector('button');
  var $select = document.querySelector('select');

  $button.addEventListener('click', function(){
    if ($select.value === 'randomStudent'){
      var s = Math.floor((Math.random() * 10) + 1);
      alert(students[s]);
    }
  });
});
