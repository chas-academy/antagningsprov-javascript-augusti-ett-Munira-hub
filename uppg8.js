

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
  const persons = [
        { name: "Sara", age: 26 },
        { name: "Sharmake", age: 34 },
        { name: "Nurdain", age: 35 },
        { name: "Deka", age: 18 },
        { name: "Munira", age: 25 }
    ];

    function printNamesOver30(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].age > 30) {
                console.log(array[i].name);
            }
        }
    }

    printNamesOver30(persons);

}

module.exports = { uppg8 };
