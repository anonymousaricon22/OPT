//Modal s13

// Get the modal
var modals13 = document.getElementById("modals13");

// Get the button that opens the modal
var btns13 = document.getElementById("s13");

// Get the <span> element that closes the modal
var spans13 = document.getElementById("closes13");

// When the user clicks the button, open the modal 
btns13.onclick = function() {
    modals13.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans13.onclick = function() {
    modals13.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals13.style.display = "none";
  }
}