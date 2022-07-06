//Modal y15

// Get the modal
var modaly15 = document.getElementById("modaly15");

// Get the button that opens the modal
var btny15 = document.getElementById("y15");

// Get the <span> element that closes the modal
var spany15 = document.getElementById("closey15");

// When the user clicks the button, open the modal 
btny15.onclick = function() {
  modaly15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany15.onclick = function() {
  modaly15.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly15.style.display = "none";
  }
}