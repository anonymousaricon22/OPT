//Modal o9

// Get the modal
var modalo9 = document.getElementById("modalo9");

// Get the button that opens the modal
var btno9 = document.getElementById("o9");

// Get the <span> element that closes the modal
var spano9 = document.getElementById("closeo9");

// When the user clicks the button, open the modal 
btno9.onclick = function() {
  modalo9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano9.onclick = function() {
  modalo9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo9.style.display = "none";
  }
}