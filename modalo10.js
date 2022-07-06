//Modal o10

// Get the modal
var modalo10 = document.getElementById("modalo10");

// Get the button that opens the modal
var btno10 = document.getElementById("o10");

// Get the <span> element that closes the modal
var spano10 = document.getElementById("closeo10");

// When the user clicks the button, open the modal 
btno10.onclick = function() {
  modalo10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano10.onclick = function() {
  modalo10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo10.style.display = "none";
  }
}