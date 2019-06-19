function cal(num1, num2) {
    var rem, px;
    if (num1 != "" && num2 != "") {
        if (num1 != 0) {
            rem = num2 / num1;
            px = num2 * 8 / 6;
        }
        else {
            swal("The number cannot be 0!", "", "warning");
            return;
        }
    }
    else {
        swal("The numbers is invalid!", "", "warning");
        return;
    }
    document.getElementById("result_rem").innerHTML = rem + " rem - " + px + " px";
    //document.getElementById("result_px").innerHTML = px + " px";
}

function mensaje() {

    swal({
        title: 'Título',
        text: 'Mensaje de texto',
        html: '<p>Mensaje de texto con <strong>formato</strong>.</p>',
        type: 'success',
        timer: 3000,
    });
}

function mensaje2() {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
}