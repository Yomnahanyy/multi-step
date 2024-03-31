const slidePage= document.querySelector(".slidePage");
const firstNextBtn= document.querySelector(".nextBtn");
const prevBtnSec= document.querySelector(".prev-1");
const nextBtnSec= document.querySelector(".next-1");

const prevBtnThird= document.querySelector(".prev-2");
const nextBtnThird= document.querySelector(".next-2");

const prevBtnFourth=document.querySelector(".prev-3");
const submitBtn=document.querySelector(".submit");

firstNextBtn.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
});
nextBtnSec.addEventListener("click",function(){
        slidePage.style.marginLeft="-50%";
});
nextBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft="-75%";
});
prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="0%";
});
prevBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
});
nextBtnFourth.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";
});
