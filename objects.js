// How to create an object
var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
};

var cadi = {
  make: "Cadillac",
  model: "GM",
  year: 1955,
  color: "tan",
  passengers: 5,
  mileage: 12892,
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
};
// Accessing a property
// fiat.mileage

var miles = fiat.mileage;
if (miles < 2000) {
  buyIt();
}

// Exersise: arrange the magnets in the correct order
var dog = {
  name: "Fido",
  weight: 20.2,
  breed: "mixed",
  activity: "fetch balls",
};
var bark;
if (dog.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);
