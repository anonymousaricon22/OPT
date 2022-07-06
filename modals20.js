//Modal s20

// Get the modal
var modals20 = document.getElementById("modals20");

// Get the button that opens the modal
var btns20 = document.getElementById("s20");

// Get the <span> element that closes the modal
var spans20 = document.getElementById("closes20");

// When the user clicks the button, open the modal 
btns20.onclick = function() {
    modals20.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans20.onclick = function() {
    modals20.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals20.style.display = "none";
  }
}