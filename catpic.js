var blah = 'blah';

cats = {
  'chewie':{
    "finame":"chewie.jpg",
    "id":"chew",
    "count": 0,
    "count_id":"chi"
  }
}


var kittie = document.getElementsByClassName('kittie')

var count = 0;

kittie[0].addEventListener('click', function(){
  count++;
  console.log(count);
  document.getElementById('cout').textContent = count;

}, false)


var chew = document.getElementById('chew');

incOnCli(chew,cats.chewie);

function incOnCli(ele, iden){

  ele.addEventListener('click', function(){
    iden.count++
    var toch = document.getElementById(iden.count_id)
    toch.textContent = iden.count;

  })

}
