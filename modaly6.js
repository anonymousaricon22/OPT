//Modal y6

// Get the modal
var modaly6 = document.getElementById("modaly6");

// Get the button that opens the modal
var btny6 = document.getElementById("y6");

// Get the <span> element that closes the modal
var spany6 = document.getElementById("closey6");

// When the user clicks the button, open the modal 
btny6.onclick = function() {
  modaly6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany6.onclick = function() {
  modaly6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly6.style.display = "none";
  }
}