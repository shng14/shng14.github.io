// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function demo(usr, pwd) {
    if (usr == "admin" && pwd == "admin") {
        return true;
    }
    else {
        document.getElementById('warn').innerHTML = "* Username and Password is invalid";
        return false;
    }
}

function calculate(hei, wei) {
    if (hei != "" && wei != "") {
        var bmi = hei / (wei * wei);
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
        document.getElementById('err').innerHTML = "* Chiều cao không hợp lệ";
        document.getElementById('txtWeight').focus();
    }
    else if (hei == "" && wei != "") {
        document.getElementById('err').innerHTML = "* Cân nặng không hợp lệ";
        document.getElementById('txtHeight').focus();
    }
    else document.getElementById('err').innerHTML = "* Chiều cao và Cân nặng không hợp lệ";
}