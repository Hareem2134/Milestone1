// Get elements by their IDs
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skills");

// Add an event listener for the button to toggle skills visibility
toggleSkillsBtn?.addEventListener("click", () => {
  if (skillsSection) {
    // Toggle display between "block" and "none"
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  }
});
