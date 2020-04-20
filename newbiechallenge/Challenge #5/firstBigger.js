/**Cho 2 số nguyên a và b, tìm số nguyên nhỏ nhất lớn hơn b mà chia hết cho a. */
function firstBigger(a,b){
    do{
        b++
    } while(b%a!==0)
    return b;
}