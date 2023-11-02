const myHeros = ['superman', 'spiderman'] // create an array

const heroPower = {   // create an object of heropower
    superman: 'fly',
    spiderman: 'sling', 

    getSpidyPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kanhaiya = function(){   // inject a prototype in object
    console.log("Kanhaiya is present in all object array and function");
}

heroPower.kanhaiya()  // accesable in object 

myHeros.kanhaiya()  // accesable in array


Array.prototype.heyKanhaiya = function () {  // inject prototype in array
    console.log('Hello Kanhaiya');
}


myHeros.heyKanhaiya()  // accessable in array

// heroPower.heyKanhaiya()  // not accessable in object if injecect prototype in array




//-------- Inheritance ---------------// 


const user = { 
    name : 'Kanhaiya',
    roll : 16
}


const year = {
   finalYear : 'first sem' ,
   __proto__: user     // old way to share properties of two or more object 
}

const teachers = {
    Ram : 'Ramayan',
    Krishan: 'MahaBharat'
}

const superHeros = {
    hulk : "Green",
    ironman : 'Red and yellow'
}


Object.setPrototypeOf(teachers, superHeros) // Modern way to share properties of objects



// **********************Practice***************************** //


const otherName = "Kanhaiya Sahni      "

String.prototype.trueLength = function() {    // inject protype in string
    console.log(` ${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}


otherName.trueLength()  // use added prototype

"Ramayan".trueLength()



