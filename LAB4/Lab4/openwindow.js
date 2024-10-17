let windowId
function opewindow() {
    let options;

    let ua = navigator.userAgent;
    if(ua.indexOf("Trident")){
        options ="menyes,toolbar=yes,width=100,height =100";

    }else{
        options ="menyes,toolbar=yes,width=150,height =150";
    }

    windowId =window.open("https://www.google.com/","Tim kiem",options);
}
function closewindow(){
    if(windowId){
        windowId.close()
        alert("Cửa sổ đã được đóng");
    }else{
        alert("Cửa sổ chưa được mở");
    }
}

function checkWindowCloseed(){
    if(windowId.closed){
        alert("Cửa sổ đã được đóng");
    }else{
        alert("Cửa sổ đang được mở");
    }
}