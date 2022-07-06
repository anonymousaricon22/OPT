//Modal s14

// Get the modal
var modals14 = document.getElementById("modals14");

// Get the button that opens the modal
var btns14 = document.getElementById("s14");

// Get the <span> element that closes the modal
var spans14 = document.getElementById("closes14");

// When the user clicks the button, open the modal 
btns14.onclick = function() {
    modals14.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans14.onclick = function() {
    modals14.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals14.style.display = "none";
  }
}