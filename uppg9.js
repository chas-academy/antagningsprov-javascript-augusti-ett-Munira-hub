
function uppg9() {

    function sort(numbers) {
        for (const num of numbers) {
            if (num % 2 === 0) {
                console.log(num, "jämt");
            } else {
                console.log(num, "udda");
            }
        }
    }

    sort([7, 12, 19, 24, 31, 44]);
}

module.exports = { uppg9 };
