//Modal o6

// Get the modal
var modalo6 = document.getElementById("modalo6");

// Get the button that opens the modal
var btno6 = document.getElementById("o6");

// Get the <span> element that closes the modal
var spano6 = document.getElementById("closeo6");

// When the user clicks the button, open the modal 
btno6.onclick = function() {
  modalo6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano6.onclick = function() {
  modalo6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo6.style.display = "none";
  }
}