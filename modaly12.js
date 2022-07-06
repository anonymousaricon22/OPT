//Modal y12

// Get the modal
var modaly12 = document.getElementById("modaly12");

// Get the button that opens the modal
var btny12 = document.getElementById("y12");

// Get the <span> element that closes the modal
var spany12 = document.getElementById("closey12");

// When the user clicks the button, open the modal 
btny12.onclick = function() {
  modaly12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany12.onclick = function() {
  modaly12.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly12.style.display = "none";
  }
}