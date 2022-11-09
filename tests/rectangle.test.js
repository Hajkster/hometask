const rectangle = require('../js/rectangle');
const length = 5;
const width = 6;


test ('should properly count rectangle Perimeter', () => {
    var rectanglePerimeter = rectangle.getRectanglePerimeter(length,width);
    expect(rectanglePerimeter).toBe(2*(length+width));
    });

test ('should properly count rectangle Area', () => {
    var rectangleArea = rectangle.getRectangleArea(length,width);
    expect(rectangleArea).toBe(length*width);
    });

test ('should generate a valid info about rectangle Perimeter and the Area', () => {
    var perimeter = rectangle.getRectanglePerimeter(length,width);
    var area = rectangle.getRectangleArea(length,width);
    var rectangleInfo = rectangle.getRectangleInfo(length,width);
    var expectedRectangleInfo ='The perimeter of a rectangle is ' + perimeter + ' and the area is ' + area;
    expect(rectangleInfo).toBe(expectedRectangleInfo);
    });