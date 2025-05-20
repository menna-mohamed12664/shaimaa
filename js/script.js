
var allprducts = document.querySelectorAll(".list .cart");
var content = document.querySelector("#content");
var showprice = document.getElementById("showprice");
var clear = document.getElementById('clear');
var totalprice = 0;

allprducts.forEach(function(item){
  item.onclick = function(){
    totalprice += parseFloat(item.getAttribute("price"));
    content.innerHTML += item.getAttribute("name")+ ":" ;
    content.innerHTML += item.getAttribute("price") + "<br/>"; 
    
    if (content.innerHTML != ""){
      showprice.style.display = "block";
      clear.style.display = "block";
      showprice.style.width = "140px";
      showprice.style.height = "40px";
      showprice.style.border = "0";
      showprice.style.borderRadius = "10px";
    }
  }
});

showprice.addEventListener('click', () => {
  if(totalprice > 1000){
    alert("You Got Discount 20%");
    totalprice -= 200;
  }
  console.log("Total price is: " , totalprice);
  alert("Total price is: " + totalprice);
});

clear.addEventListener('click', () => {
  content.innerHTML = "";
  showprice.style.display = "none";
  clear.style.display = "none";
  totalprice = 0;

   console.log("totalprice" , totalprice=0);
});

 


// -----------------------------------------------------
var inputsearch = document.getElementById("search");
var productlist = document.querySelectorAll(".name");
var notFound = document.getElementById("notFound")


inputsearch.addEventListener('input', ()=>{
 var inputValue = inputsearch.value.toLowerCase()

   var anyVisible=false

    productlist.forEach((item) =>{
        if(item.textContent.toLowerCase().includes(inputValue)){
            item.style.display="block"
            anyVisible=true
    
        }
        else{
            item.style.display="none"
        }

    })
  
 notFound.style.display= anyVisible? "none" : "block"


})



 

 




