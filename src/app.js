


window.onload = function() {

  jumboTron = document.getElementById("container-jumbotron");
  jumboPosition = jumboTron.offsetHeight;
  console.log(jumboPosition);
}

window.onscroll = function() {
  var navBar = document.getElementById("navbar");
  var container = document.getElementById("container");
  var buttonBlue = document.getElementById("bottonegmail");

  if (window.pageYOffset > (jumboPosition / 2)) {

    container.classList.add("bordo");
    navBar.classList.remove("bordo");
    buttonBlue.classList.add("buttonblue");
  } else {
    container.classList.remove("bordo");
    navBar.classList.add("bordo");
    buttonBlue.classList.remove("buttonblue");
  }
}







// Ricaviamo coordinate jumboTron

  // Ottenuta la coordinata applichiamo la misura standard
  // Applichiamo il remove alla classe .bordo
  // Aggiungiamo la classe .bordo su .container
