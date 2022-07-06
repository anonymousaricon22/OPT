//Modal o7

// Get the modal
var modalo7 = document.getElementById("modalo7");

// Get the button that opens the modal
var btno7 = document.getElementById("o7");

// Get the <span> element that closes the modal
var spano7 = document.getElementById("closeo7");

// When the user clicks the button, open the modal 
btno7.onclick = function() {
  modalo7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano7.onclick = function() {
  modalo7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo7.style.display = "none";
  }
}