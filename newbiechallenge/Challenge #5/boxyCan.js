/**
Một xe nước có thùng là một hình hộp chữ nhật có kích thước là a, b, c (mét). Kiểm tra xem với dung tích khi xe nước chứa đầy hoàn toàn có thể đổ đầy hoàn toàn bao nhiêu thùng có dung tích là d (mét khối).
 */
function boxyCan(a,b,c,d){
    var number=(a*b*c)/d
    return parseInt(number);
}