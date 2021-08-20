// boton.addEventListener("click", botonOnClick);
const resultado = () => {
  const boton = document.querySelector("button");

  // Manipulando el DOM
  const cine = document.querySelector("#cine").value;
  const entrada = document.querySelector("#entrada").value;
  const netflix = document.querySelector("#netflix").value;
  const amazon = document.querySelector("#amazon").value;
  const disney = document.querySelector("#disney").value;

  const span = document.querySelector("span");

  // Validación de los checkbox
  if (document.querySelector("#netflix").checked) {
    alert("Usted selecionó netflix");
  }

  //   Calculos matemáticos
  const totalCine = cine * entrada;
  alert(totalCine);

  const newTextNode = document.createTextNode(
    "El total del cine es: " + totalCine
  );
  span.appendChild(newTextNode);
};
