//Modal y14

// Get the modal
var modaly14 = document.getElementById("modaly14");

// Get the button that opens the modal
var btny14 = document.getElementById("y14");

// Get the <span> element that closes the modal
var spany14 = document.getElementById("closey14");

// When the user clicks the button, open the modal 
btny14.onclick = function() {
  modaly14.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany14.onclick = function() {
  modaly14.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly14.style.display = "none";
  }
}