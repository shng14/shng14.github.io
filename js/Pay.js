function newcol(memno) {
    document.getElementById('tbl1').innerHTML = '';
    //            <td>
    //                <div class="container">
    //                    <label for="total"><b>Cash</b></label>
    //                    <input type="number" placeholder="Input your cash" name="cash" id="total">
    //                </div>
    //            </td>
    //            <td>
    //                <div class="container">
    //                    <label for="mem"><b>Members</b></label>
    //                    <input type="number" placeholder="Input the number of member" name="hmem" id="mem" onchange="newcol(document.getElementById('mem').value)">
    //                </div>
    //            </td>
    //        </tr>`
    for (var i = 0; i < memno; i++) {
        document.getElementById('tbl1').innerHTML += "<td><div class ='container'><label for='col'><b>Person " + (i + 1) + "</b></label><input type='text' name='pers' id='person'" + (i + 1) + "'></div></td><td><div class ='container'><label for='col'><b>Payed</b></label><input type='number' name='pay' id='payed'" + (i + 1) + "'></div></td><td><div class ='container'><input type='checkbox' name='pay' id='pay'" + (i + 1) + "'></div></td>";
    }
}