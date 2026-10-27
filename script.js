// === ADIVINA EL NÚMERO - Versión Hot Wheels DOM ===

// --- Seleccionar elementos del HTML ---
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');

console.log('Elementos conectados:', inputIntento, btnAdivinar, mensaje);

// --- Función para mostrar mensajes ---
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Mensaje de bienvenida inicial
mostrarMensaje('¡Listo para competir en Hot Wheels!', '#93c5fd');

// --- Variables del juego ---
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];

console.log('(DEBUG) Número secreto:', numeroSecreto);

// --- NUEVA FUNCIÓN: Calcular el Rango del Piloto según los intentos ---
function obtenerRangoPiloto(totalIntentos) {
  if (totalIntentos <= 3) {
    return { titulo: "🏆 ¡Piloto Leyenda (Campeón Copa Hot Wheels)!", color: "#f97316" };
  } else if (totalIntentos <= 6) {
    return { titulo: "⚡ ¡Piloto Profesional (Excelente manejo)!", color: "#3b82f6" };
  } else if (totalIntentos <= 9) {
    return { titulo: "🚗 ¡Piloto de Pruebas (Llegaste a la meta)!", color: "#eab308" };
  } else {
    return { titulo: "🐢 ¡Conductor Dominical (A practicar en la pista)!", color: "#ef4444" };
  }
}

// --- Función para verificar el intento del usuario ---
function verificarIntento() {
  const valorInput = parseInt(inputIntento.value);

  // 1. Validar que sea un número válido entre 1 y 100
  if (isNaN(valorInput) || valorInput < 1 || valorInput > 100) {
    mostrarMensaje('⚠️ Ingresa un número válido entre 1 y 100.', '#ef4444');
    return;
  }

  // 2. Incrementar intentos y registrar en el historial
  intentos++;
  historialIntentos.push(valorInput);

  // Actualizar la interfaz de contador e historial
  contador.textContent = `Intentos: ${intentos}`;
  historial.textContent = `Historial: ${historialIntentos.join(', ')}`;

  // 3. Comparar con el número secreto
  if (valorInput === numeroSecreto) {
    // Obtenemos el rango del piloto al ganar
    const rango = obtenerRangoPiloto(intentos);
    mostrarMensaje(`🎉 ¡Ganaste el carro de colección en ${intentos} intentos!\n${rango.titulo}`, rango.color);
    terminarJuego();
  } else if (valorInput < numeroSecreto) {
    mostrarMensaje('📈 El número secreto es MAYOR. ¡Acelera más!', '#f97316');
  } else {
    mostrarMensaje('📉 El número secreto es MENOR. ¡Frena un poco!', '#3b82f6');
  }

  // Limpiar el input y devolver el foco para el siguiente intento
  inputIntento.value = '';
  inputIntento.focus();
}

// --- Función para finalizar el juego al ganar ---
function terminarJuego() {
  btnAdivinar.disabled = true;
  inputIntento.disabled = true;
  btnReiniciar.style.display = 'inline-block'; // Muestra el botón de reiniciar
}

// --- Función para reiniciar el juego ---
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];

  console.log('(DEBUG) Nuevo número secreto:', numeroSecreto);

  contador.textContent = 'Intentos: 0';
  historial.textContent = 'Historial: ';
  mostrarMensaje('¡Nuevo vehículo en pista! Adivina el número...', '#93c5fd');

  btnAdivinar.disabled = false;
  inputIntento.disabled = false;
  btnReiniciar.style.display = 'none';
  inputIntento.value = '';
  inputIntento.focus();
}

// --- Conectar eventos ---
btnAdivinar.addEventListener('click', verificarIntento);

// --- Enter también funciona ---
inputIntento.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    verificarIntento();
  }
});

// --- Conectar evento del botón reiniciar ---
btnReiniciar.addEventListener('click', reiniciarJuego);