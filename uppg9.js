

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    function sort(numbers) {
        for (const num of numbers) {
            const resultat = (num % 2 === 0) ? "jämt" : "udda";
            console.log(num + " " + resultat);
        }
    }

    sort([7, 12, 19, 24, 31, 44]);
  
}

module.exports = { uppg9 };
