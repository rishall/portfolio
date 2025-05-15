let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



function validateForm() {
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const subject = document.getElementById('emailSubject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        alert("Full name is required.");
        return false;
    }

    if (!email) {
        alert("Email address is required.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phoneNumber) {
        alert("Phone number is required.");
        return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (!subject) {
        alert("Email subject is required.");
        return false;
    }

    if (!message) {
        alert("Message is required.");
        return false;
    }

    // If all validations pass
    sendEmail(name, email, phoneNumber, subject,message);
    return false;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form behavior
});

  function sendEmail(name, email, phoneNumber, subject,message) {
    const serviceID = "service_nmh1qqs"; // Replace with your EmailJS Service ID
    const templateID = "template_hiwl8us"; // Replace with your EmailJS Template ID

    emailjs
      .send(serviceID, templateID, { name, email,phoneNumber, subject, message })
      .then(() => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
      });
  }