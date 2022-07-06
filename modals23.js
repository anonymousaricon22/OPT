//Modal s23

// Get the modal
var modals23 = document.getElementById("modals23");

// Get the button that opens the modal
var btns23 = document.getElementById("s23");

// Get the <span> element that closes the modal
var spans23 = document.getElementById("closes23");

// When the user clicks the button, open the modal 
btns23.onclick = function() {
    modals23.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans23.onclick = function() {
    modals23.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals23.style.display = "none";
  }
}