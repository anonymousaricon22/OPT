//Modal y10

// Get the modal
var modaly10 = document.getElementById("modaly10");

// Get the button that opens the modal
var btny10 = document.getElementById("y10");

// Get the <span> element that closes the modal
var spany10 = document.getElementById("closey10");

// When the user clicks the button, open the modal 
btny10.onclick = function() {
  modaly10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany10.onclick = function() {
  modaly10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly10.style.display = "none";
  }
}