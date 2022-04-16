const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    {
      id: 0,
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      id: 1,
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    {
      id: 2,
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "Motherboard MZI"],
      sucursal: "Centro",
    },
    {
      id: 3,
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      id: 4,
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    {
      id: 5,
      fecha: new Date(2019, 1, 24),
      nombreVendedora: "Sheryl",
      componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
      sucursal: "Caballito",
    },
    {
      id: 6,
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
      sucursal: "Centro",
    },
    {
      id: 7,
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Ada",
      componentes: ["Motherboard MZI", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      id: 8,
      fecha: new Date(2019, 1, 11),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      id: 9,
      fecha: new Date(2019, 1, 15),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      id: 10,
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      id: 11,
      fecha: new Date(2019, 1, 21),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      id: 12,
      fecha: new Date(2019, 1, 8),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      id: 13,
      fecha: new Date(2019, 1, 16),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    {
      id: 14,
      fecha: new Date(2019, 1, 27),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    {
      id: 15,
      fecha: new Date(2019, 1, 22),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      id: 16,
      fecha: new Date(2019, 1, 5),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
      sucursal: "Centro",
    },
    {
      id: 17,
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    {
      id: 18,
      fecha: new Date(2019, 1, 7),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston"],
      sucursal: "Caballito",
    },
    {
      id: 19,
      fecha: new Date(2019, 1, 14),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Centro",
    },
  ],
  //["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 },
  ],
};
let fecha = new Date("2015-12-04T00:00:00");
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
let productoEliminarId = 0;
let nuevoArrVentas = [];
let nuevoArrPrecio = [];
nuevoArrPrecio = local.precios;
const selectSucursal = document.querySelector(".single-select");

const precioComponentes = (componente) => {
  const { precios } = local;
  for (const precio of precios) {
    if (precio.componente === componente) {
      return precio.precio;
    }
  }
};

const precioMaquina = (componentes) => {
  let acc = 0;
  for (const componente of componentes) {
    acc += precioComponentes(componente);
  }
  return acc;
};

const cantidadVentasComponente = (componente, nuevoArr) => {
  let acumulator = 0;

  for (const venta of nuevoArr) {
    if (venta.componentes.includes(componente)) {
      acumulator++;
    }
  }
  return acumulator;
};

const ventasPorSuc = (nombreSucursal, ventas) =>
  ventas.filter(({ sucursal }) => sucursal === nombreSucursal);

const ventasPorVendedora = (nombre, ventas) =>
  ventas.filter(({ nombreVendedora }) => nombreVendedora === nombre);

const ventasPorFecha = (mes, anio, ventas) =>
  ventas.filter(
    ({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio
  );
const ventasPorAño = (anio, ventas) => {
  return ventas.filter(({ fecha }) => {
    return fecha.getFullYear() === anio;
  });
};

const totalVendido = (ventas) => {
  let acc = 0;
  for (const { componentes } of ventas) {
    acc += precioMaquina(componentes);
  }
  return acc;
};

const ventasPorMesAñoVend = (mes, anio, vend) => {
  const { ventas } = local;
  let acc = 0;
  for (const { nombreVendedora, fecha, componentes } of ventas) {
    if (
      nombreVendedora === vend &&
      fecha.getMonth() + 1 === mes &&
      fecha.getFullYear() === anio
    ) {
      acc += precioMaquina(componentes);
    }
  }
  return acc;
};
const montoVentasPorVendedora = (vend, arrVentas) => {
  let acc = 0;
  for (const { nombreVendedora, componentes } of arrVentas) {
    if (nombreVendedora === vend) {
      acc += precioMaquina(componentes);
    }
  }
  return acc;
};

const vendedoraDelMes = (mes, anio) => {
  const { vendedoras } = local;
  const ventasPorVendedora = vendedoras.map((vendedora) => {
    return {
      vendedora,
      ventaTotal: ventasPorMesAñoVend(mes, anio, vendedora),
    };
  });
  let acc = 0;
  let mejorVendedora = "";
  for (const { vendedora, ventaTotal } of ventasPorVendedora) {
    if (acc < ventaTotal) {
      acc = ventaTotal;
      mejorVendedora = vendedora;
    }
  }
  return mejorVendedora;
};
const ventasPorMes = (mes, anio) => {
  mes--;
  const { ventas } = local;
  let acc = 0;
  for (const { fecha, componentes } of ventas) {
    if (fecha.getMonth() === mes && fecha.getFullYear() === anio) {
      acc += precioMaquina(componentes);
    }
  }
  return acc;
};

const ventasMes = (mes, anio) => {
  const { ventas } = local;
  return totalVendido(ventasPorFecha(mes, anio, ventas));
};

const ventasVendedora = (nombre) => {
  const { ventas } = local;
  return totalVendido(ventasPorVendedora(nombre, ventas));
};

const componenteMasVendido = (nuevoArr) => {
  let mayorCantidad = 0;
  let componenteEstrella = "";
  for (const precio of nuevoArr) {
    const { componente } = precio;
    const cantidad = cantidadVentasComponente(componente, nuevoArrVentas);
    if (mayorCantidad < cantidad) {
      mayorCantidad = cantidad;
      componenteEstrella = precio.componente;
    }
  }
  return componenteEstrella;
};

const huboVentas = (mes, anio) => {
  const { ventas } = local;
  return ventas.some(
    ({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio
  );
};

const ventasSucursal = (sucursal) => {
  const { ventas } = local;
  return totalVendido(ventasPorSuc(sucursal, ventas));
};
// necesitamos una funcion que nos guarde el importe total de ventas por suc
const ventasPorMesSucursal = (sucur, mes, anio) => {
  mes--;
  const { ventas } = local;
  let acc = 0;
  for (const { sucursal, componentes, fecha } of ventas) {
    if (
      sucursal === sucur &&
      fecha.getMonth() === mes &&
      fecha.getFullYear() === anio
    ) {
      acc += precioMaquina(componentes);
    }
  }
  return acc;
};

const sucursalDelMes = (mes, anio) => {
  const { sucursales } = local;
  const ventasPorSucursalMensual = sucursales.map((sucursal) => {
    return {
      sucursal: sucursal,
      ventaTotalPorMes: ventasPorMesSucursal(sucursal, mes, anio),
    };
  });

  let sucursalMasVentas = 0;
  let sucursalEstrella = "";
  for (const { sucursal, ventaTotalPorMes } of ventasPorSucursalMensual) {
    if (sucursalMasVentas < ventaTotalPorMes) {
      sucursalMasVentas = ventaTotalPorMes;
      sucursalEstrella = sucursal;
    }
  }
  return sucursalEstrella;
};

const parsearFecha = (date) => {
  let dd = (date.getDate() < 10 ? "0" : "") + date.getUTCDate();
  let anio = date.getFullYear();
  let mm
  if(dd === '1'){
    dd = `0${dd}`
     mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 2);
  }else{
     mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
  }
  if(dd ==='010'){
    dd = dd.substring(1,3);
  }
 
  return `${dd}/${mm}/${anio}`;
};

const renderPorMes = () => {
  const nuevasFechas = [];
  const { ventas } = local;
  for (const venta of ventas) {
    const fechas = venta.fecha.getMonth();
    !nuevasFechas.includes(fechas) && nuevasFechas.push(fechas);
  }
  nuevasFechas.sort((a, b) => {
    return a - b;
  });

  const ventasMes = nuevasFechas.map((element) => {
    return {
      fecha: element,
      total: ventasPorMes(element + 1, 2019),
    };
  });
  return ventasMes;
};

const renderPorSucursal = () => {
  const { ventas, sucursales } = local;

  const totalVent = sucursales.map((sucursal) => {
    return {
      sucursalVenta: sucursal,
      importe: totalVendido(ventasPorSuc(sucursal, ventas)),
    };
  });
  return totalVent;
};

const mejorVendedora = (arrVentas) => {
  let suma = 0;
  let nombreVendedoraMayor = "";
  for (const venta of arrVentas) {
    const { nombreVendedora } = venta;
    const precioTotal = montoVentasPorVendedora(nombreVendedora, arrVentas);
    if (suma < precioTotal) {
      suma = precioTotal;
      nombreVendedoraMayor = nombreVendedora;
    }
  }
  return nombreVendedoraMayor;
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
nuevoArrVentas = local.ventas;
cargarVentas(nuevoArrVentas);

const cantidadVentas = (sucursal, arrVentas) => {
  let totalVentas = 0;
  arrVentas.filter((venta) => {
    venta.sucursal === sucursal
      ? (totalVentas += precioMaquina(venta.componentes))
      : false;
  });
  return totalVentas;
};

const prodEstrella = document.querySelector(".prodEstrella");
const bestSeller = document.querySelector(".bestSeller");
const render = () => {
  sucCentro.innerHTML = cantidadVentas("Centro", nuevoArrVentas);
  sucCaballito.innerHTML = cantidadVentas("Caballito", nuevoArrVentas);
  prodEstrella.innerHTML = `<b>Producto Estrella</b>: ${componenteMasVendido(
    nuevoArrPrecio
  )}`;
  bestSeller.innerHTML = `<b>Mejor Vendedora</b>: ${mejorVendedora(
    nuevoArrVentas
  )}`;
};

render();

let productoEditarId = 0;
const funcEdit = (id) => {
  modalContains.classList.remove("hide");
  modalContains.classList.add("show");

  blurContains.style.filter = "(5px)";
  productoEditarId = id;

  activarBotonEditar();
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

acceptDeleteBtn.addEventListener("click", () => {
  deleteData();
  blurContains.style.filter = "none";
  modalEliminarVenta.classList.add("hide");
  swal("Venta eliminada correctamente", "", "success");
});
const limpiarTabla = () => {
  table.innerHTML = "";
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
let getDateTime = document.querySelector("#fecha-nueva-venta");


const setMaxDate = () =>{
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = `${yyyy}-${mm}-${dd}`

let minimum = "2018-01-01";
getDateTime.max= today;
getDateTime.min= minimum;

}
setMaxDate()
// FUNCIÓN PARA GUARDAR LOS VALORES DE MIS INPUTS Y SELECT/OPTIONS
const saveData = () => {
  let componentes = getSelectComponentValues(selectComponentes);
  let fecha = new Date(getDateTime.value);
  console.log(fecha)
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
      sucursal: sucursal
    });
    
    limpiarTabla();
    render();
    cargarVentas(nuevoArrVentas);
    swal("Venta añdadida correctamete", "", "success");
  }
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
    swal("Venta editada correctamete", "", "success")
  }
};
const validateAllItems = (comp, fec, vend, suc) => {
  return comp.length == 0 || fec === "" || vend === "" || suc === "";
};

// FUNCIÓN PARA TRAER EL VALOR DE LOS SELECTS
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
    //mdal3.classList.add("hide")
  }
  return false;
});

const btnModalEdit = document.querySelector(".boton-editar-venta");
const closeMod = document.querySelector(".close3");

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
  if(e.target === modalPrincipal)
  modalContains.classList.add("hide");
  //blurContains.style.filter("none");
});
const deleteSale = document.querySelector('.containermodal-deleteSale')
window.addEventListener("click", (e) => {
  if(e.target === deleteSale)
  modalEliminarVenta.classList.add("hide");
  //blurContains.style.filter("none");
});
const btnClose2 = document.querySelector('.close2')
btnClose2.addEventListener('click', () =>{
  modalEliminarVenta.classList.add("hide");

})