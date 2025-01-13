$(document).ready(function() {
    $.get('http://localhost:8080/staffs', function getStaff(staffs) {
        $.each(staffs, function(index) {
            const templateString = `
                <article class="card">
                    <a href="information.html?id=${staffs[index].id}">
                        <img src="${staffs[index].image}" alt="${staffs[index].name}">
                        <h2>${staffs[index].name}</h2>
                    </a>
                </article>
            `;
            $('#root').append(templateString);
        });//
});//

    $("#enter").on("click", function updateStaff() {
        const staffData = {
            name: $("#fullName").val(),
            doB: $("#dob").val(),
            salaryScale: $("#salaryScale").val(),
            startDate: $("#startDate").val(),
            departmentId: $("#departmentId").val(),
            annualLeave: $("#annualLeave").val(),
            overTime: $("#overTime").val(),
            image: $("#image").val()
        };

        $.post({
            url: "http://localhost:8080/staffs",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(staffData),
            success: function(response) {
                alert("Staff added successfully!");
                console.log("Success:", response);
            },
            error: function(error) {
                alert("Failed to add staff. Please try again.");
                console.error("Error:", error);
            }
        });//
    });

    $("#updateFullName").on("click", function() {
        updateStaffData("name", $("#fullName").val());
        location.reload();
    });

    $("#updateDob").on("click", function() {
        updateStaffData("doB", $("#dob").val());
        location.reload();
    });

    $("#updateSalaryScale").on("click", function() {
        updateStaffData("salaryScale", $("#salaryScale").val());
        location.reload();
    });

    $("#updateStartDate").on("click", function() {
        updateStaffData("startDate", $("#startDate").val());
        location.reload();
    });

    $("#updateDepartmentId").on("click", function() {
        updateStaffData("departmentId", $("#departmentId").val());
        location.reload();
    });

    $("#updateAnnualLeave").on("click", function() {
        updateStaffData("annualLeave", $("#annualLeave").val());
        location.reload();
    });

    $("#updateOverTime").on("click", function() {
        updateStaffData("overTime", $("#overTime").val());
        location.reload();
    });

    $("#updateImage").on("click", function() {
        updateStaffData("image", $("#image").val());
        location.reload();
    });

    function updateStaffData(field, value) {
        const staffEachData = {
            id: $("#numberId").val(),
            [field]: value,
        };

        $.ajax({
            url: "http://localhost:8080/staffs",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(staffEachData),
            type: 'PATCH',  
            success: function(response) {
                alert("Staff updated successfully!");
                console.log("Success:", response);
            },
            error: function(error) {
                alert("Failed to update staff. Please try again.");
                console.error("Error:", error);
            }
        });
    }

    $("#remove").on("click", function deleteStaff() {
        const staffId = $("#numberId").val();

        fetch(`http://localhost:8080/staffs/${staffId}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                alert("Staff deleted successfully!");
                console.log("Success:", response);
                $("#numberId").val('');
            } else {
                alert("Failed to delete staff. Please try again.");
                console.error("Error:", response);
            }
        }).catch((error) => {
            console.error("Error:", error);
        });
    });
});
