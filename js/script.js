const acceptDeleteBtn = document.querySelector("#btn-accept-deletion");
const openModal = document.querySelector(".btn");
const modalContains = document.querySelector(".modal-container");
const modalPrincipal = document.querySelector(".containermodal-newSale");
const closeModal = document.querySelector(".close");
const modalChange = document.querySelector(".modal");
const selectOption = document.querySelector(".select-option");
const btnSave = document.querySelector("#btn-save");
const table = document.querySelector(".col1");
const secondTable = document.querySelector(".table2");
const sucCentro = document.querySelector("#centro");
const sucCaballito = document.querySelector("#caballito");
const modalEliminarVenta = document.querySelector(".modal-eliminar-venta");
const blurContains = document.querySelector("#blur-container");
const selectComponentes = document.querySelector(".select-componentes");
const selectSucursal = document.querySelector(".single-select");
const prodEstrella = document.querySelector(".prodEstrella");
const bestSeller = document.querySelector(".bestSeller");
let productoEliminarId = 0;
let productoEditarId = 0;
let nuevoArrVentas = [];
let nuevoArrPrecio = [];
nuevoArrPrecio = local.precios;
nuevoArrVentas = local.ventas;

const parsearFecha = (date) => {
  let dd = (date.getDate() < 10 ? "0" : "") + date.getUTCDate();
  let anio = date.getFullYear();
  let mm;
  if (dd === "1") {
    dd = `0${dd}`;
    mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 2);
  } else {
    mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
  }
  if (dd === "010") {
    dd = dd.substring(1, 3);
  }

  return `${dd}/${mm}/${anio}`;
};

const cargarVentas = (arrVentas) => {
  let str = `<tr>
            <th>Fecha</th>
            <th>Vendedora</th>
            <th class="tede">Sucursal</th>
            <th class="tede">Componentes</th>
            <th>Precio</th>
            <th>Acciones</th>
            </tr>
            <tbody id="t-body"></tbody>`;
  let newRow = table.insertRow(table.rows.length);
  newRow.innerHTML = str;

  for (const {
    fecha,
    nombreVendedora,
    sucursal,
    componentes,
    id,
  } of arrVentas) {
    let it = `<tr class="uno" id = "fila">
                <td class= "eliminar-venta">${parsearFecha(fecha)}</td>
                <td class"eliminar-venta">${nombreVendedora}</td>
                <td class="tede eliminar-venta">${sucursal}</td>
                <td class="tede eliminar-venta">${componentes}</td>
                <td class="tede eliminar-venta">${precioMaquina(
                  componentes
                )}</td>
                <td><i class="far fa-edit boton-editar-venta open" id="editar-btn" aria-hidden="true" onclick="funcEdit(${id})"></i>
                <i class="far fa-trash-alt btn-eliminar-venta" onclick="funcDelete(${id})"></i></td>
             </tr>`;
    let newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = it;
  }
};

cargarVentas(nuevoArrVentas);

const render = () => {
  sucCentro.innerHTML = cantidadVentas("Centro", nuevoArrVentas);
  sucCaballito.innerHTML = cantidadVentas("Caballito", nuevoArrVentas);
  prodEstrella.innerHTML = `<p>Producto Estrella: <b>${componenteMasVendido(
    nuevoArrPrecio
  )}</b></p>`;
  bestSeller.innerHTML = `<p>Mejor Vendedora: <b>${mejorVendedora(
    nuevoArrVentas
  )}</b></p>`;
};

render();

const limpiarTabla = () => {
  table.innerHTML = "";
};

let getDateTime = document.querySelector("#fecha-nueva-venta");

const setMaxDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }

  today = `${yyyy}-${mm}-${dd}`;

  let minimum = "2018-01-01";
  getDateTime.max = today;
  getDateTime.min = minimum;
};
setMaxDate();

const saveData = () => {
  let componentes = getSelectComponentValues(selectComponentes);
  let fecha = new Date(getDateTime.value);
  let vendedora = selectOption.value;
  let sucursal = selectSucursal.value;
  if (validateAllItems(componentes, getDateTime.value, vendedora, sucursal)) {
    swal("Por favor, complete todos los campos", "", "warning");
  } else {
    nuevoArrVentas.push({
      id: nuevoArrVentas.length + 1,
      fecha: fecha,
      nombreVendedora: vendedora,
      componentes: componentes,
      sucursal: sucursal,
    });

    limpiarTabla();
    render();
    cargarVentas(nuevoArrVentas);
    swal("Venta añdadida correctamete", "", "success");
  }
};


const funcEdit = (id) => {
  modalContains.classList.remove("hide");
  modalContains.classList.add("show");

  blurContains.style.filter = "(5px)";
  productoEditarId = id;

  activarBotonEditar();
};

const changeData = () => {
  const { id } = nuevoArrVentas;
  let componentes = getSelectComponentValues(selectComponentes);
  let fecha = new Date(getDateTime.value);
  let vendedora = selectOption.value;
  let sucursal = selectSucursal.value;
  if (validateAllItems(componentes, getDateTime.value, vendedora, sucursal)) {
    swal("Por favor, complete todos los campos", "", "warning");
  } else {
    nuevoArrVentas.forEach((e) => {
      if (e.id === productoEditarId) {
        e.fecha = fecha;
        e.nombreVendedora = vendedora;
        e.sucursal = sucursal;
        e.componentes = componentes;
      }
    });

    limpiarTabla();
    render();
    cargarVentas(nuevoArrVentas);
    swal("Venta editada correctamete", "", "success");
  }
};
const funcDelete = (id) => {
  modalEliminarVenta.classList.remove("hide");
  modalEliminarVenta.classList.add("show");
  blurContains.style.filter = "(5px)";
  productoEliminarId = id;
};
const deleteData = () => {
  if (nuevoArrVentas.length == 0) {
    nuevoArrVentas = local.ventas.filter(({ id }) => id != productoEliminarId);
  } else {
    nuevoArrVentas = nuevoArrVentas.filter(
      ({ id }) => id != productoEliminarId
    );

    limpiarTabla();
    render();
    cargarVentas(nuevoArrVentas);
  }
};
const validateAllItems = (comp, fec, vend, suc) => {
  return comp.length == 0 || fec === "" || vend === "" || suc === "";
};

const getSelectComponentValues = (select) => {
  let result = [];
  let options = select && select.options;
  let opt;

  for (let i = 0; i < options.length; i++) {
    opt = options[i];
    opt.selected ? result.push(opt.value) : false;
  }
  return result;
};
const cargarComponentes = () => {
  const { precios } = local;
  for (const precio of precios) {
    const listaComponentes = document.createElement("option");
    listaComponentes.classList.add("seleccionar-componentes");
    listaComponentes.setAttribute("value", `${precio.componente}`);
    //console.log(listaComponentes)
    listaComponentes.innerHTML = `${precio.componente}`;
    selectComponentes.appendChild(listaComponentes);
  }
};

cargarComponentes();

let cargarVendedoras = () => {
  const { vendedoras } = local;
  for (const vendedora of vendedoras) {
    const listaVendedoras = document.createElement("option");
    listaVendedoras.classList.add("seleccion-de-vendedoras");
    listaVendedoras.innerHTML = `${vendedora}`;
    selectOption.appendChild(listaVendedoras);
  }
};
cargarVendedoras();

let cargarSucursal = () => {
  const listaSucursal = document.createElement("option");
  const listaSucursal1 = document.createElement("option");
  listaSucursal.innerHTML = "Caballito";
  listaSucursal1.innerHTML = "Centro";
  selectSucursal.appendChild(listaSucursal);
  selectSucursal.appendChild(listaSucursal1);
};

cargarSucursal();

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalContains.classList.remove("hide");
  modalContains.classList.add("show");
  activarBotonGuardar();
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalContains.classList.remove("show");
  modalContains.classList.add("hide");
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape" || e.key === "Scape") {
    modalContains.classList.add("hide");
    modalEliminarVenta.classList.add("hide");
  }
  return false;
});

const btnModalEdit = document.querySelector(".boton-editar-venta");
const btnEdit2 = document.querySelector(".btnopen1");

btnModalEdit.addEventListener("click", (e) => {
  e.preventDefault();
  modalContains.classList.remove("hide");
  modalContains.classList.add("show");

  activarBotonEditar();
});

const activarBotonGuardar = () => {
  btnEdit2.classList.remove("show");
  btnEdit2.classList.add("hide");

  btnSave.classList.add("show");
  btnSave.classList.remove("hide");
};

const activarBotonEditar = () => {
  btnEdit2.classList.add("show");
  btnEdit2.classList.remove("hide");

  btnSave.classList.remove("show");
  btnSave.classList.add("hide");
};

btnEdit2.addEventListener("click", () => {
  changeData();
  modalContains.classList.add("hide");
  btnEdit2.classList.add("show");
});
btnSave.addEventListener("click", () => {
  saveData();
  modalContains.classList.add("hide");

  //blurContains.style.filter("none");
});
window.addEventListener("click", (e) => {
  if (e.target === modalPrincipal) modalContains.classList.add("hide");
  //blurContains.style.filter("none");
});
const deleteSale = document.querySelector(".containermodal-deleteSale");
window.addEventListener("click", (e) => {
  if (e.target === deleteSale) modalEliminarVenta.classList.add("hide");
  //blurContains.style.filter("none");
});
const btnClose2 = document.querySelector(".close2");
btnClose2.addEventListener("click", () => {
  modalEliminarVenta.classList.add("hide");
});

acceptDeleteBtn.addEventListener("click", () => {
  deleteData();
  blurContains.style.filter = "none";
  modalEliminarVenta.classList.add("hide");
  swal("Venta eliminada correctamente", "", "success");
});
