
function calc() {
   var type_services1 = document.getElementById("type_services");
   var type_goods2 = document.getElementById("type_goods");
   var slider = document.getElementById("range");
   var result = document.getElementById("result");
   var output1 = document.getElementById("output");
   var price = 0;
   price += parseInt(type_services1.options[type_services.selectedIndex].value);
   more = parseInt(slider.value);
   price = parseInt(type_goods2.value) + price;
   result.innerHTML = price * more;
   output.innerHTML = more

}
