console.log('¡Hola desde JavaScript!');

let nombre = "nils";
// Declara una variable 'edad' con tu edad real (usa let)
let edad = "44";
// Declara una variable 'estaAprendiendo' con valor true (usa let)
let estasAprendiendo = true;
// --- Imprime cada variable ---
console.log(nombre);
console.log(edad);
console.log(estasAprendiendo);
console.log(typeof nombre); // tipo de dato string 
console.log(typeof edad); // tipo de dato string
console.log(typeof estasAprendiendo); //tipo de dato boolean
edad = "20";
console.log(edad);
// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
const maxIntentos =10;
console.log(curso);
console.log(maxIntentos);
console.log(typeof curso);
//maxIntentos=20; da error no se puede modificar
console.log(maxIntentos);
// Declara una constante 'maxIntentos' con valor 10
// Imprime ambas constantes con console.log()



// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'

// --- Salida al usuario ---
// Muestra un alert que diga: "Hola [nombre], tienes [edad] años."
// Usa concatenación con + para unir las variables con el texto

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
edad = prompt('¿cual es tu edad?');
console.log('edad:', edad);
// Imprime la edad y su tipo de dato (usa typeof)
// Pregúntate: ¿por qué el tipo no es "number"? porque esta en comillas