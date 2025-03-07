document.getElementById("searchBar").addEventListener("keyup", searchActivities);

function searchActivities() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let buttons = document.querySelectorAll(".btn-activity");

    buttons.forEach(button => {
        let text = button.textContent.toLowerCase();
        if (text.includes(input)) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    });
}
