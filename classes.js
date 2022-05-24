// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//Using CuboidMakerTwo, take your prototypes from the prototypes section and refactor into class syntax.
// Then, create an object called cuboidTwo that uses the new keyword to use our CuboidMakerTwo class.

class CuboidMakerTwo {
    constructor(attr){
     this.length = attr.length;
     this.width = attr.width;
    this.height = attr.height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 *(this.length * this.width + this.length * this.height + this.width * this.height)
    }
}
const cuboidTwo = new CuboidMakerTwo({
    length: 4,
    width: 5,
    height: 5
  })

//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130




