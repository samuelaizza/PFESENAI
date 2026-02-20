function calculatePi(iterations) {
    let pi = 0;
    for (let i = 0; i < iterations; i++) {
        pi += (4 * ((i % 2 === 0 ? 1 : -1) / (2 * i + 1)));
    }
    return pi;
}

const iterations = 1000000; // You can adjust the number of iterations for more precision
console.log(calculatePi(iterations));