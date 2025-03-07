document.addEventListener("DOMContentLoaded", function () {
    const coursesList = document.getElementById("courses-list");
    const searchBar = document.getElementById("searchBar");

    fetch("https://raw.githubusercontent.com/nglgrclm/AppDev/refs/heads/main/courses.json")
        .then(response => response.json())
        .then(data => {
            let courses = data.courses;
            displayCourses(courses);

            searchBar.addEventListener("keyup", function (e) {
                const searchTerm = e.target.value.toLowerCase();
                const filteredCourses = courses.filter(course => 
                    course.name.toLowerCase().includes(searchTerm) || 
                    course.code.toLowerCase().includes(searchTerm)
                );
                displayCourses(filteredCourses);
            });
        })
        .catch(error => console.error("Error loading courses:", error));

    function displayCourses(courses) {
        coursesList.innerHTML = ""; 
        courses.forEach(course => {
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("course");
            courseDiv.innerHTML = `<h4>${course.code} - ${course.name}</h4><p>Units: ${course.units}</p>`;
            coursesList.appendChild(courseDiv);
        });
    }
});
