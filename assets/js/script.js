let precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = Intl.NumberFormat("es-CL").format(precio);

let totalPago;
let artComprado;
let cantidad = 0;
let totalPrecio = 0;

artComprado = document.querySelector(".cantidad");
totalPago = document.querySelector(".valor-total");

function funcSuma() {
  cantidad++;
  artComprado.innerHTML = cantidad;

  totalPrecio = totalPrecio + precio;
  totalPago.innerHTML = Intl.NumberFormat("es-CL").format(totalPrecio);
}

document.querySelector(".restaPrecio").onclick = function () {
  if (totalPrecio <= 0) {
    totalPago.innerHTML = 0;
    artComprado.innerHTML = 0;
  } else {
    cantidad--;
    artComprado.innerHTML = cantidad;

    totalPrecio = totalPrecio - precio;
    totalPago.innerHTML = Intl.NumberFormat("es-CL").format(totalPrecio);
  }
};
