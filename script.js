const pagos = [];
const usuarios = [];
const lista = document.getElementById("list-group");
const cuadroResultado = document.getElementById("total");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");

function funciones() {
  gastosListas();
  adicionar();
  pagosIndividuales();
}

function gastosListas() {
  usuarios.push(usuario.value);
  pagos.push(pago.value);
}

function adicionar() {
  const li = document.createElement("li");
  const text = document.createTextNode(`${usuario.value}: pagó $${pago.value}`);
  li.classList.add("list-group-item");
  li.appendChild(text);
  lista.appendChild(li);
}

function sumar(pagos) {
  let suma = 0;
  //   for (let index = 0; index < pagos.length; index++) {
  //const element = array[index];
  //   }
  for (let pago of pagos) {
    suma += parseInt(pago);
  }
  return suma;
}

function pagosIndividuales() {
  const total = sumar(pagos);
  const aportePorPersona = total / usuarios.length;
  cuadroResultado.innerText = `Total: ${total}
                                A cada uno le toca pagar: $${aportePorPersona.toFixed(
                                  2
                                )} `;
}
