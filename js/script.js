/* SECCIÓN EXPERIENCIA */
document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      titulo: "DESCUBRE<br>NUESTRAS<br>SALAS",
      subtitulo: "Refugio Virtual",
      texto:
        "Desafía la perspectiva. Accede a nuestra zona de realidad virtual para cruzar la barrera de lo tangible. Aquí, la tecnología te permite caminar por sus obras, interactuar con los elementos que las componen y experimentar la genialidad del artista desde un punto de vista único: sus propios ojos.",
      fondo: "url('../img/RV.png')",
    },
    {
      titulo: "DESCUBRE<br>NUESTRAS<br>SALAS",
      subtitulo: "Universo 360",
      texto:
        "Deja atrás el mundo exterior. En nuestra sala inmersiva, los muros se disuelven para dar paso a un lienzo infinito. Rodéate de los colores, los cielos y los paisajes de Vincent, amplificados a una escala monumental en una coreografía de luz y sonido que reacciona a cada uno de tus pasos.",
      fondo: "url('../img/360.png')",
    },
    {
      titulo: "DESCUBRE<br>NUESTRAS<br>SALAS",
      subtitulo: "Los orígenes",
      texto:
        "Antes de la obra, está la persona. Adéntrate en nuestro espacio introductorio donde la correspondencia, los bocetos inéditos y los mapas de sus viajes cobran vida bajo tus manos. Un encuentro íntimo con el hombre detrás del pincel.",
      fondo: "url('../img/BIO.png')",
    },
  ];

  let index = 0;
  const section = document.querySelector(".experiencia-section");
  const h2 = document.getElementById("exp-titulo");
  const sub = document.getElementById("exp-subtitulo");
  const p = document.getElementById("exp-texto");

  function cambiarSlide() {
    gsap.to([h2, sub, p], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        index = (index + 1) % slides.length;

        h2.innerHTML = slides[index].titulo;
        sub.innerText = slides[index].subtitulo;
        p.innerText = slides[index].texto;

        section.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.57), rgba(0,0,0,0.57)), ${slides[index].fondo}`;

        gsap.to([h2, sub, p], { opacity: 1, duration: 0.5 });
      },
    });
  }

  setInterval(cambiarSlide, 6000);
});

/* SECCIÓN ENTRADAS */
function costeTotal() {
  let numeroEntradas = document.getElementById("numero").value;
  let valorExposicion = document.getElementById("exposicion").value;
  let costePorEntrada = 0;

  if (valorExposicion === "e1") {
    costePorEntrada = 16.0;
  } else if (valorExposicion === "e2") {
    costePorEntrada = 26.5;
  } else if (valorExposicion === "e3") {
    costePorEntrada = 42.0;
  }

  let costeEntradas = (numeroEntradas * costePorEntrada).toFixed(2) + " €";
  document.getElementById("coste").innerHTML = costeEntradas;
}

function comprar() {
  console.log("-----------función comprar");

  alert("¡Muchas gracias por su compra! Nos vemos en la exposición.");

  document.getElementById("nom").innerHTML =
    document.getElementById("nombre").value;
  document.getElementById("corr").innerHTML =
    document.getElementById("correo").value;
  document.getElementById("num").innerHTML =
    document.getElementById("numero").value;
  document.getElementById("ct").innerHTML = document.getElementById(
    "modal",
  ).style.display = "flex";

  return false;
}
