//Modal y45

// Get the modal
var modaly45 = document.getElementById("modaly45");

// Get the button that opens the modal
var btny45 = document.getElementById("y45");

// Get the <span> element that closes the modal
var spany45 = document.getElementById("closey45");

// When the user clicks the button, open the modal 
btny45.onclick = function() {
  modaly45.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany45.onclick = function() {
  modaly45.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly45.style.display = "none";
  }
}