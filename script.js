 // ================= ACTIVE NAVIGATION HIGHLIGHT =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// ================= SMOOTH SCROLL FIX =================
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth"
    });
  });
});


// ================= WHATSAPP DOUBT FORM =================
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = form.querySelector("input[placeholder='Your Name']").value;
  const grade = form.querySelector("input[placeholder='Grade']").value;
  const doubt = form.querySelector("textarea").value;

  const phoneNumber = "94767273183"; // your WhatsApp number (Sri Lanka format)

  const message = `📚 New Student Doubt:%0A
👤 Name: ${name}%0A
🎓 Grade: ${grade}%0A
❓ Doubt: ${doubt}`;

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, "_blank");
});


// ================= SIMPLE FADE ANIMATION ON SCROLL =================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "0.8s ease";
  observer.observe(sec);
});
