const car= {
  company:"현대",
  model:"그렌저",
  price: 50000000
}

console.log(car);

const mycar = {
  ...car
};

console.log(car === mycar);