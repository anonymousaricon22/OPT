//Modal y11

// Get the modal
var modaly11 = document.getElementById("modaly11");

// Get the button that opens the modal
var btny11 = document.getElementById("y11");

// Get the <span> element that closes the modal
var spany11 = document.getElementById("closey11");

// When the user clicks the button, open the modal 
btny11.onclick = function() {
  modaly11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany11.onclick = function() {
  modaly11.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly11.style.display = "none";
  }
}