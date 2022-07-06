//Modal y25

// Get the modal
var modaly25 = document.getElementById("modaly25");

// Get the button that opens the modal
var btny25 = document.getElementById("y25");

// Get the <span> element that closes the modal
var spany25 = document.getElementById("closey25");

// When the user clicks the button, open the modal 
btny25.onclick = function() {
  modaly25.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany25.onclick = function() {
  modaly25.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly25.style.display = "none";
  }
}