export default function MenuHamburger(){
    let $hamburgerInner = document.querySelector(".hamburger-inner");

    document.addEventListener("click",e=>{
        if(e.target.matches(".hamburger")||
           e.target.matches(".hamburger-box")||
           e.target.matches(".hamburger-inner")){

            document.querySelector(".hamburger").classList.toggle("is-active");
            document.querySelector(".window-modal").classList.toggle("show-modal");
        }else{
            document.querySelector(".window-modal").classList.remove("show-modal");
            document.querySelector(".hamburger").classList.remove("is-active");
        }
    });

}