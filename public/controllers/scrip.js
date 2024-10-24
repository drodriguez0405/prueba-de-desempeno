function calcularTotalPagar(totalCuenta, calidadServicio) {
    let propinaPorcentaje

    switch (calidadServicio) {
        case 'excelente':
            propinaPorcentaje = 0.20
            break
        case 'bueno':
            propinaPorcentaje = 0.15
            break
        case 'regular':
            propinaPorcentaje = 0.10
            break
        default:
            console.log("Elije una calidad de servicio de las anteriores mostradas.")
            return
    }
    const propina = totalCuenta * propinaPorcentaje

    const totalPagoConPropina = totalCuenta + propina

    let descuento = 0

    switch (true) {
        case (totalCuenta > 100000):
            descuento = totalPagoConPropina * 0.10
            break
        case (totalCuenta > 200000):
            descuento = totalPagoConPropina * 0.20
            break
    }

    const totalFinal = totalPagoConPropina - descuento
    return totalFinal

}

const totalCuenta = parseFloat(prompt("Ingresa el total de la cuenta:"));
const calidadServicio = prompt("Ingresa la calidad de servicio (excelente, bueno, regular):");

const totalPagar = calcularTotalPagar(totalCuenta, calidadServicio)
console.log("el total a pagar es: " + totalPagar)