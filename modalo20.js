//Modal o20

// Get the modal
var modalo20 = document.getElementById("modalo20");

// Get the button that opens the modal
var btno20 = document.getElementById("o20");

// Get the <span> element that closes the modal
var spano20 = document.getElementById("closeo20");

// When the user clicks the button, open the modal 
btno20.onclick = function() {
  modalo20.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spano20.onclick = function() {
  modalo20.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalo20.style.display = "none";
  }
}