/**
 * Một nhóm 4 người đang chơi bập bênh. 
 * Cho mảng arr chứa trọng lượng của 4 người đó kiểm tra xem liệu họ có thể ngồi ở 2 bên sao cho bập bênh thăng bằng không. Nếu đúng trả về số cân nặng mỗi bên khi thăng bằng, nếu sai trả về -1.
 */
function balance(arr){
    arr.sort(function(a,b){
        return a-b;
    })
    if(arr[0]>=1 && arr[3]<=100){
        var x=arr[0]+arr[3];
        var y=arr[1]+arr[2];
        if(x==y)
            return x;
        else if((y+arr[0])==arr[3]){
            return arr[3];
        }
        else
            return -1;
    }
}
console.log(balance([1,1,1,3]))