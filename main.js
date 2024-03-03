const add = require("./modules/myModules");

const {age} = require("./modules/myModules") // podemos estraer una unica cosa perteneciente al modulo

console.log(add);
console.log(age)

//-----------------------------------

const operaciones = require('./math/index')

console.log(operaciones) //mostramos todo el modulo y su contenido

console.log(operaciones.suma)//accedemos a una de sus cuatro funciones ya que se exportan como objeto
console.log(operaciones.resta)//accedemos a una de sus cuatro funciones ya que se exportan como objeto

console.log(operaciones.suma(10, 882))//accedemos como un objeto a la funcion y declaramos nuevos parametros