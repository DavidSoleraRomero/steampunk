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
  
/* JavaScript Scroll */
document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener("click", function(e) {
      e.preventDefault();

      var targetId = this.getAttribute("href");

      if (targetId === "#") {
        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        // Update the URL to remove the hash
        window.history.pushState(null, null, window.location.pathname);
      } else {
        var targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          var offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });

          // Update the URL with the hash
          window.history.pushState(null, null, targetId);
        }
      }
    });
  });
});

/* Botón direcciona hacia Concept - hecho por IA */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myButton').addEventListener('click', function() {
  document.getElementById('concept').scrollIntoView({
      behavior: 'smooth'
      });
  });
});