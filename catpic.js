var blah = 'blah';


var kittie = document.getElementsByClassName('kittie')

var count = 0;

kittie[0].addEventListener('click', function(){
  count++;
  console.log(count);
  document.getElementById('cout').textContent = count;

}, false)
