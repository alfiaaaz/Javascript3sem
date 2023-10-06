function OuterFun(){
    let money = 150;

    function innerFun(){
        money++;

        function innerMostFun(){
            money++;
            console.log(money);
        }
        return innerMostFun;
    }
    return innerFun;
}
let fun = OuterFun();
let fun1 = fun();
let fun2 = fun();

fun1();
fun1();
fun2();
fun2();
fun1();