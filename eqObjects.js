const assertEqual = function(actual, expected) {
  return actual === expected;
};

const eqObjects = function(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  return false;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false