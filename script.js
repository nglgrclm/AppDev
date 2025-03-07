document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/nglgrclm/AppDev/main/courses.json") // Fetch JSON file
        .then(response => response.json())
        .then(data => {
            displayCourses(data.courses); // Show courses on page load
        })
        .catch(error => console.error("Error fetching JSON:", error));

    document.getElementById("searchBar").addEventListener("keyup", searchCourses);
});

// Function to display courses
function displayCourses(courses) {
    let container = document.getElementById("courses-list");
    container.innerHTML = ""; // Clear previous content

    courses.forEach(course => {
        let courseElement = document.createElement("div");
        courseElement.classList.add("course");
        courseElement.innerHTML = `<h4>${course.year} - ${course.semester}</h4>
                                   <ul>${course.subjects.map(subject => `<li class="subject">${subject}</li>`).join("")}</ul>`;
        container.appendChild(courseElement);
    });
}

// Function to filter courses based on search input
function searchCourses() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        let courseText = course.textContent.toLowerCase();
        course.style.display = courseText.includes(input) ? "block" : "none";
    });
}
