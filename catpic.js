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

console.log(cats)

cats.addcat('jgscat.jpg',  'ascii');

cats.addcat('kitties.jpg', 'kitties');


cats.addcat('artcats.jpg', 'Artsy')


// this is kind of my list model

// octopus

var octopus = {
  init: function(){
    // make the current cat the first cat in the list
    if (cats.currcat === null){
    cats.currcat = cats.liscat[0];
  }

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
  },
  changename: function(name){
    this.currentCat().name = name;

    console.log(cats.currcat)

  },
  changecount:function(newcou){
    this.currentCat().count = newcou;
  },
  changeAttrib: function(newa){
    this.currentCat().attribution = newa;
  }


}

var catListV = {
  init:function(){

    this.catListElem = document.getElementsByClassName('catli')[0];

    this.adbutton = document.getElementById('adbutt')

    this.render()
  },

  render: function(){
    var kitties, cat, i, elem;

    this.catListElem.innerHTML = '';

    kitties = octopus.getCats();

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

    this.adbutton.addEventListener('click', function(){

      adview.init();

    })

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
    this.hey = octopus.currentCat();
    console.log('cur cat in view', this.hey);

    this.countElem.textContent = this.hey.count;
    this.catImageElem.src = 'pics/' + this.hey.finame;
    this.catNameElem.textContent = this.hey.name;

  }
}

var adview = {
  init: function(){
    console.log('ready for some adim shizam');
    this.admin = document.getElementById('admin');

    this.admin.style.display = 'inline-block';

    this.adname = document.getElementById('catN');
    this.adfi = document.getElementById('url');
    this.adcount = document.getElementById('discou');
    this.cancel = document.getElementById('canadmin')

    this.render();

  },
  render:function(){

    this.oncat = octopus.currentCat();

    console.log('admin rndering', this.oncat)
    this.adname.value = this.oncat.name;
    this.adfi.value = this.oncat.attribution;
    this.adcount.value = this.oncat.count;

    this.cancel.addEventListener('click', function(){
      document.getElementById('admin').style.display = 'none';
    })

    document.getElementById('adminch').addEventListener('click', function(){

      this.oncat = octopus.currentCat();

      this.adname = document.getElementById('catN').value;

      console.log('should change stuff', this.oncat.name);

      octopus.changename(this.adname);
      octopus.changecount(document.getElementById('discou').value)

      octopus.changeAttrib(document.getElementById('url').value)
      console.log('right before initiing catview')
      console.log(cats);

    //  this.oncat.count = this.adcout.value;

      catview.render();
      catListV.render()
    //  catview.init();
    //can't use this because we too deep
    adview.dissapear();


    })

  },
  dissapear:function(){
    this.admin.style.display = 'none';
  }


}


octopus.init();


function Cat(filename, name){

  this.finame = filename;
  this.count = 0;
  this.name = name;
  this.attribution = 'https://www.udacity.com/course/viewer#!/c-ud989/l-3437288625/m-3530929039'

}
 var god;
