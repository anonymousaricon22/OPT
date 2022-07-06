//Modal o15

// Get the modal
var modalo15 = document.getElementById("modalo15");

// Get the button that opens the modal
var btno15 = document.getElementById("o15");

// Get the <span> element that closes the modal
var spano15 = document.getElementById("closeo15");

// When the user clicks the button, open the modal 
btno15.onclick = function() {
  modalo15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano15.onclick = function() {
  modalo15.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo15.style.display = "none";
  }
}