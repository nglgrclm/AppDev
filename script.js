document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/nglgrclm/AppDev/refs/heads/main/courses.json") 
        .then(response => response.json())
        .then(data => {
            displayCourses(data.courses); 
        })
        .catch(error => console.error("Error fetching JSON:", error));

    document.getElementById("searchBar").addEventListener("keyup", searchCourses);
});

function displayCourses(courses) {
    let container = document.getElementById("courses-list");
    container.innerHTML = ""; 

    courses.forEach(course => {
        let courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.innerHTML = `<h4>${course.code} - ${course.name}</h4>
                                   <p>Units: ${course.units}</p>`;
        container.appendChild(courseElement);
    });
}

function searchCourses() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        let text = course.textContent.toLowerCase();
        if (text.includes(input)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}