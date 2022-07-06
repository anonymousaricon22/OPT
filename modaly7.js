//Modal y7

// Get the modal
var modaly7 = document.getElementById("modaly7");

// Get the button that opens the modal
var btny7 = document.getElementById("y7");

// Get the <span> element that closes the modal
var spany7 = document.getElementById("closey7");

// When the user clicks the button, open the modal 
btny7.onclick = function() {
  modaly7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany7.onclick = function() {
  modaly7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly7.style.display = "none";
  }
}