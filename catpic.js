var blah = 'blah';



cats = {
  "Xuxa":{
    "finame": "cat.jpg",
    "id": "xu",
    "count": 0,
    "count_id": "cout",
    "name":"xuxu"
  }
  ,'chewie':{
    "finame":"chew.jpg",
    "id":"chew",
    "count": 0,
    "count_id":"chi",
    "name": "chewie"
  },


}

console.log(cats)

var ascii = ( new Cat('jgscat.jpg',  'ascii'));
var onname = ascii.name;

cats.ascii = ascii;
var kitties = new Cat('kitties.jpg', 'kitties');

cats.kitties = kitties;

cats.artcats = new Cat('artcats.jpg', 'Artsy')

console.log(Object.keys(cats));



var arcat = Object.keys(cats);



var chew = document.getElementById('chew');

//incOnCli(chew,cats.chewie);


d3.select('.catli').selectAll("li")
.data(arcat)
.enter()
.append('li')
.html(function(d){
  console.log(d)

  return d
})
.on('click', function(d){
  console.log('thing was clicked', cats[d])

  //this.attr('background', 'blue')
console.log(this)
  d3.selectAll('li')
    .style('background', null)

  d3.select(this)
    .style('background', 'yellow')

  d3.select('.catName')
  .text(cats[d].name)

  d3.select('#cout')
   .text(cats[d].count)

   d3.select('.kittie')
    .attr('src', 'pics/' + cats[d].finame)
    .on('click', function(){

      cats[d].count++
      console.log(cats[d].count)

      d3.select('#cout')
        .text(cats[d].count);
    })
})






function Cat(filename, name){

  this.finame = filename;
  this.count = 0;
  this.name = name;

}
