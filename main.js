//compute and print out the sum of the digits from 1 to 10
console.log("What is the sum of all digits from 1-10?");
console.log("\n");

let sum = 0;

for (let i = 0; i <=10; i++){
    sum += i;
}

console.log(`Sum of all digits are ` + sum);
console.log("\n");

//compute and print out the sum of the digits individually squared, from N1 to N2, which are inputs
console.log("The following inputs entered, from N1 to N2, will be summed and individually squared:");
console.log("\n");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstInput) => {
    rl.question('Enter the second number: ', (secondInput) => {
        const n1 = Number(firstInput);
        const n2 = Number(secondInput);

        if (isNaN(n1) || isNaN(n2)) {
            console.log("Please enter valid numbers.");
            rl.close();
            return;
        }

        let total = 0;

        for (let i = n1; i <= n2; i++) {
            total += i ** 2;
        }

        console.log(`Sum of numbers squared from ${n1} to ${n2} is ${total}`);
        rl.close();
    });
});
