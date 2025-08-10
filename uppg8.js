

function uppg8(){

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
