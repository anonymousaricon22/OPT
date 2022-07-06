//Modal s19

// Get the modal
var modals19 = document.getElementById("modals19");

// Get the button that opens the modal
var btns19 = document.getElementById("s19");

// Get the <span> element that closes the modal
var spans19 = document.getElementById("closes19");

// When the user clicks the button, open the modal 
btns19.onclick = function() {
    modals19.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans19.onclick = function() {
    modals19.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals19.style.display = "none";
  }
}