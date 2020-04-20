/**
Cho ba số a, b, c là 3 số nguyên,
hãy kiểm tra xem chúng có tạo được thành 1 bộ 3 cạnh của một tam giác vuông hay không. 
Nếu đúng trả về True, nếu sai trả về False.
 */
function rightTriangle(a,b,c){
    if(a+b>c && a+c>b && b+c>a){
        var x=Math.pow(a,2);
        var y=Math.pow(b,2);
        var z=Math.pow(c,2)
        if(x+y===z || y+z===x || x+z===y)
            return true;
        return false;
    }
    return false;
}