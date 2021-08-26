// boton.addEventListener("click", botonOnClick);
const resultado = () => {
  // const boton = document.querySelector("button");

  // Declaracion de variables
  let netflix, amazon, disney;
  let totalStreaming = 0;

  // Manipulando el DOM
  const cine = parseFloat(document.querySelector("#cine").value);
  const entrada = parseFloat(document.querySelector("#entrada").value);
  const span = document.querySelector("span");

  // Validacion del SPAN
  if (span != null) {
    span.innerHTML = "";
  }

  // Validacion de los campos cine y entradas
  if (cine != [0 - 9]) {
    alert("instertar numeros");
  }

  if (document.querySelector("#netflix").checked) {
    // Validación de los NETFLIX
    netflix = Number.parseFloat(document.querySelector("#netflix").value);
    totalStreaming += netflix;
  } else {
    netflix = 0;
    totalStreaming += netflix;
  }

  // Validación de los AMAZON
  if (document.querySelector("#amazon").checked) {
    amazon = Number.parseFloat(document.querySelector("#amazon").value);
    totalStreaming += amazon;
  } else {
    amazon = 0;
    totalStreaming += amazon;
  }

  // Validación de los DISNEY
  if (document.querySelector("#disney").checked) {
    disney = Number.parseFloat(document.querySelector("#disney").value);
    totalStreaming += disney;
  } else {
    disney = 0;
    totalStreaming += disney;
  }
  //   Calculos matemáticos
  const totalCine = cine * entrada;
  if (totalCine > totalStreaming) {
    const newTextNode = document.createTextNode(
      `Es mas caro ir al cine -> ${totalCine}`
    );
    span.appendChild(newTextNode);
  } else {
    const newTextNode = document.createTextNode(
      `Es mejor estar en casa -> ${totalStreaming}`
    );
    span.appendChild(newTextNode);
  }
  console.log(`El total de las entradas de cine es: ${totalCine}`);
  console.log(`Streaming: ${totalStreaming}`);
};
