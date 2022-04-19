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
  
    const cantidadVentas = (sucursal, arrVentas) => {
      let totalVentas = 0;
      arrVentas.filter((venta) => {
        venta.sucursal === sucursal
          ? (totalVentas += precioMaquina(venta.componentes))
          : false;
      });
      return totalVentas;
    };
      