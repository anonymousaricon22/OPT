let table = document.getElementById("data");

for (var i = 1; i < table.rows.length; i++) {
    var _2ffbclb = table.rows[i].cells[1].textContent;
    table.rows[i].cells[1].innerHTML = _2ffbclb*2;

    var opt = table.rows[i].cells[2].textContent;
    
    var maxGagl = table.rows[i].cells[4].textContent;
    var maxGlb = table.rows[i].cells[5].textContent;
    
    var col6 = (maxGagl/opt).toFixed(6);
    var col8 = (maxGlb / maxGagl).toFixed(6);
    
    table.rows[i].cells[6].innerHTML = col6;
    table.rows[i].cells[8].innerHTML = col8;
    
    var minGagl = table.rows[i].cells[9].textContent;
    var minGlb = table.rows[i].cells[10].textContent;
    
    var col11 = (minGagl/opt).toFixed(6);
    var col13 = (minGlb / minGagl).toFixed(6);

    table.rows[i].cells[11].innerHTML = col11;
    table.rows[i].cells[13].innerHTML = col13;

    var _2lbStar = table.rows[i].cells[2].textContent;
    var col7 = (maxGlb/_2lbStar).toFixed(6);
    var col12 = (minGlb/_2lbStar).toFixed(6);
    table.rows[i].cells[7].innerHTML = col7;
    table.rows[i].cells[12].innerHTML = col12;

}

//swap 5th and 6th cols and swap 10th and 11th cols

for (var i = 0; i < table.rows.length; i++) {
    var col5 = table.rows[i].cells[5].textContent;
    var col6 = table.rows[i].cells[6].textContent;
    var col10 = table.rows[i].cells[10].textContent;
    var col11 = table.rows[i].cells[11].textContent;

    table.rows[i].cells[5].innerHTML = col6;
    table.rows[i].cells[6].innerHTML = col5;

    table.rows[i].cells[10].innerHTML = col11;
    table.rows[i].cells[11].innerHTML = col10;
}