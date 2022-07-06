//Modal o5

// Get the modal
var modalo5 = document.getElementById("modalo5");

// Get the button that opens the modal
var btno5 = document.getElementById("o5");

// Get the <span> element that closes the modal
var spano5 = document.getElementById("closeo5");

// When the user clicks the button, open the modal 
btno5.onclick = function() {
  modalo5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano5.onclick = function() {
  modalo5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo5.style.display = "none";
  }
}