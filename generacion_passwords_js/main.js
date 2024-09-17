// Recuperación
let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let limpiarBtn = document.getElementById("limpiar");
let mensajeH3 = document.getElementById("mensaje");

const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

function generar() {
  mensajeH3.innerHTML = "";
  let numeroDigitado = parseInt(cantidad.value); // Conversión necesaria ya que el input por default regresa str
  if (numeroDigitado < 2) {
    alert("La cantidad de caracteres tiene que ser mayor o igual a 5");
  } else {
    // ciclo para crear la contraseña
    let password = ""; // variable que guardará contraseña
    for (let i = 0; i < numeroDigitado; i++) {
      let calculoCaracterAleatorio = Math.floor(
        Math.random() * cadenaCaracteres.length
      ); // calculo de la posición del caracter a sacar

      let caracterAleatorio = cadenaCaracteres[calculoCaracterAleatorio]; // 1 solo caracter aleatorio
      console.log(caracterAleatorio);

      password += caracterAleatorio; // acumulación
    }
    contrasena.value = password; // envío a html

    setTimeout(contrasenaFuerte(password), 2000); // Evaluación contraseña fuerte
  }
}

// Validación caracter por caracter en contraseña
function siContiene(password, conjunto) {
  for (let i = 0; i < password.length; i++) {
    if (conjunto.includes(password[i])) {
      return true; // Si encuentra coincidencia regresa verdadero
    }
  }
  return false;
}

function contrasenaFuerte(password) {
  // Validación contraseña fuerte
  if (!siContiene(password, mayus) && !siContiene(password, nums)) {
    mensajeH3.innerHTML =
      "La contraseña no es fuerte ya que no contiene mayúsculas ni números";
  } else if (!siContiene(password, mayus)) {
    mensajeH3.innerHTML =
      "La contraseña no es fuerte ya que no contiene mayúsculas";
  } else if (!siContiene(password, nums)) {
    mensajeH3.innerHTML =
      "La contraseña no es fuerte ya que no contiene números";
  }
}

function limpiar() {
  contrasena.value = "";
  mensajeH3.innerHTML = "";
}

// let tipo = `El tipo de texto es: ${typeof texto}`;

// console.log(tipo);

// Notas
// Todos los inputs devuelven texto

// let texto = "texto";
// console.log(typeof texto);
