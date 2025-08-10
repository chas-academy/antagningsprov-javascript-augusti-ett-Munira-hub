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
    sort([2, 5, 8, 13, 22, 27]);
}

module.exports = { uppg9 };
