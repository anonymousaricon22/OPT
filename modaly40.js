//Modal y40

// Get the modal
var modaly40 = document.getElementById("modaly40");

// Get the button that opens the modal
var btny40 = document.getElementById("y40");

// Get the <span> element that closes the modal
var spany40 = document.getElementById("closey40");

// When the user clicks the button, open the modal 
btny40.onclick = function() {
  modaly40.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany40.onclick = function() {
  modaly40.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly40.style.display = "none";
  }
}