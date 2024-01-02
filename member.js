function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var experience = document.getElementById("experience");
  var education = document.getElementById("education");
  var contact = document.getElementById("contact");
  var memberBtn = document.getElementById("memberBtn");
  var skillsBtn = document.getElementById("skillsBtn");
  var experienceBtn = document.getElementById("experienceBtn");
  var educationBtn = document.getElementById("educationBtn");
  var contactBtn = document.getElementById("contactBtn");

  member.style.display = "block";
  skills.style.display = "none";
  experience.style.display = "none";
  education.style.display = "none";
  contact.style.display = "none";

  memberBtn.style.backgroundColor = "#f1f1f1";
  skillsBtn.style.backgroundColor = "#ffffff";
  experienceBtn.style.backgroundColor = "#ffffff";
  educationBtn.style.backgroundColor = "#ffffff";
  contactBtn.style.backgroundColor = "#ffffff";
}