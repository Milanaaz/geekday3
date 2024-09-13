console.log("---------------Первое задание----------------");

function min(a, b) {
    if (a < b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

min(10, 5);
min(77, 45);




console.log("---------------Второе задание----------------");

function getStringLength() {
    let input = prompt("Введите строку:");
    console.log(input.length);
}
getStringLength();






console.log("---------------третье задание----------------");

function calculator(a, b, operation) {
    switch (operation) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            if (b !== 0) {
                console.log(a / b);
            } else {
                console.log("Деление на ноль невозможно!");
            }
            break;
        default:
            console.log("Неверная операция!");
    }
}

calculator(10, 2, '+');
calculator(10, 0, '/');
calculator(24, 75, '*');




