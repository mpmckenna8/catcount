var blah = 'blah';



cats = {
  liscat: [],
  addcat:function(filename, name){

    cats.liscat.push(new Cat(filename,name));

  },
  currcat:null


}

cats.addcat('cat.jpg', 'xuxu');
cats.addcat('chew.jpg', 'chewie');





var currentcat = null;

console.log(cats)

cats.addcat('jgscat.jpg',  'ascii');

cats.addcat('kitties.jpg', 'kitties');


cats.addcat('artcats.jpg', 'Artsy')

console.log(Object.keys(cats));


// this is kind of my list model



// octopus

var octopus = {
  init: function(){
    // make the current cat the first cat in the list
    cats.currcat = cats.liscat[0];

  //  console.log(cats)
    catListV.init();
    catview.init()
  },
  getCats:function(){
    return cats.liscat;
  },
  currentCat: function(){
    return cats.currcat;
  },
  setcurrcat: function(cat){
    cats.currcat = cat;
  },
  incrementCou:function(){
    cats.currcat.count++;
    catview.render();
  }


}

var catListV = {
  init:function(){

    this.catListElem = document.getElementsByClassName('catli')[0];

    this.render()
  },

  render: function(){
    var cat, i, elem;

    var kitties = octopus.getCats();

    console.log(kitties);

    for(i = 0; i < kitties.length; i++){
      cat = kitties[i];
      console.log(cat)
      elem = document.createElement('li');

      elem.textContent = cat.name;

      elem.addEventListener('click', (function(catcopy){
        return function(){
          octopus.setcurrcat(catcopy);
          catview.render();
        };
      })(cat))

      this.catListElem.appendChild(elem);
    }

  }
}

var catview = {
  init:function(){
    // point to stuff
    this.catElem = document.getElementsByClassName('catpic')[0];
    this.catNameElem = document.getElementsByClassName('catName')[0]
    this.catImageElem = document.getElementById('xu')
    this.countElem = document.getElementById('cout')

    console.log(this.catElem)

    this.catImageElem.addEventListener('click',function(){
      octopus.incrementCou();
    })

    this.render();

  },

  render: function(){
    console.log('now to make them cats show')
    var hey = octopus.currentCat();
    console.log(hey);

    this.countElem.textContent = hey.count;
    this.catImageElem.src = 'pics/' + hey.finame;
    this.catNameElem.textContent = hey.name;

  }
}

var chew = document.getElementById('chew');

//incOnCli(chew,cats.chewie);

octopus.init();


function Cat(filename, name){

  this.finame = filename;
  this.count = 0;
  this.name = name;

}
