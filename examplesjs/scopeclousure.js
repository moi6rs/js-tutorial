/* puntero donde quiero acceder */
console.log('Scope and Clousure');
/*donde pued ser visibel var y function*/
var goblalVariable = 'hello';

/* scope var function o bloque */
function hello(){
    /*es global*/
    var y = 'I am global variable';
    /*let en la funcion*/
    let x = 'world';
    /* dos string se usa interpolacion */
    console.log('Saludar:', `${goblalVariable} ${x}`)
}
 console.log(y);

 /*clousure*/
 funtion parent(){
     let x =1;
     return     {child: () => x
    }
 }
 var t = parent();
console.log('value of chilld', t.child());

function  parent1(x){
    return function child(y){
        return x = y;
    }
}
/*lexical scope  de ty padre y landa expresion */
/*promese 3 estados pendiente, sucess, progreso, */
 /* curryin o parcial programin */
/* medium.com*/

const parcialresult = parent1(2);
console.log('! clousure', parcialresult(3));

