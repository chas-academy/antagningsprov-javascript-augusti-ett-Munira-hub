
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    var tal1 = 10
    var tal2 = 5;

    if (tal1 > tal2) {
        console.log("Det första talet är större än det andra");
            } else if (tal1 < tal2) {
          console.log("Det andra talet är större än det första");
    } else {
console.log("Talen är lika stora");
}
}  
module.exports = { uppg5 };
