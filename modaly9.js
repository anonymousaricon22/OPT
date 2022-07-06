//Modal y9

// Get the modal
var modaly9 = document.getElementById("modaly9");

// Get the button that opens the modal
var btny9 = document.getElementById("y9");

// Get the <span> element that closes the modal
var spany9 = document.getElementById("closey9");

// When the user clicks the button, open the modal 
btny9.onclick = function() {
  modaly9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany9.onclick = function() {
  modaly9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly9.style.display = "none";
  }
}