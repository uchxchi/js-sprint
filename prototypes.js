// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //

//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴

/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use CuboidMaker to do the following:
 - Receives a single argument -- an object with the follwoing keys:
  + length
  + width
  + height
- Instances of CuboidMaker should initialize `length`, `width` and `height` properties
*/

function CuboidMaker(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  💡 NOTE: Formula for cuboid volume: length * width * height   
*/
CuboidMaker.prototype.volume = function(){
  return this.length * this.width * this.height;
}




/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  💡 NOTE: Formula for cuboid surface area: 2 * (length * width + length * height + width * height)  
*/
CuboidMaker.prototype.surfaceArea = function(){
  return 2 *(this.length * this.width + this.length * this.height + this.width * this.height)
}


/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })

// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
