// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Typing Effect
const typingText = document.querySelector(".typing");
const roles = ["IoT Developer", "Web Developer", "Tech Enthusiast"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
    }

    typingText.textContent = currentRole;

    if (j === roles[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === roles.length) i = 0;
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();
