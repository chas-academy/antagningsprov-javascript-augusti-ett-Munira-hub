

function uppg9 (){
  
    function sort(numbers) {
        for (const num of numbers) {
            const resultat = (num % 2 === 0) ? "jämt" : "udda";
            console.log(num + " " + resultat);
        }
    }

    sort([7, 12, 19, 24, 31, 44]);
  
}

module.exports = { uppg9 };
