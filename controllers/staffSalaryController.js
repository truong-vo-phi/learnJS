$(document).ready(function() {
    $.get('http://localhost:8080/staffsSalary', function getStaffsSalary(staffsSalary) {
        let table = $("<table>").addClass("table");
        let trNew = $("<tr>");
        let stt = 0;
        let headers = [
            "STT",
            "ID",
            "Name",
            "Salary"
        ];

        headers.forEach(header => {
            trNew.append($("<th>").text(header));
        })//

        table.append(trNew);

        $.each(staffsSalary, function(index) {
            const staffSalaryData = staffsSalary[index]
            let trNew = $("<tr>").attr("id",`data${stt}`);

            console.log(staffSalaryData);

            trNew.append($("<td>").text(stt));
            trNew.append($("<td>").text(staffSalaryData.id));
            trNew.append($("<td>").text(staffSalaryData.name));
            trNew.append($("<td>").text(staffSalaryData.salary));
            stt++;

            table.append(trNew);
        });//
        $("#staffsSalary").append(table)
    });//
});//