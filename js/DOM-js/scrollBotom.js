export default function scrollBoton(arrow){
    let $arrow = document.querySelector(arrow);

    window.addEventListener('scroll',e=>{
        let scrollPx = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollPx>400){
            $arrow.classList.remove("disguise-arrow");
        }else{
            $arrow.classList.add("disguise-arrow");
        }
    });

    document.addEventListener("click",e=>{
        if(e.target.matches(arrow)){
            window.scrollTo({
                behavior: "smooth",
                top:0,
            });
        }
    });
}