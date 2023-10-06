// console.log('Hello');

// console.log(this);

// this in function

// function fun(){
//     return this;
// }


// console.log(fun());

fun=()=>{
        return this;
}

console.log(fun());

let obj={
    //key :value,
    name: 'Alfia',
    id:229113,
    fun:()=>{
        return `${this.name} ${this.id}`;
    }
}
// console.log(obj.fun());
// console.log(obj.id);


const Person1={
    name:'Alfia',
    surname: 'Naaz',
    sayname:function(city, country){
        return `${this.name} ${this.surname} ${city} ${country}`
    }
}

const Person2={
         name: 'Ammi',
         surname: 'Jaan'
}
// console.log(Person1.sayname.call(Person2, 'Dubai','India'));
// console.log(Person1.sayname.apply(Person2,['Delhi','India']));
// const p2=Person1.sayname.bind(Person2,'Banglore','India');
// console.log(p2());




function student(name,age,rollno){
    this.name=name;
    this.age=age;
    this.rollno=rollno;
}

let s2=new student('Rahul',19,2290);
// let s3=new student('Rohit',20,2267);

console.log(s2);