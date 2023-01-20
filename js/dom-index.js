import FiltroBusqueda from "./DOM-js/filtro-busqueda.js";
import MenuHamburger from "./DOM-js/hamburger.js";
import mediaQuery from "./DOM-js/mediaQuery.js";
import responsiveTester from "./DOM-js/responsive-tester.js";
import scrollBoton from "./DOM-js/scrollBotom.js";
import Sorteo from "./DOM-js/Sorteo.js";
import ThemeDarkLight from "./DOM-js/theme-dark-light.js";
import ValidacionFormulario from "./DOM-js/ValidacionFormulario.js";

document.addEventListener("DOMContentLoaded",e=>{
    MenuHamburger();
    scrollBoton(".arrow-upp");
    mediaQuery("youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/embed/jfKfPfyJRdk" targe="_blank">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    
    mediaQuery("gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/wjALcwWiVyAXUFi69" targe="_blank">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13621.823644480268!2d-64.1826574!3d-31.401562699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432980b3df8d6b5%3A0x84ae73bc32f300a1!2sHospital%20Tr%C3%A1nsito%20C%C3%A1ceres%20de%20Allende!5e0!3m2!1sen!2sar!4v1667249472568!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    FiltroBusqueda(".card-filter",".card");
    Sorteo("#winner-btn",".player");
    ValidacionFormulario();
});

ThemeDarkLight(".theme-dark-light","dark-mode");