document.addEventListener("DOMContentLoaded", function () {
    const activityBtn = document.getElementById("activityBtn");
    const activityContent = document.getElementById("activityContent");

    activityBtn.addEventListener("click", function () {
        // Toggle visibility
        if (activityContent.style.display === "none" || activityContent.style.display === "") {
            activityContent.style.display = "block";
        } else {
            activityContent.style.display = "none";
        }
    });
});
