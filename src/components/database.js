const cars = [{ id: '1', name: 'Hyundai Grand i10', rent: '350', book: false, color: 'white', seat: '4 seater', Vehicleno: '18 D 4356', type: 'Petrol Car', Engine: '1.2 Kappa Dual VTVT BS6 Petrol Engine', img: './img/HyundaiGrandi10.jpg' },
              { id: '2', name: 'Ford EcoSport', rent: '1350', book: false, color: 'Deep Blue', seat: '6 seater', Vehicleno: '10 C 7892', type: 'Diesel Car', Engine: ' Titanium 1.5L TDCi', img: './img/FordEcoSport.jpg' },
              { id: '3', name: 'Maruti Suzuki XL6', rent: '850', book: false, color: 'Glassy Black', seat: '6 seater', Vehicleno: '14 A 1982', type: 'Petrol Car', Engine: ' Alpha AT Petrol ', img: './img/MarutiSuzukiXL6.jpg' },
              { id: '4', name: 'Honda CR-V', rent: '450', book: false, color: 'Blue', seat: '4 seater', Vehicleno: '22 G 2386', type: 'Petrol Car', Engine: ' 2WD Petrol CVT  ', img: './img/HondaCR-V.jpg' }]

const details = [];

const getCar = (id) => cars.find((car) => car.id === id)
const getDetail = (id) => details.find((car) => car.id === id)
const book = ({ id, name, contact, issue, returndate }) => {
    var idx = cars.findIndex((car) => car.id === id)
    if(cars[idx].book){
        return 1
    }
    else{
    details.push({ id, name, contact, issue, returndate })
    cars[idx].book = true 
    return 0}
}
module.exports = {
    getCar, getDetail, book 
}