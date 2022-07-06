//Modal s12

// Get the modal
var modals12 = document.getElementById("modals12");

// Get the button that opens the modal
var btns12 = document.getElementById("s12");

// Get the <span> element that closes the modal
var spans12 = document.getElementById("closes12");

// When the user clicks the button, open the modal 
btns12.onclick = function() {
    modals12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans12.onclick = function() {
    modals12.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals12.style.display = "none";
  }
}