// const companies = ["Apple", "Google", "Facebook"];

// companies.forEach(company => {
//     console.log(`Hey, ${company}!`);
// });

// const names = ["Whinds", "Freeway", "Teste", "Maria"];

// names.forEach((name) => {
//     console.log(`Hi, ${name}!`);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);

// numbers.forEach((number, index) => {
//     if (number % 2 == 0) {
//         console.log(`O número "${number}", está na posição "${index}" do array.`);
//     }
// });

// const cars = [
//     {
//         marca: "Ford",
//         modelo: "Focus",
//     },
//     {
//         marca: "BMW",
//         modelo: "BMW Z4",
//     },
//     {
//         marca: "Fiat",
//         modelo: "Palio",
//     },
//     {
//         marca: "Audi",
//         modelo: "A3",
//     },
// ];

// cars.forEach((car) => {
//     console.log(`Marca: ${car.marca}
//     Modelo: ${car.modelo}`);
// });

class Cars {
    constructor(typeBrand, typeModel) {
       this.typeBrand = typeBrand;
       this.typeModel = typeModel;
    }
}

    class CarsList {
        constructor() {
            this.cars = [];
    }

    addCar(param) {
        this.cars.push(param);
    }
}

const carsList = new CarsList();

function createCar() {
    const typeBrand = document.getElementById("typeBrand").value;
    const typeModel = document.getElementById("typeModel").value;

    const car = new Cars(typeBrand, typeModel);

    carsList.addCar(car);

    document.getElementById("typeBrand").value = "";
    document.getElementById("typeModel").value = "";

    carsList.cars.forEach((car) => {
        console.log(`Marca: ${car.typeBrand} - Modelo: ${car.typeModel}`);
    });
}