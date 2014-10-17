document.addEventListener('DOMContentLoaded', function(){
  var $button = document.querySelector('button');
  var $select = document.querySelector('select');

  $button.addEventListener('click', function(){
    alert($select.value);
  });
});
