var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//nameConst = 'Gunther';
console.log('nameConst', nameConst);

function getPetName() {
  //var, let, and const => all function scoped!
  // let and const are *also* block-level scoped
  var petName = 'Hal';
  //let petName = 'Hal';
  //const petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping
const fullName = 'Robert Mulder';
let firstName;

if (fullName) {
  //const firstName = fullName.split(' ')[0];
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);