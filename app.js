const vehiculos = [
{   
    id: 1,
    Marca: 'Peugeot',
    Modelo: '206',
    Puertas: '4',
    Precio: 200000.00
},
{
    id: 2,
    Marca: 'Honda',
    Modelo: 'Titan',
    Cilindrada: '125cc',
    Precio: 60000.00

},
{
    id: 3,
    Marca: 'Peugeot',
    Modelo: '208',
    Puertas: '5',
    Precio: 250000.00
},
{
    id: 4,
    Marca: 'Yamaha',
    Modelo: 'YBR',
    Cilindrada: '160cc',
    Precio: 80500.50

}
]

// TODOS LOS VEHÍCULOS
vehiculos.forEach(function(vehiculo){
      console.log('Marca:',vehiculo.Marca, '//',
              'Modelo:', vehiculo.Modelo, '//',
               vehiculo.Cilindrada === undefined 
               ? `Puertas: ${vehiculo.Puertas}`
               :  `Cilindrada: ${vehiculo.Cilindrada}`, '//',
               `Precio: $${vehiculo.Precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`);  
                
})
console.log('=============================');

// VEHÍCULO MÁS CARO
const maxValueOf = Math.max(...vehiculos.map(v => v.Precio), 0 );
const masCaro = vehiculos.find(v => v.Precio === maxValueOf)
console.log('Vehículo más caro:',masCaro.Marca, masCaro.Modelo);

// VEHÍCULO MÁS BRATO
const minValueOf = Math.min(...vehiculos.map(v => v.Precio), 9999999999 );
const masBarato = vehiculos.find(v => v.Precio === minValueOf)
console.log('Vehículo más barato:',masBarato.Marca, masBarato.Modelo);

// VEHÍCULO 'Y'
const vehiculoY = vehiculos.find(v => v.Modelo.includes('Y') )
console.log(
    `Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoY.Marca} ${vehiculoY.Modelo} $${vehiculoY.Precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
);
console.log('=============================');

// VEHÍCULOS ORDENADOS POR PRECIO

console.log('Vehículos ordenados por precio de mayor a menor:')
const ordenPrecio = vehiculos.sort((a,b) => parseFloat(b.Precio) - parseFloat(a.Precio));
ordenPrecio.forEach(function(orden){
    console.log(orden.Marca, orden.Modelo);
})

