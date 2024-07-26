const cars= [];



const carForm= document.getElementById('carForm');
const brandInput= document.getElementById('brandInput');
const modelInput= document.getElementById('modelInput');
const carsAvailableList= document.getElementById('carsAvailableList');
const searchInput= document.getElementById('searchInput');



carForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const brand = brandInput.value;
    const model = modelInput.value;
    cars.push({
        'brand': brand,
        'model': model,
    });
    const carItem= document.createElement('li');
    const buyButton= document.createElement('button');
    carItem.textContent= brand+ ' ' + model;
    buyButton.textContent= 'Acquista';
    carsAvailableList.appendChild(carItem);
    carItem.appendChild(buyButton);
    brandInput.value= '';
    modelInput.value= '';
    buyButton.addEventListener('click',(event) => {
        event.preventDefault();
        buyButton.parentElement.remove(carItem);
    })
})



searchInput.addEventListener('input',() => {
    const brandSearched= searchInput.value;
    while(carsAvailableList.hasChildNodes()) {
        carsAvailableList.removeChild(carsAvailableList.firstChild);
    }
    const carsFiltrate= cars.filter(function(car) {
        return car.brand.includes(brandSearched);
    });

    carsFiltrate.forEach((car)=> {
        const carItem= document.createElement('li');
        carItem.textContent= `${car.brand} ${car.model}`;
        carsAvailableList.appendChild(carItem);
    })

})




