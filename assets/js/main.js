'use strict';

// let n = +prompt('Зп','salary');
// let user = {
//     name: 'Katya',
//     'pets name': 'Ars',
//     [n]: 50000
// };

// user.age =50;
// user.name = 'Ruslan';
// console.log(user.salary);

// console.log('name' in user); //проверяет есть ли объект, true || false
// console.log(user);
// console.log(user.name);
// delete user.name
// console.log(user);

// console.log(user['pets name']);

// for(let key in user) {
//     console.log(key,user[key]); //выводит ключ и значение
// }


// КОПИРОВАНИЕ

// let a = 7;
// let b = a;

// let user = {name: 'Katya'}
// let user2 = {};
// for(let key in user) {  //переписывает объект, который остается неизменяемым
//     user2[key] = user[key]
// }
// user.age = 20;
// console.log(user);


// let user = {name: 'Katya'}
// let user2 = {};
// Object.assign(user2,user)
// user.age = 20;
// console.log(user2);


// let user = {name: 'Katya'}
// let user2 = {};
// Object.assign(user2,user)
// let user3 = Object.assign({}, user) //объект, в который клонируют другой объект
// user.age = 20;
// user2.age = 500;
// console.log(user3);


// СТРОКИ
// let str = 'Hello';
// console.log(str.length);
// console.log(str[0]);
// console.log(str.at(-2));


// for(let letter of str) {  //перебирает всю строку
//     console.log(letter)
// }

// console.log(str.toUpperCase())  //все заглавные буквы
// console.log(str[0].toLocaleLowerCase())  //возвращает одну букву маленькую

// let str = 'Hello';
// console.log(str.indexOf('gjg')) //-1 , какой элемент указывает
// console.log(str.includes('H')) //возвращает true или false

// let str2 = str.slice(1, 4); //вырезает строку с 0 элемента по 2 , обязательно 2 значения  указать  ПОДДЕРЖИВАЕТ ОТРИЦ ЗНАЧЕНИЯ, но при этом  1 значение меньше , чем второе
// console.log(str2)
// let str3 = str.substring(4, 1);  //нельзя отриц значения , второе значение меньше , чем первое
// console.log(str2, str3)

// let str4 = str.substr(1,2) //сколько символов нужно знать, а не с какого
// console.log(str4)


// МАССИВЫ

// let arr = [1,2,3, 'cat', {name: 'Katya'}, function(){alert('Hi')}];
// // console.log(arr[5])
// // console.log(arr.at(-2))
// arr[0] = 'lol';
// console.log(arr.length)



// push        //добавляет в конец
// shift      // удаляет из начала
// pop        //удаляет из конца 
// unshift    // добавляет в начало


// arr.push(1999)  
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift('cat')
// console.log(arr)
// arr.shift()
// console.log(arr)

// for(let i=0; i<arr.length;i++) {
//     console.log(arr[i])
// }

// for(let elem of arr) {
//     console.log(elem)
// }


// for of строки и массивы || объекты через for in



// let arr = ['apple', 'cucumber', 'water', 'milk']; 
// delete arr[1] //cucumber превращает в empty, оставляя длину массива той же 
// arr.splice(1,1) // удаляет эл-т впринципе, меняя длину массива (с какого эл-та, сколько эл-тов удалить) 
// console.log(arr) 
// arr.splice(1,1, 'carrot', 'seees', 'skdfk') // удаляет заменяя  
// console.log(arr) 

// let arr2 = arr.slice(0,2) //оставит apple, cucumber 
// let arr3 = arr.concat(arr2, [23, 374283], 'skjhfks') 
// console.log(arr2) 
// console.log(arr3)

// ()=>{}
// arr.forEach((item,index,arr)=>{
//     alert(`У ${item} index:${index}, в массиве: ${arr}`)
// })

// arr.forEach((item,index)=>{
//     alert(`У ${item} index:${index}`)
// })

//только index взять не получится, остальные можно!



// let arr2 = ['apple', 'cucumber', 'water', 'milk']; 
// console.log(arr2.indexOf('water'))  //если есть возвращает индекс , если нет, то пишет -1
// console.log(arr2.includes('water'))  //true

// let users = [
//     {id:1, name: 'Aboba'},
//     {id:2, name: 'Semen'},
//     {id:3, name: 'Daster'},
// ];
// let user = users.find(item=> item.id==2) //один item один объект

// let usersNew = users.filter(item=> item.id>1)
// console.log(usersNew)


// let arr = ['apple', 'cucumber', 'water', 'milk'];  
// let lengths = arr.map(item => item.length)  //вывод длину каждого элемента
// console.log(lengths)


// let nums = [167,5,15]
// console.log(nums.sort((a,b) => a-b))  //сравнивает как строки. т.е. цифры , принимает значения a и b, правильный порядок только при разности работает

// console.log(nums.reverse())  //выстраивает в обратном порядке


//SPLIT //разделить строку на массив
// JOIN  //делает из массива строку
// let names = 'Katya, Polina, Raniya'
// let arr = names.split(', ')
// console.log(arr)

// let str = arr.join(', ')
// console.log(str)



// REDUCE  ПЕРЕБИРАЕТ ВСЕ ЭЛЕМЕНТЫ МАССИВА И ЧТО-ТО С НИМИ ДЕЛАЕТ(НАПРИМЕР, СКЛАДЫВАЕТ)
// let arr = [1,2,3,4,5]
// let result = arr.reduce((sum, item) => sum + item, 0)
// console.log(result)






//1 ЗАДАНИЕ
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = Object.values(salaries).reduce((sum, item) => sum + item, 0)
alert(sum);


//2 ЗАДАНИЕ
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2; 
        }
    }
}
multiplyNumeric(menu);
console.log(menu);


//3 ЗАДАНИЕ
let calculator = {
    read() {
        this.a = +prompt("Введите первое число:", 0); 
        this.b = +prompt("Введите второе число:", 0); 
    },


    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};
calculator.read(); 
alert(calculator.sum()); 
alert(calculator.mul()); 


//4 ЗАДАНИЕ
function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));  


//5 ЗАДАНИЕ
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(user => user.name);
console.log(names); 


//6 ЗАДАНИЕЕ
let vanya = { name: "Вася", age: 25 };
let marina = { name: "Петя", age: 30 };
let oleg = { name: "Маша", age: 8 };
let usersAge = [vanya, marina, oleg];
function getAverageAge(users) {
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / usersAge.length;
}
console.log(getAverageAge(usersAge));