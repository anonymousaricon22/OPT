//Modal s15

// Get the modal
var modals15 = document.getElementById("modals15");

// Get the button that opens the modal
var btns15 = document.getElementById("s15");

// Get the <span> element that closes the modal
var spans15 = document.getElementById("closes15");

// When the user clicks the button, open the modal 
btns15.onclick = function() {
    modals15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans15.onclick = function() {
    modals15.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals15.style.display = "none";
  }
}