export default function responsiveTester(form){
    let $form = document.getElementById(form);
    let tester;

    document.addEventListener('submit',e=>{
        if(e.target === $form){
            e.preventDefault();
            tester = window.open(
                $form.url.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeigth=${$form.largo.value}`
            );
        }
    });

    document.addEventListener('click',e=>{
        if(e.target===$form.cerrar) tester.close();
    });
};