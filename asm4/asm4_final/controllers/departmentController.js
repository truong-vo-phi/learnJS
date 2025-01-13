$(document).ready(function() {
    $.get('http://localhost:8080/departments', function getDepartment(departments) {
        let table = $("<table>").addClass("table");
        let trNew = $("<tr>");
        let stt = 0;
        let headers = [
            "STT",
            "ID",
            "Name",
            "Number of Staff"
        ];

        headers.forEach(header => {
            trNew.append($("<td>").text(header));
        })

        table.append(trNew);

        $.each(departments, function(index) {
            const departmentData = departments[index]
            let trNew = $("<tr>").attr("id",`data${stt}`);

            console.log(departmentData);

            trNew.append($("<td>").text(stt));
            trNew.append($("<td>").text(departmentData.id));
            trNew.append($("<td>").text(departmentData.name));
            trNew.append($("<td>").text(departmentData.numberOfStaff));
            stt++;

            table.append(trNew);
        });
        $("#department").append(table)
    });

    $("#getDepartmentStaff").on("click", function getDepartmentStaff () {
        $.get('http://localhost:8080/staffs', function (staffs) {
            $("#departmentStaff table").remove();
            const departmentId = $("#departmentStaffId").val().trim();
            let table = $("<table>").addClass("table");
            table.append($("<tr>").append($("<th>").text("Name")));

            console.log(departmentId);
            $.each(staffs, function(index) {
                const staffData = staffs[index]
                if (staffData.departmentId === departmentId) {
                    console.log(staffData);
                    table.append($("<tr>").append($("<td>").text(staffData.name)));
                    console.log('Successful');
                } else {
                    console.log('Dont have staff in this department');
                }
            });
            $("#departmentStaff").append(table)
        });
    });
});
