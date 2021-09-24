tasks = [
    {
        task: 'Mobile',
        startDate: '23.06.2021',
        endDate: '30.06.2021',
        employee: 'Nizom',
        status: 'pending',
        isRejected:false
    },
    {
        task: 'Desktop',
        startDate: '23.06.2021',
        endDate: '30.06.2021',
        employee: 'Ahmad',
        status: 'doing',
        isRejected:false
    },
];
let tempStatus=null;

function drawList() {
    document.getElementById('pendingTask').innerHTML = '';
    document.getElementById('doingTask').innerHTML = '';
    document.getElementById('doneTask').innerHTML = '';
    document.getElementById('rejectedTask').innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === 'pending') {
            document.getElementById('pendingTask').innerHTML +=
                '<div>' +
                '<h6>' + tasks[i].task + (tasks[i].isRejected ? '<span class="badge badge-danger badge-pill">rejected</span>':'') + '</h6>' +
                '<h6>' + 'Xodim: ' + tasks[i].employee + '</h6>' +
                '<h6>' + 'startDate: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'endDate: ' + tasks[i].endDate + '</h6>' +
                '<select id="select'+ i +'" class="form-control">' +
                '<option disabled selected>tanlang</option>' +
                '<option value="doing">doing</option>' +
                '<option value="done">done</option>' +
                '</select>' +
                '<button onclick="editTask('+ i +')" type="button" class="btn btn-warning mt-3">Edit</button>' +
                '<button onclick="deleteTask(' + i + ')" type="button" class="btn btn-danger ml-3 mt-3">Delete</button>' +
                '<div class="line"></div>' +
                '</div>'
        }
        else if (tasks[i].status === 'doing') {
            document.getElementById('doingTask').innerHTML +=
                '<div>' +
                '<h6>' + tasks[i].task + (tasks[i].isRejected ? '<span class="badge badge-danger badge-pill">rejected</span>':'') +'</h6>' +
                '<h6>' + 'Xodim: ' + tasks[i].employee + '</h6>' +
                '<h6>' + 'startDate: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'endDate: ' + tasks[i].endDate + '</h6>' +
                '<select id="select'+ i +'"   class="form-control">' +
                '<option disabled selected>tanlang</option>' +
                '<option value="pending">pending</option>' +
                '<option value="done">done</option>' +
                '</select>' +
                '<button onclick="editTask('+ i +')" type="button" class="btn btn-warning mt-3">Edit</button>' +
                '<button onclick="deleteTask(' + i + ')" type="button" class="btn btn-danger ml-3 mt-3">Delete</button>' +
                '<div class="line"></div>' +
                '</div>'

        }
        else if (tasks[i].status === 'done') {
            document.getElementById('doneTask').innerHTML +=
                '<div>' +
                '<h6>' + tasks[i].task + (tasks[i].isRejected ? '<span class="badge badge-danger badge-pill">rejected</span>':'') +'</h6>' +
                '<h6>' + 'Xodim: ' + tasks[i].employee + '</h6>' +
                '<h6>' + 'startDate: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'endDate: ' + tasks[i].endDate + '</h6>' +
                '<button onclick="rejectedTask('+ i +')" type="button" class="btn btn-danger mt-3">Rejected</button>' +
                '<div class="line"></div>' +
                '</div>'
        } else {
            document.getElementById('rejectedTask').innerHTML +=
                '<div>' +
                '<h6>' + tasks[i].task + '</h6>' +
                '<h6>' + 'Xodim: ' + tasks[i].employee + '</h6>' +
                '<h6>' + 'startDate: ' + tasks[i].startDate + '</h6>' +
                '<h6>' + 'endDate: ' + tasks[i].endDate + '</h6>' +
                '<select id="select'+ i +'"  class="form-control">' +
                '<option disabled selected>tanlang</option>' +
                '<option value="doing">doing</option>' +
                '<option value="pending">pending</option>' +
                '</select>' +
                '<button onclick="editTask('+ i +')" type="button" class="btn btn-warning mt-3">Edit</button>' +
                '<div class="line"></div>' +
                '</div>'
        }
    }
}

drawList();

function addTask() {
    let task = document.forms['myForm']['task'].value;
    let startDate = document.forms['myForm']['startDate'].value;
    let endDate = document.forms['myForm']['endDate'].value;
    let employee = document.forms['myForm']['employee'].value;
    let status = document.forms['myForm']['status'].value;
    if (task.trim().length > 0 && startDate.trim().length > 0
        && endDate.trim().length > 0 && employee !== 'Tanlang' && status !== 'Tanlang') {
        let newObj = {
            task,
            startDate,
            endDate,
            employee,
            status,
            isRejected:false
        };
        tasks.push(newObj);
        drawList();
        document.forms['myForm'].reset();
    } else {
        alert('Formani toldiring')
    }
}

function deleteTask(deletingIndex) {
    tasks.splice(deletingIndex, 1);
    drawList()
}

function editTask(editingIndex) {
    if (document.getElementById('select'+editingIndex).value !=='tanlang'){
        tasks[editingIndex].status=document.getElementById('select'+editingIndex).value;
    }
    drawList()
}

function rejectedTask(rejecTask) {
    tasks[rejecTask].status='rejected';
    tasks[rejecTask].isRejected=true;
    drawList()
}

$(document).ready(function () {
    $('#startModal').modal('show');
});
