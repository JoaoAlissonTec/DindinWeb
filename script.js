let product = document.getElementById("product");
let quantity = document.getElementById("quantity");
let list = document.getElementById("list");
let total_price = document.getElementById("totalprice")
let total_quantity = document.getElementById("totalquantity")
let count = 0
let total = 0
let quantity_sum = 0

function add() {
    if (quantity.value != "" && product.value != "") {
        let item = document.createElement("li")
        let item_title = document.createTextNode(quantity.value + " - " + product.value)
        let btnExclude = document.createElement("button")
        let btnExclude_icon = document.createElement("img")

        btnExclude_icon.setAttribute("src", "./img/trash-can.png")

        btnExclude.appendChild(btnExclude_icon)
        btnExclude.setAttribute("class", "exclude-button")
        btnExclude.setAttribute("onClick", "exclude_item("+count+")")

        item.appendChild(item_title)
        item.appendChild(btnExclude)
        item.setAttribute("id", count)
        item.setAttribute("class", "item")
        list.appendChild(item)
        
        count += 1
        total += (quantity.value * 0.5)
        quantity_sum += parseInt(quantity.value)
        total_price.innerText = total.toFixed(2)
        total_quantity.innerText = quantity_sum
    }
}

function exclude() {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    count = 0
    total = 0.0
    quantity_sum = 0
    total_price.innerText = total.toFixed(2)
    total_quantity.innerText = quantity_sum
}

function exclude_item(index){
    let item = document.getElementById(index);
    list.removeChild(item)

    count--
    total -= parseInt(item.innerText.substring(0,item.innerText.indexOf('-')-1)) * 0.5
    quantity_sum -= parseInt(item.innerText.substring(0,item.innerText.indexOf('-')-1))
    total_price.innerText = total.toFixed(2)
    total_quantity.innerText = quantity_sum
}

var qrcode = new QRCode(document.querySelector(".content"), {
    width: 200,
    height: 200,
    colorDark : "#4A2040",
    colorLight : "#F5CCE8",
    correctLevel : QRCode.CorrectLevel.H
})

function active_modal(){
    const modal = document.querySelector(".modal")
    const actualStyle = modal.style.display

    if(actualStyle == "block"){
        modal.style.display = "none"
        qrcode.clear()
    }else{
        modal.style.display = "block"
        qrcode.makeCode("https://picpay.me/joao.alisson72");
    }
}

window.onclick = function(event){
    const modal = document.querySelector(".modal")
    if(event.target == modal){
        active_modal()
    }
}