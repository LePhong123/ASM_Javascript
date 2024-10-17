function addToCart(btn){
    const trNode = btn.parentElement.parentElement;
    const trNodeClone =trNode.cloneNode(true)
    const btnAdd = trNodeClone.getElementsByTagName("button")
    btnAdd[0].innerText="Xóa";
    btnAdd[0].setAttribute("onclick","removeCartItem(this)");
    const cartbody =document.getElementById("cart-body");

    cartbody.apppenChild(trNodeClone);

    const cartTable =document.getElementById('cartItems')
    cartTable.style.display ="table";

    const emptyCart =document.getElementById("emptyCart")
    empty.style.display="none"

    const grandTotal= document.getElementById("grandTotal")
    grandTotal.style.display="block"
}

function removeCartItem(btn){
    const trNode =btn.parentElement.parentElement

    const tbodyNode=trNode.parentElement
    tbodyNode.removeChild(trNode);

    if(tbodyNode.children.length <= 0){
        const cartTable=document.getElementById("cartItems");
        cartTable.style.display="none"

        const emptyCart =document.getElementById("emptyCart")
    emptyCart.style.display="block"

    const grandTotal= document.getElementById("grandTotal")
    grandTotal.style.display="none"
    grandTotal.childNodes[1].innerText="0";
    }
}