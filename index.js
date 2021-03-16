// "offset"
// es cuantos elementos tengo que saltearme antes de empezar a dar los resultados

let paginaActual = 0;
let resultadosPorPagina = 20;

// offset=0 // paginaActual * resultadosPorPagina
// offset=20 // paginaActual * resultadosPorPagina
// offset=40 // paginaActual * resultadosPorPagina (2 *20 = 40)

const primeraPagina = document.querySelector(".first-page");
const ultimaPagina = document.querySelector(".last-page");
const proximaPagina = document.querySelector(".next-page");
const anteriorPagina = document.querySelector(".previous-page");

console.log(
  "botones seleccionados:",
  primeraPagina,
  ultimaPagina,
  proximaPagina,
  anteriorPagina
);

const buscarComics = () => {
  //   if (paginaActual == 0) {
  //     primeraPagina.classList.add("deshabilitar");
  //     anteriorPagina.classList.add("deshabilitar");
  //   }

  //   if (offset + 20 > total) {
  //     proximaPagina.classList.add("deshabilitar");
  //     ultimaPagina.classList.add("deshabilitar");
  //   }

  console.log("pagina actual", paginaActual);
  fetch(
    `https://gateway.marvel.com/v1/public/comics?apikey=a6943ab77d6617d4958a73abab2a9b91&offset=${
      paginaActual * resultadosPorPagina
    }`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("pagina del comic:", data);
      console.log("offset del comic:", data.data.offset);
    });
};

proximaPagina.onclick = () => {
  //irAProximaPagina(); // me muestra las paginas siguiente cada 20 comics a la vez
  paginaActual++;
  buscarComics();
};

anteriorPagina.onclick = () => {
  paginaActual--;
  buscarComics();
};

primeraPagina.onclick = () => {
  paginaActual = 0;
  buscarComics();
};

ultimaPagina.onclick = () => {
  const resto = total % resultadosPorPagina;
  if (resto > 0) {
    paginaActual =
      (total - (total % resultadosPorPagina)) / resultadosPorPagina;
  } else {
    paginaActual =
      (total - (total % resultadosPorPagina)) / resultadosPorPagina -
      resultadosPorPagina;
  }
  buscarComics();
};

buscarComics();
