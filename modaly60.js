//Modal y60

// Get the modal
var modaly60 = document.getElementById("modaly60");

// Get the button that opens the modal
var btny60 = document.getElementById("y60");

// Get the <span> element that closes the modal
var spany60 = document.getElementById("closey60");

// When the user clicks the button, open the modal 
btny60.onclick = function() {
  modaly60.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany60.onclick = function() {
  modaly60.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly60.style.display = "none";
  }
}