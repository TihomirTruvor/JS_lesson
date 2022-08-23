function learn() {
    if (true) {
        var x = 'test';
    }
    console.log (x);
}
learn();

/* Деструктуризация массива */
function destructurization() {
    const colorList = ['red', 'green', 'blue'];
    const [c1, c2] = colorList; // деструктуризация - присваивание значений переменных из массива

    console.log (c2);
}
destructurization();

function destructurization1() {
    const colorList = ['red', 'green', 'blue'];
    const [c1, ...arr] = colorList; // первой переменной присвоится значение 'red' переменной arr присвоится остаток массива [ 'green', 'blue' ]

    console.log (arr);
}
destructurization1();

function test1(...args) { // передали в массив несколько аргументов
    console.log (args);
}
test1 (1,2,3);

function test2(...args) { // передали в переменную и массив аргументы
    const [x, ...other] = args
    console.log (x, other);
}
test2 (4,5,6);
/*------------------*/

/* Деструктуризация объекта */
function destructurization2() {
    const user = {
        id: 1,
        name: 'John',
        age: 20,
        address: 'Moscow'
    };
    const {name, age, ...rest} = user; // деструктуризация - присваивание значений переменных из объекта (обязательно указываются свойства из объекта)

    console.log (name);
    console.log (age);
    console.log (rest);
    
}
destructurization2();

function destructurization3() {
    const user = {
        id: 1,
        name: 'John',
        age: 20,
        address: 'Moscow'
    };
    const {name: innerName, age: innerAge, ...rest} = user; // можно задать другое имя свойству объекта

    console.log (innerName);
    console.log (innerAge);
    console.log (rest);
    
}
destructurization3();

function destructurization_4({name, age, ...rest}) { // деструктуризацию объекта можно проводить сразу, передав в функцию свойства из вызова функции
    console.log (name);
    console.log (age);
    console.log (rest);
    
}
destructurization_4({
    id: 2,
    name: 'Johna',
    age: 25,
    address: 'Moscow'
});

function destructurization_5() {
    const user = {
        id: 3,
        name: 'John',
        data: {
            login: 'John_1991',
            password: 'qwerty'
        }
    };
    const {name, data:{login}, ...other} = user; // деструктурировать можно и объект находящийся внутри другого объекта

    console.log (name);
    console.log (login);
    console.log (other);     
}
destructurization_5();
/*------------------*/

/* Спред операторы - позволяют объединять объекты в один */
function spreadExample_1() {
    const user = {
        age: 24,
        name: 'John',
    };

    const data =  {
        address: 'Moscow',
        type: 'user'
    };

    const item = {  // объединение нескольких объектов в 1
        id: 5,
        ...user,  
        ...data
    }

    console.log(item);
}
spreadExample_1()

function spreadExample_2() {
    let x = 10;
    const user = {
        age: 24,
        name: 'John',
    };

    const data =  {
        address: 'Moscow',
        type: 'user'
    };

    const item = { 
        x,          // передаём в новый объект значение переменной х
        id: 5,
        ...user,  
        ...data
    }

    console.log(item);
}
spreadExample_2()

function spreadExample_3() {
    const color_1 = ['red', 'green'];
    const color_2 = ['blue', 'black'];


    const colors = [...color_1, ...color_2, 'white'] // объединение массивов

    console.log(colors);
}
spreadExample_3()
/*------------------*/

/* Шаблонные строки */
function stringLiteral() {
    let x = 'Hello';
    let y = 'world';

    let text = `${x} ${y}!`; // Объединение нескольких переменных в одной строке

    console.log(text);
}

stringLiteral();
/*------------------*/

/* Стрелочные функции */

function fu (x,y) {  // не стрелочная запись функции
    return x + y;
}

const fu_2 = function (x,y) { // не стрелочная запись функции
    return x + y;
}

const fu_3 = (x,y) => { // стрелочная функция
    console.log(x+y);
}
fu_3(3,5);
/*------------------*/

/* Дефолтные аргументы  - значение аргументов по умолчанию если в аргумент передано undefined */

function defArgs(name = 'DefaultName', age = 20, address = 'Moscow') { // запись аргументов по умолчанию
    console.log ({
        name,
        age,
        address
    })
}
defArgs('John', undefined); // передаём в функцию параментры (в том числе пустые)