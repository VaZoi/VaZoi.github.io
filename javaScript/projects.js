function searchProjects() {
    var input = document.getElementById("search-input").value.toLowerCase();
    var projects = document.getElementsByClassName("project");

    for (var i = 0; i < projects.length; i++) {
        var projectTitle = projects[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (projectTitle.includes(input)) {
            projects[i].style.display = "block";
        } else {
            projects[i].style.display = "none";
        }
    }
}