//Modal s16

// Get the modal
var modals16 = document.getElementById("modals16");

// Get the button that opens the modal
var btns16 = document.getElementById("s16");

// Get the <span> element that closes the modal
var spans16 = document.getElementById("closes16");

// When the user clicks the button, open the modal 
btns16.onclick = function() {
    modals16.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans16.onclick = function() {
    modals16.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals16.style.display = "none";
  }
}