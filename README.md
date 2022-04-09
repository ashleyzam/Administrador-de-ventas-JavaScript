# Parte 1

`
precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes,
que es la suma de los precios de cada componente incluido.
`

`
cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido,
o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro,
se asume que está identificada por la variable ventas
`

`
vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que
más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. 
El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde
el 1 (enero) hasta el 12 (diciembre).
`

`
ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
`

`
ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
`

`
componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente.
El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
`

`
huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. 
El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
`

# Parte 2

`
Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
`

`
Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma
funcionalidad pero trabajando con una propiedad distinta. Entonces,
¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
`

`
Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve
el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas.
El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero)
hasta el 12 (diciembre).
`
# Parte 3


`
renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
`

`
renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
`

`
render(): Tiene que mostrar la unión de los dos reportes anteriores,
cual fue el producto más vendido y la vendedora que más ingresos generó
`
`
Reporte
Ventas por mes:
  Total de enero 2019: 1250
  Total de febrero 2019: 4210
Ventas por sucursal:
  Total de Centro: 4195
  Total de Caballito: 1265
Producto estrella: Monitor GPRS 3000
Vendedora que más ingresos generó: Grace
`
