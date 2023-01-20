export default function ThemeDarkLight(theme,classDark){
    let $themeDarkLight = document.querySelector(theme),
    $selectoresAttribute = document.querySelectorAll("[data-dark]");

    // console.log($selectoresAttribute);

    // console.log($themeDarkLight);
    let moon = "🌙",
    sun = "☀️";

    let LightMode=()=>{
        $selectoresAttribute.forEach((el)=>{
            el.classList.remove(classDark);
        });
        $themeDarkLight.textContent = moon;
        localStorage.setItem("theme","light");
    };

    let DarkMode =()=>{
        $selectoresAttribute.forEach((el)=>{
            el.classList.add(classDark);
        });
        $themeDarkLight.textContent = sun;
        localStorage.setItem("theme","dark");
    };


    document.addEventListener("click",e=>{
        if(e.target.matches(theme)){
            if($themeDarkLight.textContent === moon){
                DarkMode();
            }else{
                LightMode();
            }
        }
    });

    document.addEventListener("DOMContentLoaded",e=>{
        if(localStorage.getItem("theme")===null) localStorage.setItem("theme","light");
        if(localStorage.getItem("theme")==="light") LightMode();
        if(localStorage.getItem("theme")==="dark") DarkMode();
    });
}