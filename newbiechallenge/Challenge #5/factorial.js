//Tinh giai thua
var gt=1;
function factorial(a){
    if(a==0)    
        return gt;
    if(a!=1){
        gt=a*factorial(a-1)
    }
    return gt;
}