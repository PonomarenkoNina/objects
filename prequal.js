var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};

function pregual(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

var worthAlook = pregual(taxi);

if (worthAlook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}
// Console JS: You should really pass on the Webville Motors Taxi

// Exersise
function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Invalid password! No secret for you.";
  }
}
function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit.",
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

// Object-o-matic
function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  var models = ["Cadillsc", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,
  };
  return car;
}

function displayCar(car) {
  console.log(
    "Your new car is a " + car.year + " " + car.make + " " + car.model
  );
}

var carToSell = makeCar();
displayCar(carToSell);
// Console JS: Your new car is a 1957 Fiat Torpedo
// Your new car is a 1961 Fiat Bel-Air
// Your new car is a 1955 Fiat Cadillsc
// Your new car is a 1954 GM 500 .......
