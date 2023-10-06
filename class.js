
// class Person{
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//     }
// }
// const P1 = new Person('Ram', 22);
// console.log(Person);

// class Car{
    // constructor(name, colour, speed,price){
        // this.colour = colour;
        // this.name = name;
        // this.speed = speed;
        // this.price = price;
    // }
// }
// const C1 = new Car('Thar','Black',150,'20 lakh');
// console.log(C1);

// class Car{
//     constructor(name, colour,price){
//         this.colour = colour;
//         this.name = name;
//         this.price = price;
//     }

//     //getter
//     get getname(){
//         return this.name
//     }

//     //setter
//     set setprice(newprice){
//         this.price = newprice;
//     }
// }

// class RacingCar extends Car{
//     constructor(name,color,price,maxspeed){
//         super(name,color,price);
//         this.maxspeed=maxspeed;
//     }
// }

// const c1 = new Car('BMW', 'Black',9999999);
// const c2 = new RacingCar('Ferrari','Navy Blue',1000000,400);
// console.log(c2);
// c1.setprice="1000000"
// console.log(c1)
// let collage ={
    // name : "Saitm",
    // city : "Delhi"
// }

// let {name,city} = collage;

// console.log(name,city);

let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let arr3=[...arr1,...arr2];
console.log(arr3);