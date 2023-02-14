// Output: esta variable se queda estable.
const kelvin = 0;
//Output: Para convertir kelvin a celsius hay que restar 273.
const celsius = kelvin - 273;
// Output: Esta equacion nos da los grados fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
//Output; usamos el floor metodo para redondear un numero con decimales.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`)
