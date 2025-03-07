document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/nglgrclm/AppDev/main/courses.json")
        .then(response => response.json())
        .then(data => {
            displayCourses(data.courses);
        })
        .catch(error => console.error("Error fetching JSON:", error));

    document.getElementById("searchBar").addEventListener("keyup", searchCourses);
});

function displayCourses(courses) {
    let container = document.getElementById("courses-list");
    container.innerHTML = ""; // Clear previous content

    courses.forEach(course => {
        let courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.innerHTML = `<h4>${course.year} - ${course.semester}</h4>
                                   <ul>${course.subjects.map(subject => `<li>${subject}</li>`).join("")}</ul>`;
        container.appendChild(courseElement);
    });
}

function searchCourses() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        let text = course.textContent.toLowerCase();
        course.style.display = text.includes(input) ? "block" : "none";
    });
}
