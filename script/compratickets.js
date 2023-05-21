let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let pago = document.getElementById("pago");
let botonresumen = document.getElementById("resumen");

function TotalPago() {
    let cant = parseInt(cantidad.value);
    let cate = categoria.value;
    let desc = 0;
    if(cate == "estudiante") desc = 0.20;
    if(cate == "trainee") desc = 0.5;
    if(cate == "junior") desc = 0.85;
    
    let total = 200 * cant * desc;

    pago.innerHTML = total.toString();
}

botonresumen.onclick = TotalPago;
