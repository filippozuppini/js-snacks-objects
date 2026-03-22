// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciclette = [

    {
        nome: 'graziella',
        peso: 20,
    },
    {
        nome: 'luisa',
        peso: 40,
    },
    {
        nome: 'NT20LX',
        peso: 10,
    },
    {
        nome: 'AA127',
        peso: 100,
    },
    {
        nome: 'Super238',
        peso: 30,
    }    

]

// console.log(biciclette);

let mostLightBicycle = biciclette[0];


for (let i = 0; i < biciclette.length; i++) {
    
    // console.log(biciclette[i].peso);

    if (biciclette[i].peso < mostLightBicycle.peso) {
        mostLightBicycle = biciclette[i];
    } 
}

console.log(mostLightBicycle.nome);
