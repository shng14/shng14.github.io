function cal(num1, num2) {
    var res;
    if (document.getElementById("callist").value == "cong") {
        res = parseInt(num1) + parseInt(num2);
    }
    else if (document.getElementById("callist").value == "tru") {
        res = num1 - num2;
    }
    else if (document.getElementById("callist").value == "nhan") {
        res = num1 * num2;
    }
    else if (document.getElementById("callist").value == "chia") {
        if (num2 != 0)
        {
            res = num1 / num2;
        }
        else
        {
            swal("The Second number cannot be 0!");
            return;
        }
    }
    document.getElementById("result").innerHTML = res;
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