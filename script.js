document.getElementById("toggleActivities").addEventListener("click", function() {
    var content = document.getElementById("activityContent");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        this.textContent = "HIDE MY ACTIVITIES"; // Change button text
    } else {
        content.style.display = "none";
        this.textContent = "VIEW MY ACTIVITIES"; // Revert button text
    }
});
