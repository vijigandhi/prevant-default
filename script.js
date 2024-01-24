
let check=document.querySelector("#check")
let input=document.querySelector("#input1")
let button=document.getElementById("btn")

button.addEventListener("click",(event)=>
{
   if (input.value.length <= 0 || !(input.value.trim())) 
   {
      alert("Please Fill Username");
      // event.preventDefault()
   }

   else if(check.checked==false)
   {
      alert("Please accept terms and condition");
      // event.preventDefault()
   }   
         
});