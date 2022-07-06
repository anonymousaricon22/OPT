//Modal o8

// Get the modal
var modalo8 = document.getElementById("modalo8");

// Get the button that opens the modal
var btno8 = document.getElementById("o8");

// Get the <span> element that closes the modal
var spano8 = document.getElementById("closeo8");

// When the user clicks the button, open the modal 
btno8.onclick = function() {
  modalo8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano8.onclick = function() {
  modalo8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo8.style.display = "none";
  }
}