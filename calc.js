let table = document.getElementById("data");

for (var i = 1; i < table.rows.length; i++) {
    var alg = table.rows[i].cells[1].textContent;

    var _2ffbclb = table.rows[i].cells[4].textContent;
    table.rows[i].cells[4].innerHTML = _2ffbclb*2;

    var lb = table.rows[i].cells[5].textContent;
    var _2lbStar = table.rows[i].cells[6].textContent;

    if (!(alg.includes("/"))) {
        var out = (lb / alg).toFixed(6);
        table.rows[i].cells[8].innerHTML = out;
        table.rows[i].cells[7].innerHTML = (lb / _2lbStar).toFixed(6);
    }
    else {
        const algArr = alg.split("/");
        const lbArr = lb.split("/");

        while (algArr.length != lbArr.length) {
            lbArr.push(lbArr[0])
        }
        const out8Arr = [];
        const out7Arr = [];
        for (j = 0; j < algArr.length; j++) {
            var out8 = (lbArr[j] / algArr[j]).toFixed(6);
            out8Arr.push(out8)
            var out7 = (lbArr[j] / _2lbStar).toFixed(6);
            if (!(out7Arr.includes(out7)))
                out7Arr.push(out7)


            table.rows[i].cells[8].innerHTML = out8Arr.join("/");
            table.rows[i].cells[7].innerHTML = out7Arr.join("/");
        }
    }
}