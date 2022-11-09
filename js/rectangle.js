function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
  }
  function getRectangleArea(length, width) {
    return length * width;
  }
  function getRectangleInfo(length, width) {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    //return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`) -> this line return undefine, because console.log does not return anything, either we provide log either we return string we use console.log and return string in term of test. 
    var messageToPrint = `The perimeter of a rectangle is ${perimeter} and the area is ${area}`
    console.log(messageToPrint)
    return messageToPrint;
  }        
  module.exports = {getRectanglePerimeter, getRectangleArea, getRectangleInfo };