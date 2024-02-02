function showme(){
   in1.style.left="0%"
}
function closeme()
{
   in1.style.left ="-60%"
}
var totpro=document.getElementById("product")
var search=document.getElementById("input")
var products=totpro.querySelectorAll("div")
search.addEventListener("keyup",function(){
var entertedval=event.target.value.toUpperCase()
   for(count=0;count<=products.length;count=count+1)
   {
    var productname = products[count].querySelector("p").textContent
    if(productname.toUpperCase().indexOf(entertedval)<0)
    {
        products[count].style.display="none"
    }
    else{
       products[count].style.display="block"
    }
   }
})
function showme(){
   in1.style.left="0%"
}
function closeme()
{
   in1.style.left ="-60%"
}