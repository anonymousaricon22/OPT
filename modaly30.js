//Modal y30

// Get the modal
var modaly30 = document.getElementById("modaly30");

// Get the button that opens the modal
var btny30 = document.getElementById("y30");

// Get the <span> element that closes the modal
var spany30 = document.getElementById("closey30");

// When the user clicks the button, open the modal 
btny30.onclick = function() {
  modaly30.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany30.onclick = function() {
  modaly30.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly30.style.display = "none";
  }
}