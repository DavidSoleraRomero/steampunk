/**********************************************************/
/* Web de Steampunk                                       */
/* Hoja de javascript para index.html y gallery.html      */
/* Autor: David Solera Romero                             */
/* Versión: 1.0                                           */
/* 29 de noviembre de 2023                                */
/**********************************************************/

/* Java Script que regula la barra de navegación */

function myFunction() {
    var x = document.getElementById("navegacion");
    if (x.className === "miNav") {
      x.className += " responsive";
    } else {
      x.className = "miNav";
    }
  }