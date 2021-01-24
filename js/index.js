// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
var totalPrice=0;
  
  //var quantity = document.getElementById("quant").value;

  for (marco=0; marco<document.getElementsByClassName("quant").length; marco++)
  {
    var price = document.getElementsByClassName('price')[marco].innerHTML;
    var quantity = document.getElementsByClassName("quant")[marco].value;
    
    var subtotal = price * quantity;
    totalPrice = totalPrice+subtotal;
    console.log("price",price);
    console.log("quantity", quantity);
    console.log("subtotal", subtotal);
    console.log("totalPrice",totalPrice);

    document.getElementsByClassName("subtotal")[marco].innerHTML = subtotal;
    console.log(subtotal.length);
 // document.getElementsByClassName("subtotal > span")[0].innerHTML = subtotal;
  }

 // document.getElementById("total-value").innerHTML=totalPrice;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  
  var totalPrice=0;
  var subtotal =0;
  for (marco=0; marco<document.getElementsByClassName("quant").length; marco++)
  {
    
    subtotal=parseFloat(document.getElementsByClassName("subtotal")[marco].innerHTML);
    totalPrice = totalPrice+subtotal;
    console.log(subtotal.length);
 // document.getElementsByClassName("subtotal > span")[0].innerHTML = subtotal;
  }

  document.getElementById("total-value").innerHTML=totalPrice;

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentnode.parentNode);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const product=document.querySelector('.create-product -td product').nodeValue;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //const calculateQuantityInput = document.getElementsByClassName("quant");
  //calculateQuantityInput.addEventListener('click', updateSubtotal)

  //... your code goes here
  document.querySelectorAll('.quant').forEach(item => {
    item.addEventListener('click',  event => {updateSubtotal(this)} )
  })
});
