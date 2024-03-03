/* El node:pathmódulo proporciona utilidades para trabajar con rutas de archivos y directorios. Se puede 
acceder usando: */

const path = require('node:path')

const filepath = path.join('nodejs','modulos','path.js')

console.log(filepath)//muestra toda la ruta
console.log(path.basename(filepath)) //muestra el archivo base de la ruta(el ultimo archivo)
console.log(path.dirname(filepath))//muesta la direccion de la ruta sin archibo base
console.log(path.parse(filepath))//muestra info de la ruta en forma de objeto
console.log(path.resolve('path'))//te muestra la ruta en la que estas