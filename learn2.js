/* Ccылочные типы данных:
    1. Объекты
    2. Массивы
    3. Функции
*/

const str1 = 'Kolya'; // Строка
const str2 = new String('Kolya'); // Объект

const arr = [1,2,3,4]
console.log(arr.join()); // Создание строки из массива
/*------------*/

/*Создание объектов*/

const obj = {}; // декларативное создание


class Animal { // Создание класса (Принято называть классы с большой буквы)
    
    nane = 'Animal';
    isLife = false;
    comeToLife = function () { // функции в классе принято называть методами
       this.isLife = true;
    }

    constructor(age1 = 1) { // Конструктор класса вызывается при создании объекта с помощью ключевого слова new (в конструктор можно передавать аргументы)
        this.age = age1; // С помощью конструктора можно динамически добавлять и изменять свойства класса
    }

    static fu = function () { //статические методы применяются ко всему классу целиком, а не к отдельным объектам
        console.log('fu');
    }

    sayName() { // Функция записанная в prototype класса
        console.log(this.nane);
    }
}

const animal = new Animal(5); // Создание объекта с помощью класса (при создании объекта можно использовать параметры которые будут использоваться в аргументах конструктора)
const animal1 = new Animal(6); /* При создании объектов из одного класса, методы класса при их вызове не будут равны, так как при создании объекта создаётся новая ячейка памяти,
    например: animal.comeToLife() != (Не равен) animal1.comeToLife();*/

animal.comeToLife(); //вызов метода


animal.sayName(); // Вызов метода (такой метод будет ссылаться на одну ячейку памяти, не зависимо от того в каком объекте он вызван)

console.log(animal.isLife);
console.log('Age - '+animal.age);
/*------------*/

/*Наследование - это создание класса на основании другого класса*/

class Dog extends Animal { // Наследование от класса Animal (в наследованном классе можно задавать новые свойства и переназначать старые)
    nane = 'Dog'; // Переназначение свойства
    color = 'Black'; // Назначение нового свойства

    constructor(age = 1) { // переназначение конструктора
        super(age = 15);
    }
}

const dog = new Dog();
console.log ('Age -' +dog.age);
/*------------*/

/*Конструкторы*/
const Animals = function () { // Создание функции в качестве конструктора (именуется с большой буквы)
    this.nane = 'Animals';
    this.isALife = false;
    this.comeToLifes = function () {
       this.isALife = true;
    }
}

Animals.fu = function () { // Статический метод
    console.log('fu');
}

Animals.prototype.sayName1 = function () { // Запись функции в прототип конструктора Animal
    console.log (this.nane);
}

const animals = new Animal(); // Создание нового объекта с помощью конструктора

const Dogs = function () {

};
Dogs.prototype = new Animals; // Наследование в прототип Dogs объекта Animals

const dogs = new Dogs();