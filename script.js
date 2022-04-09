const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { id: 0,
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    { id: 1,
      fecha: new Date(2019, 0, 1),
      nombreVendedora: "Ada",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Centro",
    },
    { id: 2,
      fecha: new Date(2019, 0, 2),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "Motherboard MZI"],
      sucursal: "Centro",
    },
    { id: 3,
      fecha: new Date(2019, 0, 10),
      nombreVendedora: "Ada",
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    { id: 4,
      fecha: new Date(2019, 0, 12),
      nombreVendedora: "Grace",
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
      sucursal: "Centro",
    },
    { id: 5,
      fecha: new Date(2019, 1, 24),
      nombreVendedora: "Sheryl",
      componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"],
      sucursal: "Caballito",
    },
    { id: 6,
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Monitor GPRS 3000", "HDD Toyiva"],
      sucursal: "Centro",
    },
    { id: 7,
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Ada",
      componentes: ["Motherboard MZI", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    { id: 8,
      fecha: new Date(2019, 1, 11),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "RAM Quinston"],
      sucursal: "Caballito",
    },
    { id: 9,
      fecha: new Date(2019, 1, 15),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    { id: 10,
      fecha: new Date(2019, 1, 12),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1500", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    { id: 11,
      fecha: new Date(2019, 1, 21),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "RAM Quinston"],
      sucursal: "Centro",
    },
    { id: 12,
      fecha: new Date(2019, 1, 8),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    { id: 13,
      fecha: new Date(2019, 1, 16),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"],
      sucursal: "Centro",
    },
    { id: 14,
      fecha: new Date(2019, 1, 27),
      nombreVendedora: "Hedy",
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"],
      sucursal: "Caballito",
    },
    { id: 15,
      fecha: new Date(2019, 1, 22),
      nombreVendedora: "Grace",
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    { id: 16,
      fecha: new Date(2019, 1, 5),
      nombreVendedora: "Ada",
      componentes: ["Motherboard ASUS 1500", "RAM Quinston"],
      sucursal: "Centro",
    },
    { id: 17,
      fecha: new Date(2019, 1, 1),
      nombreVendedora: "Grace",
      componentes: ["Motherboard MZI", "HDD Wezter Dishital"],
      sucursal: "Centro",
    },
    { id: 18,
      fecha: new Date(2019, 1, 7),
      nombreVendedora: "Sheryl",
      componentes: ["Monitor GPRS 3000", "RAM Quinston"],
      sucursal: "Caballito",
    },
    { id: 19,
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

const acceptDeleteBtn = document.querySelector("#btn-accept-deletion");
const open = document.querySelector(".btn");
const modalContains = document.querySelector(".modal-container");
const modalPrincipal = document.querySelector(".containermodal-newSale");
const close = document.querySelector(".close");
const modalChange = document.querySelector(".modal");
const selectOption = document.querySelector(".select-option");
const btnSave = document.querySelector("#btn-save");
const table = document.querySelector(".col1"); //.getElementsByTagName('tbody')[0]
const secondTable = document.querySelector(".table2");
const sucCentro = document.querySelector("#centro");
const sucCaballito = document.querySelector("#caballito");
const modalEliminarVenta = document.querySelector(".modal-eliminar-venta");
const blurContains = document.querySelector("#blur-container");
const selectComponentes = document.querySelector(".select-componentes");
let productoEliminarId = 0;
//let productoEditarId = 0;
let nuevoArrVentas = [];
const selectSucursal = document.querySelector(".single-select");
// 1 ) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes,
//que es la suma de los precios de cada componente incluido.

const precioComponentes = (componente) => {
    const { precios } = local;
    for (const precio of precios) {
      if (precio.componente === componente) {
        return precio.precio;
      }
    }
  };
  //console.log(precioComponentes("Monitor GPRS 3000"));
  
  const precioMaquina = (componentes) => {
    let acc = 0;
    for (const componente of componentes) {
      acc += precioComponentes(componente);
    }
    return acc;
  };
  //console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));
  
  /* 2) cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido,
  o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro,
  se asume que está identificada por la variable ventas
  `*/
  
  const cantidadVentasComponente = (componente) => {
    let acumulator = 0;
    const { ventas } = local;
    for (const venta of ventas) {
      // console.log(venta);
      if (venta.componentes.includes(componente)) {
        acumulator++;
      }
    }
    return acumulator;
  };
  //console.log(cantidadVentasComponente("Monitor ASC 543")); //2
  
  /* 3 ) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que
  más vendió en plata en el mes. O sea no cantidad de ventas, sino importe 
  total de las ventas. 
  El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde
  el 1 (enero) hasta el 12 (diciembre).*/
  
  //func aux que retorna un nuevo array de ventas por suc.-
  const ventasPorSuc = (nombreSucursal, ventas) =>
    ventas.filter(({ sucursal }) => sucursal === nombreSucursal);
  
  //console.log(ventasPorSuc("Centro", local.ventas));
  //console.log(ventasPorSuc("Caballito", local.ventas));
  
  
  const ventasPorVendedora = (nombre, ventas) =>
    ventas.filter(({ nombreVendedora }) => nombreVendedora === nombre);
  
  const ventasPorFecha = (mes, anio, ventas) =>
    ventas.filter(
      ({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio
    );
  const ventasPorAño = (anio, ventas) =>{
   return  ventas.filter(({fecha})=>{
     return fecha.getFullYear() === anio
    })
  }
  
  const totalVendido = (ventas) => {
  
    let acc = 0;
    for (const { componentes } of ventas) {
      acc += precioMaquina(componentes);
    }
    return acc;
  };
  //console.log(totalVendido(local.ventas))
  
  const funcAux = (mes, anio, vend) => {
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
  const montoVentasPorVendedora = (vend,arrVentas) => {
    let acc = 0;
    for (const { nombreVendedora, componentes } of arrVentas) {
      if (
        nombreVendedora === vend 
      ) {
        acc += precioMaquina(componentes);
      }
    }
    return acc;
  };
  
  
  
  //console.log("mes 0", funcAux(1, 2019,"Grace"));
  
  const vendedoraDelMes = (mes, anio) => {
    const { vendedoras } = local;
    const ventasPorVendedora = vendedoras.map((vendedora) => {
      return {
        vendedora,
        ventaTotal: funcAux(mes, anio, vendedora),
      };
    });
    // console.log(ventasPorVendedora)
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
  
  //console.log("mes 0: ", ventasPorMes(1, 2019))
  
  // 4 ) ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
  const ventasMes = (mes, anio) => {
    const { ventas } = local;
    return totalVendido(ventasPorFecha(mes, anio, ventas));
  };
  //console.log(ventasMes(1, 2019))
  
  /*  5 ) ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha  */
  
  const ventasVendedora = (nombre) => {
    const { ventas } = local;
    return totalVendido(ventasPorVendedora(nombre, ventas));
  };
  //console.log(ventasVendedora('Grace'))
  
  // 6 ) componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
  
  const componenteMasVendido = () => {
    let mayorCantidad = 0;
    let componenteEstrella = "";
    const { precios } = local;
    for (const precio of precios) {
      const cantidad = cantidadVentasComponente(precio.componente);
      if (mayorCantidad < cantidad) {
        mayorCantidad = cantidad;
        componenteEstrella = precio.componente;
      }
    }
    return componenteEstrella;
  };
  
  //console.log(componenteMasVendido()); // Monitor GPRS 3000
  
  // 7 ) huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
  const huboVentas = (mes, anio) => {
    const { ventas } = local;
    return ventas.some(
      ({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio
    );
  };
  //console.log(huboVentas(2, 2019)); // false
  
  // 8 ) Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
  /*Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma
  funcionalidad pero trabajando con una propiedad distinta. Entonces,
  ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
  `*/
  const ventasSucursal = (sucursal) => {
    const { ventas } = local;
    return totalVendido(ventasPorSuc(sucursal, ventas));
  };
  //console.log(ventasSucursal("Caballito"));
  //console.log(ventasSucursal("Centro"));
  
  /* 9 ) Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve
  el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas.
  El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero)
  hasta el 12 (diciembre).
  `*/
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
    //console.log(ventasPorSucursalMensual);
  
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
  
  //console.log(sucursalDelMes(9, 2019)); // "Centro"
  
  /* 10 ) renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año*/
  let format = (date, locale, options) =>
    new Intl.DateTimeFormat(locale, options).format(date);
  
  const renderPorMes = () => {
    const nuevasFechas = [];
    const { ventas } = local;
    for (const venta of ventas) {
      const fechas = venta.fecha.getMonth();
      !nuevasFechas.includes(fechas) && nuevasFechas.push(fechas);
    }
    nuevasFechas.sort((a, b) => { return a - b })
  
   const ventasMes = nuevasFechas.map(element => {
      return {
        fecha: element,
        total: ventasPorMes(element +1, 2019)
      }
    }); 
    return ventasMes
  };
  //console.log(renderPorMes());
  
  // 11 ) renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
  
  const renderPorSucursal = () =>{
  const {ventas, sucursales} = local
    
  const totalVent = sucursales.map(sucursal =>{
   
    return {
      sucursalVenta: sucursal,
      importe: totalVendido(ventasPorSuc(sucursal, ventas))
    } 
  })
  return totalVent
  
  } 
 //console.log(renderPorSucursal())
  //
  const mejorVendedoraDelAño = (anio) =>  {
    const {ventas} = local
    const ventasAnio = ventasPorAño(anio, ventas)
    let nombre = ""
    for (const venta of ventasAnio) {
        for (const venta1 of ventasAnio) {
          const precioVenta = montoVentasPorVendedora(venta.nombreVendedora,ventasAnio);
          const precioVenta1 = montoVentasPorVendedora(venta1.nombreVendedora,ventasAnio);
          if(precioVenta > precioVenta1){
            nombre = venta.nombreVendedora
          }
        }
    }
    return nombre;
  };
  
  //console.log(mejorVendedoraDelAño(2019))
  /*12) render(): Tiene que mostrar la unión de los dos reportes anteriores,
  cual fue el producto más vendido y la vendedora que más ingresos generó*/




open.addEventListener("click", (e) => {
  e.preventDefault();
  modalContains.classList.remove("hide");
  modalContains.classList.add("show");
  blurContains.style.filter = "blur(5px)";
  //cargarVendedoras()
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  modalContains.classList.remove("show");
  modalContains.classList.add("hide");
  blurContains.style.filter = "none";

});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape" || e.key === "Scape") {
    modalContains.classList.add("hide");
    modalEliminarVenta.classList.add("hide");
    //mdal3.classList.add("hide")
    blurContains.style.filter = "none";
  }
  return false;
});


let cargarVentas = (arrVentas) => {
  //console.log(table)
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

  //const {ventas} = local
    for (const venta of arrVentas)  {
        //console.log(venta)
    let it = `<tr class="uno" id = "fila">
                <td class= "eliminar-venta">${format(venta.fecha,"es")}</td>
                <td class"eliminar-venta">${venta.nombreVendedora}</td>
                <td class="tede eliminar-venta">${venta.sucursal}</td>
                <td class="tede eliminar-venta">${venta.componentes}</td>
                <td class="tede eliminar-venta">${precioMaquina(venta.componentes)}</td>
                <td><i class="far fa-edit boton-editar-venta open" id="editar-btn" aria-hidden="true" onclick="funcEdit(${venta.id})"></i>
                <i class="far fa-trash-alt btn-eliminar-venta" onclick="funcDelete(${venta.id})"></i></td>
             </tr>`;
    let newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = it;
  }
};
nuevoArrVentas = local.ventas
cargarVentas(nuevoArrVentas);



//const mdal3 = document.querySelector('.modal-container3')
const btnModalEdit = document.querySelector('.boton-editar-venta')
const closeMod = document.querySelector('.close3')

/*closeMod.addEventListener('click', () =>{
  modalContains.classList.remove("show")
  modalContains.classList.add("hide")
})*/
const btnEdit2 = document.querySelector('#btn-edit')
btnModalEdit.addEventListener('click',(e)=>{
  e.preventDefault()
  modalContains.classList.remove("hide");
  modalContains.classList.add('show')
  btnEdit2.classList.remove('hide')
  btnEdit2.classList.add('show')
  btnSave.classList.add('hide')

})

let productoEditarId = 0
const funcEdit = (id) => {
  modalContains.classList.remove("hide");
  modalContains.classList.add("show");
  blurContains.style.filter = "(5px)";
  productoEditarId = id;
};/*
acceptDeleteBtn.addEventListener("click",() => {

});*/

const funcDelete = (id) => {
  modalEliminarVenta.classList.remove("hide");
  modalEliminarVenta.classList.add("show");
  blurContains.style.filter = "(5px)";
  productoEliminarId = id;
};
acceptDeleteBtn.addEventListener("click",() => {
  if(nuevoArrVentas.length == 0){
    nuevoArrVentas = local.ventas.filter(({id}) => id != productoEliminarId)
    }else{
      nuevoArrVentas = nuevoArrVentas.filter(({id}) => id != productoEliminarId)
    }
  blurContains.style.filter = "none";
  modalEliminarVenta.classList.add("hide");

  limpiarTabla();
  //console.log(nuevoArrVentas)
  cargarVentas(nuevoArrVentas);
});
const limpiarTabla = () => {
  table.innerHTML = "";
  // console.log(table)
  //cargarVentas()
};
const cargarComponentes = () => {
  const {precios} = local
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
  const {vendedoras} = local
  for (const vendedora of vendedoras) {
    const listaVendedoras = document.createElement("option");
    listaVendedoras.classList.add("seleccion-de-vendedoras");
    //listaVendedoras.setAttribute('value',`${vendedoras[i]}`)
    //listaVendedoras.setAttribute('id',`${vendedoras[i]}`)
    listaVendedoras.innerHTML = `${vendedora}`;
    selectOption.appendChild(listaVendedoras);
  }
};
cargarVendedoras()

let cargarSucursal = () => {
  //for(let i = 0; i < ventas.length; i++){
  const listaSucursal = document.createElement("option");
  const listaSucursal1 = document.createElement("option");
  listaSucursal.innerHTML = "Caballito";
  listaSucursal1.innerHTML = "Centro";
  selectSucursal.appendChild(listaSucursal);
  selectSucursal.appendChild(listaSucursal1);
};

cargarSucursal();




// FUNCIÓN PARA GUARDAR LOS VALORES DE MIS INPUTS Y SELECT/OPTIONS
let saveData = () => {
  //const {ventas} = local
  let getDateTime = document.querySelector("#fecha-nueva-venta").value;
  let componentes = getSelectComponentValues(selectComponentes);
  let fecha = new Date(getDateTime);
  let vendedora = selectOption.value;
  let sucursal = selectSucursal.value;
  if (validateAllItems(componentes, fecha, vendedora, sucursal)) {
    alert("Porfavor, complete todos los campos");
  } else {
    nuevoArrVentas.push({
      id: nuevoArrVentas.length +1 ,
      fecha: fecha,
      nombreVendedora: vendedora,
      componentes: componentes,
      sucursal: sucursal
      
      });
    
    //console.log(nuevoArrVentas)
    limpiarTabla();
    cargarVentas(nuevoArrVentas);
  }
};
const changeData = () => {
  //const {ventas} = local
  let getDateTime = document.querySelector("#fecha-nueva-venta").value;
  const {id} = nuevoArrVentas
  let componentes = getSelectComponentValues(selectComponentes);
  let fecha = new Date(getDateTime);
  let vendedora = selectOption.value;
  let sucursal = selectSucursal.value;
  if (validateAllItems(componentes, fecha, vendedora, sucursal)) {
    alert("Porfavor, complete todos los campos");
  } else {
    /*nuevoArrVentas.splice(id,1,{
      id:productoEditarId ,
      fecha: fecha,
      nombreVendedora: vendedora,
      componentes: componentes,
      sucursal: sucursal
      
      });*/

      nuevoArrVentas.forEach(e => {
        if(e.id === productoEditarId){
          e.fecha = fecha
          e.nombreVendedora = vendedora
          e.sucursal=sucursal
          e.componentes = componentes
        }
        
      })
    
      //console.log(nuevoArrVentas)
      limpiarTabla();
      cargarVentas(nuevoArrVentas);
  }
};
const validateAllItems = (comp, fec, vend, suc) => {
  return comp.length == 0 || fec == "" || vend == "" || suc == "";
};
// EVENTO PARA GUARDAR DATOS
btnEdit2.addEventListener("click", () => {
  changeData();
  modalContains.classList.add("hide");
  blurContains.style.filter = "none";
});
btnSave.addEventListener("click", () => {
  saveData();
  modalContains.classList.add("hide");
  blurContains.style.filter = "none";
});
// FUNCIÓN PARA TRAER EL VALOR DE LOS SELECTS
let getSelectComponentValues = (select) => {
  let result = [];
  let options = select && select.options;
  let opt;

  for (let i = 0; i < options.length; i++) {
    opt = options[i];
    opt.selected ? result.push(opt.value) : false;
  }
  return result;
};

const esAguaConsumible = (ph, cloro) =>{
  
return ph >= 6.7 &&  ph<= 9.5 && cloro === 0.6 || ph > 8 && ph <= 5 &&  cloro !=6 
}
console.log(esAguaConsumible(8, 0.6))
console.log(esAguaConsumible(6, 0.6))
console.log(esAguaConsumible(8, 1.2))
