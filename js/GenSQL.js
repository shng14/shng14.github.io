var id = 0;
function newtbl(tbl) {
    //id = id + 1;
    var a = "-- Table: " + tbl + "\n" +
        "-- DROP TABLE " + tbl + ";" + "\n" +
        "CREATE TABLE " + tbl + "\n";
    var b;
    for (var i = 0; i > id; i++) {
        if (i == 0) {
            b = "(" + document.getElementById('txtColumn') + " " + typ + "," + "\n"
        }
        else if (i != 0) {
            if (i == id) {
                b += document.getElementById('txtColumn' + i) + " " + typ + ")";
            }
            else b += document.getElementById('txtColumn' + i) + " " + typ + "," + "\n";
        }
        //id++;
    }
    document.getElementById('txtSQL').innerHTML = a + b;
}

function newcol() {
    id++;
    document.getElementById('tbl1').innerHTML += "<td><div class='container'><label for='col'><b>Column</b></label><input type='text' name='col' id='txtColumn" + id + "'></div></td><td><div class='container'><label for='type'><b>Data Type</b></label><input type='text' name='typ' id='txtType" + id + "'></div></td><td><div class='container'><button type='button'>-</button></div></td>";
}