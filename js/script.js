let head=document.getElementsByClassName("head");
let con=document.getElementsByClassName("con");
let pls=document.getElementsByClassName("plus");
let minus = document.getElementsByClassName('minus');

for(let i=0;i<head.length;i++){
    head[i].addEventListener("click", ()=>{
        // con[i].classList.toggle("con");  
    //     con[i].style.display="block";
    //     pls[i].innerHTML="-";

        pls[i].classList.toggle('hide');
        minus[i].classList.toggle('hide');
        con[i].classList.toggle('hide');
    });

//     head[i].addEventListener("dblclick",()=>{
//         con[i].style.display="none";
//         pls[i].innerHTML="+";
//     });   
}