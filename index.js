let count = parseInt(prompt("Сколько чисел в ряду Фибоначчи вы хотите увидеть?"));

let fib = [0, 1];

for (let i = 2; i < count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib.join(", "));
