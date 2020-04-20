/**
 * Một mảng được gọi là ổn định nếu chênh lệch giữa 2 phần tử liền kề là không vượt quá 5. 
 * Cho một mảng arr là mảng chứa các số nguyên, hãy kiểm tra xem mảng đó có ổn định hay không? 
 * trả về true nếu mảng arr là một mảng ổn định và false nếu không.
Ví dụ:
Với arr= {1, 2, 5, 8, 12} thì đầu ra stabilityArray(arr) = true 
với chuỗi chênh lệch giữa các phần tử liên tiếp là 1, 3, 3, 4.
 */
function stabilityArray(arr){
    var sub=0;
    for(var i=1;i<arr.length;i++){
        sub=arr[i]-arr[i-1];
        if(sub>5)
            return false;
    }
    return true;
}