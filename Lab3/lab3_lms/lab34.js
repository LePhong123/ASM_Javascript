let a,b,o;

function toan_hanh(num) {
    if(o){
        b = num;
        }
        else{
        a = num;
        }
}
function toan_tu(mid){
    o = mid;
}
function lam_lai(){
    o = undefined;
    a = undefined;
    b = undefined;
}
function thuc_hien(){
    let c;
    switch (o) { 
        case '+':
         c = a + b;
        alert("Tổng: " + c);
        break;
        case "-":
         c = a - b;
        alert("Hiệu: " + c);
        break;
        case "*":
        c = a * b;
        alert("Nhân: " + c);
        break;
        case "/":
        c = a / b;
        alert("Thương: " + c);
        break;
        default:
        alert(o+ " không phải là toán tử" );
        break;
        }
         
}