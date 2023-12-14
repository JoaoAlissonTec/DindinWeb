let product = document.getElementById("product");
let quantity = document.getElementById("quantity");
let list = document.getElementById("list");
let total_price = document.getElementById("totalprice")
let total_quantity = document.getElementById("totalquantity")
let count = 0
let total = 0
let quantity_sum = 0
function add() {
    if (quantity.value != "" || product.value != "") {
        let item = document.createElement("li")
        let item_title = document.createTextNode(quantity.value + " - " + product.value)
        item.appendChild(item_title)
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