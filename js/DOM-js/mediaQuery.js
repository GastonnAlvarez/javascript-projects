export default function mediaQuery(id,mq,mobileContent,desktop){
    let breakpoint = window.matchMedia(mq);
    const resonsive = (e) =>{
        if(e.matches){
            document.getElementById(id).innerHTML = desktop;
        }else{
            document.getElementById(id).innerHTML = mobileContent;
        }
    };
    breakpoint.addListener(resonsive);
    resonsive(breakpoint);

}