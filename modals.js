/*

Steps: 

1. Get the chicked link 
2. Identify its ID using id attribute
3. Display data according to its ID using concatinating variable inside strings `` in js

*/
IDs = ["o5", "o6", "o7", "o8", "o9", "o10", "o15", "o20", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20", , "s21", "s22", "s23", "s24", "s25", "y6", "y7", "y8", "y9", "y10", "y11", "y12", "y13", "y14", "y15", "y20", "y25", "y30", "y35"];

window.onclick = e => {
    elementID = e.target.id;
    console.log(elementID)

    // Get the modal

    var modal = document.getElementById(`modal${elementID}`);
    console.log(modal)
    // Get the button that opens the modal
    var btn = document.getElementById(elementID);
    console.log(btn)
    // Get the <span> element that closes the modal
    var span = document.getElementById(`close${elementID}`);
    console.log(span)
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        console.log("workinggggggggggg")
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        console.log("xxxxxxxxxxx")
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        console.log("oooooooooooooo")
    }
}
