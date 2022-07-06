//Modal y50

// Get the modal
var modaly50 = document.getElementById("modaly50");

// Get the button that opens the modal
var btny50 = document.getElementById("y50");

// Get the <span> element that closes the modal
var spany50 = document.getElementById("closey50");

// When the user clicks the button, open the modal 
btny50.onclick = function() {
  modaly50.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany50.onclick = function() {
  modaly50.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly50.style.display = "none";
  }
}