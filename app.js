// boton.addEventListener("click", botonOnClick);
const resultado = () => {
  const boton = document.querySelector("button");

  // Declaracion de variables
  let netflix, amazon, disney;
  let totalStreaming = 0;

  // Manipulando el DOM
  const cine = document.querySelector("#cine").value;
  const entrada = document.querySelector("#entrada").value;
  const span = document.querySelector("span");

  // Validación de los NETFLIX
  if (document.querySelector("#netflix").checked) {
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
      `El total de las entradas de cine es: ${totalCine}`
    );
    span.appendChild(newTextNode);
  }
  console.log(`El total de las entradas de cine es: ${totalCine}`);
  console.log(`Streaming: ${totalStreaming}`);
};
