//Modal y20

// Get the modal
var modaly20 = document.getElementById("modaly20");

// Get the button that opens the modal
var btny20 = document.getElementById("y20");

// Get the <span> element that closes the modal
var spany20 = document.getElementById("closey20");

// When the user clicks the button, open the modal 
btny20.onclick = function() {
  modaly20.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany20.onclick = function() {
  modaly20.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly20.style.display = "none";
  }
}