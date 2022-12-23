function displayinfo() {
    var name = document.getElementById("name").value;
    var institution = document.getElementById("institution").value;
    var gpa = document.getElementById("gpa").value;
    var year = document.getElementById("year").value;

    if(!name || !institution || !gpa || !year){
        alert("Please Fill The Boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = institution;
    cell3.innerHTML = gpa;
    cell4.innerHTML = year;

    row++;
}