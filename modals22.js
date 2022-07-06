//Modal s22

// Get the modal
var modals22 = document.getElementById("modals22");

// Get the button that opens the modal
var btns22 = document.getElementById("s22");

// Get the <span> element that closes the modal
var spans22 = document.getElementById("closes22");

// When the user clicks the button, open the modal 
btns22.onclick = function() {
    modals22.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans22.onclick = function() {
    modals22.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals22.style.display = "none";
  }
}