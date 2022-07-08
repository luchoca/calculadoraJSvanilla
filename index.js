var input = document.createElement("input");
var input2 = document.createElement("input");
var label = document.createElement("input");

var resultado = 0;
var container = document.getElementById("container");
container.appendChild(input);
container.appendChild(input2);
container.appendChild(label);
var button = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

container.appendChild(button);
container.appendChild(button2);
container.appendChild(button3);
container.appendChild(button4);

button.textContent = "Suma";
button2.textContent = "resta";
button3.textContent = "multiplicacion";
button4.textContent = "division";
button.addEventListener("click", () => {
  var suma = parseInt(input.value) + parseInt(input2.value);
  resultado = suma;
  label.value = "resultado: " + resultado;
  console.log(suma);
  return suma;
});
button2.addEventListener("click", () => {
  var resta = parseInt(input.value) - parseInt(input2.value);
  resultado = resta;
  label.value = "resultado: " + resultado;
  console.log(resta);
  return resta;
});
button3.addEventListener("click", () => {
  var multiplicacion = parseInt(input.value) * parseInt(input2.value);
  resultado = multiplicacion;
  label.value = "resultado: " + resultado;
  console.log(multiplicacion);
  return multiplicacion;
});
button4.addEventListener("click", () => {
  var division = parseInt(input.value) / parseInt(input2.value);
  resultado = division;
  label.value = "resultado: " + resultado;
  console.log(division);
  return division;
});
