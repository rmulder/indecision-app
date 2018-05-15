// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

const fullName = 'Robert Mulder';
//const getFirstName = (fullName) => {
//    return (fullName) ? fullName.split(' ')[0] : 'Unknown';
//};

const getFirstName = (fullName) => (fullName) ? fullName.split(' ')[0] : 'Unknown';
console.log(getFirstName(fullName));
