/* CÁLCULO PRECIO */
function costeTotal() {
  const tipoEntrada = document.getElementById("exposicion").value;
  const cantidadInput = document.getElementById("numero").value;
  const spanCoste = document.getElementById("coste");
  const cantidad = parseInt(cantidadInput) || 0;
  let precioBase = 0;

  if (tipoEntrada === "e1") {
    precioBase = 16.0;
  } else if (tipoEntrada === "e2") {
    precioBase = 26.5;
  } else if (tipoEntrada === "e3") {
    precioBase = 42.0;
  }

  const total = precioBase * cantidad;

  if (cantidad > 0) {
    spanCoste.textContent = total.toFixed(2) + " €";
  } else {
    spanCoste.textContent = "0,00 €";
  }
}

/* MENSAJE */
window.addEventListener("DOMContentLoaded", () => {
  costeTotal();

  document
    .getElementById("compra-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const precioTotal = document.getElementById("coste").textContent;

      document.getElementById("nom").textContent = nombre;
      document.getElementById("ct").textContent = precioTotal;

      document
        .getElementById("modal")
        .style.setProperty("display", "flex", "important");
    });
});
