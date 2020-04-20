/**
 * 
 Nam đang đi học, trên đường đi học Nam thường phải qua các ngã tư có đèn giao thông. 
 Nếu đèn vàng Nam sẽ phải chờ 2 giây, đèn đỏ 4 giây và đèn xanh 0 giây. 
 Cho arr là mảng chứa màu sắc đèn mà Nam gặp phải theo quay tắc:

Số 1 chỉ đèn xanh
Số 2 chỉ đèn vàng
Số 3 chỉ đèn đỏ
Tính tổng thời gian mà Nam phải chờ đèn giao thông.
 */
function stopLight(arr){
    var sum=0;
    var t;
    for(var i=0;i<arr.length;i++){
        switch(arr[i]){
            case 1:
                t=0;
                break;
            case 2:
                t=2;
                break;
            case 3:
                t=4;
                break;
        }
        sum=sum+t;
    }
    return sum;    
}