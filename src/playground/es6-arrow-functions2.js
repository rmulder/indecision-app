//arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

//this keyword - no longer bound
const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Boston'],
  // printPlacesLived: function () {
  //     console.log(this.name);
  //     console.log(this.cities);

  //     this.cities.forEach((city) => {
  //         console.log(this.name + ' has lived in ' + city);
  //     });
  // }
  // printPlacesLived: function () {
  //     console.log(this.name);
  //     console.log(this.cities);

  //     this.cities.forEach((city) => {
  //         console.log(this.name + ' has lived in ' + city);
  //     });
  // }
  // printPlacesLived() {
  //     const cityMessages = this.cities.map((city) => {
  //         return this.name + ' has lived in ' + city;
  //     });
  //     return cityMessages;
  // }
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
  //numbers - array of numbers
  numbers: [1, 2, 3],
  //multiplyBy - single number
  multiplyBy: 2,
  //multiply - return a new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());