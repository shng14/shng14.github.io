function cal(num1, num2) {
    var res;
    if (num1 != "" && num2 != "")
    {
        if (document.getElementById("callist").value == "cong")
        {
            res = parseInt(num1) + parseInt(num2);
        }
        else if (document.getElementById("callist").value == "tru")
        {
            res = num1 - num2;
        }
        else if (document.getElementById("callist").value == "nhan")
        {
            res = num1 * num2;
        }
        else if (document.getElementById("callist").value == "chia")
        {
            if (num2 != 0)
            {
                res = num1 / num2;
            }
            else
            {
                swal("The Second number cannot be 0!", "", "warning");
                return;
            }
        }
    }
    else
    {
        swal("The numbers is invalid!", "", "warning");
        return;
    }
    document.getElementById("result").innerHTML = res;
}

function ketqua() {
    var res1 = false;
    var res2 = false;
    var res3 = false;
    var point = 0;
    var s_one;
    var s_two;
    var s_three;
    var cau1 = document.getElementsByName("s1");
    var cau2 = document.getElementsByName("s2");
    var cau3 = document.getElementsByName("s3");
    for (var i = 0; i < cau1.length; i++)
    {
        if (cau1[i].checked == true)
        {
            s_one = cau1[i].value;
        }
        if (cau2[i].checked == true)
        {
            s_two = cau2[i].value;
        }
        if (cau3[i].checked == true)
        {
            s_three = cau3[i].value;
        }
    }

    if (s_one == 15)
    {
        //res1 = true;
        point += 20;
    }
    if (s_two == 24)
    {
        //res2 = true;
        point += 40;
    }
    if (s_three == 2400)
    {
        //res3 = true;
        point += 40;
    }
    swal(point.toString(), "Good job!", "success");
    //document.getElementById("point").innerHTML = point;
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