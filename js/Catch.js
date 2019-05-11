// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function demo(usr, pwd) {
    var data = '[ { "user": "admin", "pwd": "admin" }, { "user": "nhi", "pwd": "nhi" }, { "user": "user1", "pwd": "1111" } ]';
    data = JSON.parse(data);
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i].user);
        //alert("hello");
        if (usr == data[i].user && pwd == data[i].pwd) {
            //console.log(data[i].user);
            return true;
        }
    }
    swal("Username and Password is invalid!", "", "warning");
    //document.getElementById('warn').innerHTML = "* Username and Password is invalid";
    return false;
}

function calculate(hei, wei) {
    if (hei != "" && wei != "") {
        if (hei > 2) { swal("Chiều cao không được vượt quá 2m", "", "warning"); document.getElementById('txtHeight').focus(); return; }

        var bmi = wei / (hei * hei);
        document.getElementById('yBMI').innerHTML = bmi;
        if (bmi < 18.5) {
            document.getElementById('kind').innerHTML = "Thiếu cân"
        }
        else if (bmi >= 18.5 && bmi < 23) {
            document.getElementById('kind').innerHTML = "Bình thường"
        }
        else if (bmi >= 23 && bmi < 25) {
            document.getElementById('kind').innerHTML = "Thừa cân"
        }
        else if (bmi >= 25 && bmi < 30) {
            document.getElementById('kind').innerHTML = "Béo phì độ I"
        }
        else if (bmi >= 30 && bmi < 40) {
            document.getElementById('kind').innerHTML = "Béo phì độ II"
        }
        else {
            document.getElementById('kind').innerHTML = "Béo phì độ III"
        }
        document.getElementById('err').innerHTML = "";
    }
    else if (hei != "" && wei == "") {
        swal("Cân nặng không hợp lệ!", "", "warning");
        //document.getElementById('err').innerHTML = "* Chiều cao không hợp lệ";
        document.getElementById('txtWeight').focus();
    }
    else if (hei == "" && wei != "") {
        swal("Chiều cao không hợp lệ!", "", "warning");
        //document.getElementById('err').innerHTML = "* Cân nặng không hợp lệ";
        document.getElementById('txtHeight').focus();
    }
    else swal("Chiều cao và Cân nặng không hợp lệ!", "", "warning");//document.getElementById('err').innerHTML = "* Chiều cao và Cân nặng không hợp lệ";
}