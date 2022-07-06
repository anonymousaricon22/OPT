//Modal s25

// Get the modal
var modals25 = document.getElementById("modals25");

// Get the button that opens the modal
var btns25 = document.getElementById("s25");

// Get the <span> element that closes the modal
var spans25 = document.getElementById("closes25");

// When the user clicks the button, open the modal 
btns25.onclick = function() {
    modals25.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans25.onclick = function() {
    modals25.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals25.style.display = "none";
  }
}