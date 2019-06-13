var a = 5;
function sumFather(a){
    var b = 5;
    function sumSon(){        
        return sum = a + b; 
    }
    return sumSon();
}

var z = sumFather(a);
console.log(z);