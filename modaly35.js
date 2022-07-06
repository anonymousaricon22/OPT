//Modal y35

// Get the modal
var modaly35 = document.getElementById("modaly35");

// Get the button that opens the modal
var btny35 = document.getElementById("y35");

// Get the <span> element that closes the modal
var spany35 = document.getElementById("closey35");

// When the user clicks the button, open the modal 
btny35.onclick = function() {
  modaly35.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spany35.onclick = function() {
  modaly35.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modaly35.style.display = "none";
  }
}