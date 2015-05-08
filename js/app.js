var Cat  = function(data){
  console.log(levels)

  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable("flicker sthing");

  this.catlev = ko.computed(function(){
    //console.log(clickCount())
    var delev = 'babe';
    var clicks = this.clickCount();

    // probably not the super safest way to do it since objects don't always keep their order
    // the levels objet is in catpic.js

    if(clicks > 2){
      devlev = 'todler'
    }
    if(clicks > 5){
      devlev = "kiddo";
    }
    if(clicks > 12){
      devlev = "teen";
    }
    if(clicks > 19){
      devlev = "adult";
    }
    if(clicks > 30){
      devlev = "oldie"
    }


    return delev


  }, this)

  this.nicknames = ko.observableArray([
    "kitty",
    "hairy",
    "fur monster",
    "catso",
    "meowser"
  ])

}

var ViewModel = function(){

  this.currentCat = ko.observable( new Cat({
    clickCount:0,
    name:"Tabby",
    imgSrc: "img/434164568_fea0ad4013_z.jpg"

  }) );


  this.incrementCounter = function(){
    return this.clickCount(this.clickCount() + 1)
  }



}



console.log(levels.baby)
ko.applyBindings(new ViewModel());
