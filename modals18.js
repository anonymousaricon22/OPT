//Modal s18

// Get the modal
var modals18 = document.getElementById("modals18");

// Get the button that opens the modal
var btns18 = document.getElementById("s18");

// Get the <span> element that closes the modal
var spans18 = document.getElementById("closes18");

// When the user clicks the button, open the modal 
btns18.onclick = function() {
    modals18.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans18.onclick = function() {
    modals18.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modals18.style.display = "none";
  }
}