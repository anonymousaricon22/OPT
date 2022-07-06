//Modal s24

// Get the modal
var modals24 = document.getElementById("modals24");

// Get the button that opens the modal
var btns24 = document.getElementById("s24");

// Get the <span> element that closes the modal
var spans24 = document.getElementById("closes24");

// When the user clicks the button, open the modal 
btns24.onclick = function() {
    modals24.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans24.onclick = function() {
    modals24.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals24.style.display = "none";
  }
}