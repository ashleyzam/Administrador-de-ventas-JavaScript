
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
let nuevoArrVentas = [];
let selectSucursal = document.querySelector(".single-select");
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
  
  console.log(ventasPorSuc("Centro", local.ventas));
  console.log(ventasPorSuc("Caballito", local.ventas));
  
  
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
  console.log(ventasMes(1, 2019))
  
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
  console.log(ventasSucursal("Caballito"));
  console.log(ventasSucursal("Centro"));
  
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
  console.log(renderPorMes());
  
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
  console.log(renderPorSucursal())
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
  
  console.log(mejorVendedoraDelAño(2019))
  /*12) render(): Tiene que mostrar la unión de los dos reportes anteriores,
  cual fue el producto más vendido y la vendedora que más ingresos generó*/