//Modal y8

// Get the modal
var modaly8 = document.getElementById("modaly8");

// Get the button that opens the modal
var btny8 = document.getElementById("y8");

// Get the <span> element that closes the modal
var spany8 = document.getElementById("closey8");

// When the user clicks the button, open the modal 
btny8.onclick = function() {
  modaly8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany8.onclick = function() {
  modaly8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly8.style.display = "none";
  }
}