
// -------scope

function fun(y){
    if(y>5){
             var a = 'Inside if, var';
             let b = "Inside if, let";

             console.log(a, b);
    }
    
    else{
        console.log(a);
    }

}
fun(3)