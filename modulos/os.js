let os = require('os');

console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())


/* poniendo un modulo global dentro de require podemos acceder a todos sus subsmodulos */


console.table({
    'user':os.userInfo(),
    'tiempo':os.uptime(),
    'plataforma':os.platform(),
    'memoria total':os.totalmem(),
    'ram ahora':os.freemem()

})