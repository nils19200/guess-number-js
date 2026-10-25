// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo
console.log('=== Adivina el Número ===');

// --- 1. Generar número secreto ---
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Temporal: ver el número para probar (DEBUG)
console.log('(DEBUG) Número secreto:', numeroSecreto);

// --- 2. Pedir primer intento ---
let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

// --- Comparar intento con número secreto ---
if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else {
  alert('❌ Incorrecto. El número era ' + numeroSecreto);
}
