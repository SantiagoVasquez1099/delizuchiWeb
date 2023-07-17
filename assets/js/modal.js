const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const modal = document.querySelector("#modal");
const btnOpenCookies = document.querySelector("#btnOpenCookies");
const btnCloseCookies = document.querySelector("#btnCloseCookies");
const modalCookies = document.querySelector("#modalCookies");




btnOpen.addEventListener("click",()=>{
    modal.showModal();
})



btnClose.addEventListener("click",()=>{
    modal.close();
})

btnOpenCookies.addEventListener("click",()=>{
    modalCookies.showModal();
})

btnCloseCookies.addEventListener("click",()=>{
    modalCookies.close();
})