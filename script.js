// Get elements by their IDs
var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
var skillsSection = document.getElementById("skills");
// Add an event listener for the button to toggle skills visibility
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection) {
        // Toggle display between "block" and "none"
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    }
});
