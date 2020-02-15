let btn=document.querySelector("button");
let wrap=document.querySelector(".popup-wrapper");
let close=document.querySelector(".popup-close");
let a=document.querySelector("a");
let h1=document.querySelector("h1");
//for click me
click=()=>{
    wrap.style.display="inline";
}
btn.addEventListener("click",click);
//for  close or cancel
closeClick=()=>{
 wrap.style.display="none";
}
close.addEventListener("click",closeClick);

window.onclick=function(e){
    if(e.target==wrap){
         wrap.style.display="none";
    }
}
// for order
orderClick=()=>{
    wrap.style.display="none";
    h1.innerHTML+="Your order is successful";
    h1.style.display="inline";
}
a.addEventListener("click",orderClick);