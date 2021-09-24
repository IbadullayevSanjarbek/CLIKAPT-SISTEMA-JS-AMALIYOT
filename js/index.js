$(document).ready(function () {
    $('#mainModal').modal('show');
});

let mainSum = '';


function startDate() {
    let sum = document.forms['mainForm']['startCash'].value;
    let name = document.forms['mainForm']['fullName'].value;

    if (sum !== '' && name !== '') {
        mainSum = sum;
        document.getElementById('startSum').innerHTML = mainSum;
        document.getElementById('startName').innerHTML = name;
        $('#mainModal').modal('hide')

    } else {
        alert("Formani to'ldiring")
    }
}

