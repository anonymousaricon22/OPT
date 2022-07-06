//Modal s17

// Get the modal
var modals17 = document.getElementById("modals17");

// Get the button that opens the modal
var btns17 = document.getElementById("s17");

// Get the <span> element that closes the modal
var spans17 = document.getElementById("closes17");

// When the user clicks the button, open the modal 
btns17.onclick = function() {
    modals17.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans17.onclick = function() {
    modals17.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals17.style.display = "none";
  }
}