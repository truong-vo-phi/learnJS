$(document).ready(function() {
    $.get('http://localhost:8080/staffs', function(staffs) {
        const url = new URL(window.location.href);
        const queryParams = new URLSearchParams(url.search);
        const staffId = queryParams.get('id');
        console.log("Staff ID from URL:", staffId);
        const staff = staffs.find(staff => staff.id == staffId);

        if (staff) {
            const imageStaff = $("<img>").attr("src", staff.image || "https://fvc-dn-coding.web.app/images/person-icon.png").css("width", "135px");
            $("#image").append(imageStaff); 
            const noTimeDob = new Date(staff.doB);
            const noTimeStartDate = new Date(staff.startDate);

            var table = $("<table>").addClass("table");
            table.append($("<tr>").text(`ID: ${staff.id}`));
            table.append($("<tr>").text(`Họ và tên: ${staff.name}`));
            table.append($("<tr>").text(`Ngày tháng năm sinh: ${noTimeDob.toLocaleDateString()}`));
            table.append($("<tr>").text(`Mức lương: ${staff.salaryScale}`));
            table.append($("<tr>").text(`Ngày bắt đầu làm việc: ${noTimeStartDate.toLocaleDateString()}`));
            table.append($("<tr>").text(`Mã phòng ban: ${staff.departmentId}`));
            table.append($("<tr>").text(`Số ngày nghỉ phép: ${staff.annualLeave}`));
            table.append($("<tr>").text(`Số giờ làm thêm: ${staff.overTime}`));

            $("#root").append(table);
        } else {
            $("#root").html("<p>Staff not found.</p>");
        }
    });
});