let turn = true;
let clickedCount =0;

function mark(btn){
    btn.innerText = turn ? "X" : "O";
    btn.classList.add(turn ? "xbtn":"obtn");
    btn.setAttribute("disabled","disabled")
    turn = !turn;
    clickedCount++;

    if(clickedCount==8){
        alert("Game over!");
        location.reload();
    }
}
