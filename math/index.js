const suma = (a, b) => {
  return a + b;
};

const resta = (a, b) => {
  return a - b;
};

const multiplicacion = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

console.log(suma(3, 6));
console.log(resta(3, 6));
console.log(multiplicacion(3, 6));
console.log(division(3, 6));


module.exports = {
    suma,
    resta,
    multiplicacion,
    division
}