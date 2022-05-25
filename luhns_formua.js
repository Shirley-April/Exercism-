// Luhn algorithm
// given a string of numbers
// drop the check digit and payload to separate variables
// with the payload start from the right most digit moving left and double the value of every second digit
// from the above if a number is greater than 9 subtract 9
// sum the above result to a single value
// check digit = 10 - (sum mod10)


function checkLuhn(numberToValidate){
    const checkDigit = numberToValidate.slice(-1)
    const payload = numberToValidate.slice(0, -1)

    // const convertInput = numberToValidate.split("").map((element) => {
    //     return parseInt(element, 10)
    // })

   const filterEven = payload.split("").map(Number).filter((element, index) => {
        return (index % 2 === 0)
    })

    const filterOdd = payload.split("").map(Number).filter((element, index) => {
        return (index % 2 === 1)
    })

    const doubleSecondDigit = filterOdd.map((x) => {
        return x * 2
    })

    const mutlipliers = filterEven.map((element, index) => {
        return [element, doubleSecondDigit[index]]
    })
    

    const subtractNine = mutlipliers.flat().map((x) => {
        return (x > 9) ? x - 9 : x
    })

    const sumValues = subtractNine.reduce((a, v) => {
        return a + v
    }, 0)

    // return sumValues

    const calculateCheckDigit = 10 - (sumValues % 10)

    console.log(`Check Digit: ${checkDigit}`);
    console.log(`Computed CHeck Digit: ${calculateCheckDigit}`);

    return (calculateCheckDigit == checkDigit) ? "Valid Credit Card" : "Invalid Credit Card"

    //return (sumValues % 10 === 0) ? "Valid number": "Invalid credit card"
}

console.log(checkLuhn("091"));



