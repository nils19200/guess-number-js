// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo

console.log('=== Adivina el Número ===');

// --- Generar número secreto ---
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Temporal: ver el número para probar (lo quitaremos después)
console.log('(DEBUG) Número secreto:', numeroSecreto);

// --- Primer intento ---
let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

console.log('Intento 1 del jugador:', intento);

if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
  console.log('Resultado: ¡GANÓ en el primer intento!');
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
  console.log('Resultado: muy alto');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
  console.log('Resultado: muy bajo');
}

// --- Segundo intento ---
if (intento !== numeroSecreto) {
  let intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  console.log('Intento 2 del jugador:', intento2);

  if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento!');
    console.log('Resultado: ¡GANÓ en el segundo intento!');
  } else if (intento2 > numeroSecreto) {
    alert('📈 Muy alto. El número era ' + numeroSecreto);
    console.log('Resultado: Perdió (muy alto)');
  } else {
    alert('📉 Muy bajo. El número era ' + numeroSecreto);
    console.log('Resultado: Perdió (muy bajo)');
  }
}