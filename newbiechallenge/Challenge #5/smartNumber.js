/**
 * 
 Số thông minh là số nguyên mà các chữ số đứng sau có giá trị luôn nhỏ hơn chữ số đứng ngay trước nó. 
 Cho số nguyên n, kiểm tra xem n có phải số thông minh hay không. Nếu đúng trả về true, nếu không trả về false.
Ví dụ:
Với n = 541 thì đầu ra sẽ là smartNumber(n) = True.
1 < 4 < 5
 */
function smartNumber(n){
    var i=Math.abs(n);
    if(i<10)
        return false;
    while(i>0){
        temp=i%10;
        i=parseInt(i/10);
        if(i%10<=temp && i!=0)
            return false;
    }
    return true;
}