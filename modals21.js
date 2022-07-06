//Modal s21

// Get the modal
var modals21 = document.getElementById("modals21");

// Get the button that opens the modal
var btns21 = document.getElementById("s21");

// Get the <span> element that closes the modal
var spans21 = document.getElementById("closes21");

// When the user clicks the button, open the modal 
btns21.onclick = function() {
    modals21.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans21.onclick = function() {
    modals21.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals21.style.display = "none";
  }
}