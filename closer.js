function OuterFun(){
    let money = 150;


    function innerFun(){
        money++;
        console.log(money);
    }
    return innerFun;
}

let fun1 = OuterFun();
let fun2 = OuterFun();

fun1();
fun1();
fun2();
fun2();
fun1();