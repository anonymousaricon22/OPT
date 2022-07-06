//Modal y13

// Get the modal
var modaly13 = document.getElementById("modaly13");

// Get the button that opens the modal
var btny13 = document.getElementById("y13");

// Get the <span> element that closes the modal
var spany13 = document.getElementById("closey13");

// When the user clicks the button, open the modal 
btny13.onclick = function() {
  modaly13.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany13.onclick = function() {
  modaly13.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly13.style.display = "none";
  }
}