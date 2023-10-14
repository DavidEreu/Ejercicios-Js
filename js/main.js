// Funciones para los ejercicios
function calcularAreaCuadrado() {
  const lado = prompt("Ingresa la longitud de un lado del cuadrado:");
  const area = lado * lado;
  document.getElementById("resultado1").innerHTML = `El área del cuadrado es ${area}`;
}

function calcularAreaCirculo() {
  const radio = prompt("Ingresa el radio del círculo:");
  const area = Math.PI * radio * radio;
  document.getElementById("resultado2").innerHTML = `El área del círculo es ${area}`;
}

function convertirFahrenheitACelsius() {
  const fahrenheit = prompt("Ingresa la temperatura en grados Fahrenheit:");
  const celsius = (fahrenheit - 32) * (5/9);
  document.getElementById("resultado3").innerHTML = `La temperatura en grados Celsius es ${celsius}°C`;
}

function sumaRestaDosNumeros() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const suma = parseFloat(num1) + parseFloat(num2);
  const resta = parseFloat(num1) - parseFloat(num2);
  document.getElementById("resultado4").innerHTML = `Suma: ${suma}, Resta: ${resta}`;
}

function encontrarMayorDosNumeros() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const mayor = Math.max(parseFloat(num1), parseFloat(num2));
  document.getElementById("resultado5").innerHTML = `El número mayor es ${mayor}`;
}

function calcularAreaTriangulo() {
  const base = prompt("Ingresa la longitud de la base del triángulo:");
  const altura = prompt("Ingresa la altura del triángulo:");
  const area = (base * altura) / 2;
  document.getElementById("resultado6").innerHTML = `El área del triángulo es ${area}`;
}

function encontrarMayorTresNumeros() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const num3 = prompt("Ingresa el tercer número:");
  const mayor = Math.max(parseFloat(num1), parseFloat(num2), parseFloat(num3));
  document.getElementById("resultado7").innerHTML = `El número mayor es ${mayor}`;
}

function generarSerieNumeros() {
  let serie = "";
  for (let i = 1; i <= 7; i++) {
    serie += i + " ";
  }
  document.getElementById("resultado8").innerHTML = `Serie de números: ${serie}`;
}

function encontrarMayorMenorDosNumeros() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  if (num1 == num2) {
    alert("Los números son iguales. Introduce valores distintos.");
    return;
  }
  const mayor = Math.max(parseFloat(num1), parseFloat(num2));
  const menor = Math.min(parseFloat(num1), parseFloat(num2));
  document.getElementById("resultado9").innerHTML = `Mayor: ${mayor}, Menor: ${menor}`;
}

function encontrarMayorMenorTresNumeros() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const num3 = prompt("Ingresa el tercer número:");
  if (num1 == num2 || num1 == num3 || num2 == num3) {
    alert("Los números no son distintos. Introduce valores distintos.");
    return;
  }
  const mayor = Math.max(parseFloat(num1), parseFloat(num2), parseFloat(num3));
  const menor = Math.min(parseFloat(num1), parseFloat(num2), parseFloat(num3));
  document.getElementById("resultado10").innerHTML = `Mayor: ${mayor}, Menor: ${menor}`;
}

function encontrarMayorMenorCuatroNumeros() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const num3 = prompt("Ingresa el tercer número:");
  const num4 = prompt("Ingresa el cuarto número:");
  if (num1 == num2 || num1 == num3 || num1 == num4 || num2 == num3 || num2 == num4 || num3 == num4) {
    alert("Los números no son distintos. Introduce valores distintos.");
    return;
  }
  const mayor = Math.max(parseFloat(num1), parseFloat(num2), parseFloat(num3), parseFloat(num4));
  const menor = Math.min(parseFloat(num1), parseFloat(num2), parseFloat(num3), parseFloat(num4));
  document.getElementById("resultado11").innerHTML = `Mayor: ${mayor}, Menor: ${menor}`;
}

function sumatoria1a10() {
  let suma = 0;
  for (let i = 1; i <= 10; i++) {
    suma += i;
  }
  document.getElementById("resultado12").innerHTML = `La sumatoria de los números del 1 al 10 es ${suma}`;
}

function sumatoriaMultiplosDe5() {
  let suma = 0;
  let numeros = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      suma += i;
      numeros += i + " ";
    }
  }
  document.getElementById("resultado13").innerHTML = `Números: ${numeros}, Sumatoria: ${suma}`;
}

function sumatoriaParesDel1al100() {
  let suma = 0;
  let numeros = "";
  for (let i = 2; i <= 100; i += 2) {
    suma += i;
    numeros += i + " ";
  }
  document.getElementById("resultado14").innerHTML = `Números: ${numeros}, Sumatoria: ${suma}`;
}

function contarImparesPrimeros300Numeros() {
  let conteo = 0;
  let suma = 0;
  for (let i = 1; i <= 300; i++) {
    if (i % 2 !== 0) {
      conteo++;
      suma += i;
    }
  }
  document.getElementById("resultado15").innerHTML = `Número de impares: ${conteo}, Sumatoria: ${suma}`;
}

function calcularHipotenusaTriangulo() {
  const cateto1 = prompt("Ingresa la longitud del primer cateto:");
  const cateto2 = prompt("Ingresa la longitud del segundo cateto:");
  const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
  document.getElementById("resultado16").innerHTML = `La longitud de la hipotenusa es ${hipotenusa}`;
}

function calcularAreaVolumenCilindro() {
  const radio = prompt("Ingresa el radio del cilindro:");
  const altura = prompt("Ingresa la altura del cilindro:");
  const area = 2 * Math.PI * radio * (radio + altura);
  const volumen = Math.PI * radio ** 2 * altura;
  document.getElementById("resultado17").innerHTML = `Área: ${area}, Volumen: ${volumen}`;
}

function esParImpar() {
  const numero = prompt("Ingresa un número:");
  if (numero % 2 === 0) {
    document.getElementById("resultado18").innerHTML = `${numero} es un número par`;
  } else {
    document.getElementById("resultado18").innerHTML = `${numero} es un número impar`;
  }
}

function contarRangoNumeros() {
  let rango1 = 0;
  let rango2 = 0;
  let rango3 = 0;
  for (let i = 0; i < 10; i++) {
    const numero = prompt(`Ingresa el número ${i + 1}:`);
    if (numero >= 50 && numero <= 75) {
      rango1++;
    }
    if (numero > 80) {
      rango2++;
    }
    if (numero < 30) {
      rango3++;
    }
  }
  document.getElementById("resultado19").innerHTML = `Números entre 50 y 75: ${rango1}, Mayores de 80: ${rango2}, Menores de 30: ${rango3}`;
}

function ordenarDosNumeros() {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");
  const ordenados = [parseFloat(num1), parseFloat(num2)].sort((a, b) => a - b);
  document.getElementById("resultado20").innerHTML = `Números ordenados de menor a mayor: ${ordenados[0]}, ${ordenados[1]}`;
}

function multiplosDe2() {
  let multiplos = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      multiplos += i + " ";
    }
  }
  document.getElementById("resultado21").innerHTML = `Múltiplos de 2: ${multiplos}`;
}

function calcularMinutosEn5Horas() {
  const horas = 5;
  const minutos = horas * 60;
  document.getElementById("resultado22").innerHTML = `En 5 horas hay ${minutos} minutos`;
}

function calcularEstacionamiento() {
  const horas = parseInt(prompt("Ingresa la cantidad de horas de estacionamiento:"));
  let costo;
  if (horas === 1) {
    costo = 3000;
  } else {
    costo = 3000 + (horas - 1) * 2000;
  }
  document.getElementById("resultado23").innerHTML = `El costo de estacionamiento es $${costo} pesos`;
}

function calcularEntradaEspectaculo() {
  const cantidadEntradas = parseInt(prompt("Ingresa la cantidad de entradas (máximo 4):"));
  const costoUnitario = 10000;
  let descuento = 0;
  if (cantidadEntradas === 2) {
    descuento = 0.1; // 10%
  } else if (cantidadEntradas === 3) {
    descuento = 0.15; // 15%
  } else if (cantidadEntradas === 4) {
    descuento = 0.2; // 20%
  }
  const costoTotal = cantidadEntradas * costoUnitario * (1 - descuento);
  document.getElementById("resultado24").innerHTML = `Costo total de ${cantidadEntradas} entradas: $${costoTotal} pesos`;
}

function convertirKMHaMPS() {
  const velocidadKMH = prompt("Ingresa la velocidad en kilómetros por hora (KMH):");
  const velocidadMPS = velocidadKMH * (1000 / 3600); // Conversión de KMH a MPS
  document.getElementById("resultado25").innerHTML = `La velocidad en metros por segundo (MPS) es ${velocidadMPS} m/s`;
}

function calcularNotaFinal() {
  const nombre = prompt("Ingresa el nombre del alumno:");
  const nota1 = parseFloat(prompt("Ingresa la nota del primer corte:"));
  const nota2 = parseFloat(prompt("Ingresa la nota del segundo corte:"));
  const nota3 = parseFloat(prompt("Ingresa la nota del tercer corte:"));
  const notaFinal = (nota1 * 0.33) + (nota2 * 0.33) + (nota3 * 0.34);
  let mensaje = `${nombre}, tu nota final es ${notaFinal}.`;
  if (notaFinal >= 3.0) {
    mensaje += " Aprobado";
  } else {
    mensaje += " Reprobado";
  }
  document.getElementById("resultado26").innerHTML = mensaje;
}

function calcularNominaObreros() {
  const horasTrabajadas = 30;
  const cantidadObreros = 50;
  const costoHora = 30000;
  const totalNomina = horasTrabajadas * cantidadObreros * costoHora;
  document.getElementById("resultado27").innerHTML = `La nómina total es $${totalNomina} pesos`;
}

function calcularFactorial() {
  const numero = prompt("Ingresa un número para calcular su factorial:");
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  document.getElementById("resultado28").innerHTML = `El factorial de ${numero} es ${factorial}`;
}

function calcularTablaMultiplicar() {
  const numero = 5;
  let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += `${numero} x ${i} = ${numero * i}<br>`;
  }
  document.getElementById("resultado29").innerHTML = tabla;
}

function esPrimo() {
  const numero = parseInt(prompt("Ingresa un número para verificar si es primo:"));
  if (numero <= 1) {
    document.getElementById("resultado30").innerHTML = `${numero} no es primo.`;
    return;
  }
  let esPrimo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    document.getElementById("resultado30").innerHTML = `${numero} es primo.`;
  } else {
    document.getElementById("resultado30").innerHTML = `${numero} no es primo.`;
  }
}


function changeColor(button) {
  button.classList.add("clicked");
  button.disabled = true;
}
