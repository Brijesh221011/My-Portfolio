function downloadResume() {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1h2bpzpthw08Rr-19gSzQBJvQfMYPrECl";
    link.download = "Brijesh_Yadav_Resume.pdf";
    link.click();
}

function visitGithub() {
    window.open("https://github.com/Brijesh221011", "_blank");
}

function submitForm(e) {
    e.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields before submitting.");
        return;
    }

    alert("Message sent successfully!\nThank you " + name + " 😊");

    document.getElementById("contactForm").reset();
}

    /* Hamburger menu toggle */
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("navMenu");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      /* Close menu when a link is clicked */
      const navLinks = navMenu.querySelectorAll("a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });
