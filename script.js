
        // Show the contact modal when "Hire Me" button is clicked
        document.getElementById("contactButton").addEventListener("click", function() {
            document.getElementById("contactModal").style.display = "block"; // Show the modal
        });
    
        // Close the modal when the "x" (close) button is clicked
        document.querySelector(".close").addEventListener("click", function() {
            document.getElementById("contactModal").style.display = "none"; // Hide the modal
        });
    
        // Close the modal when clicking outside of it
        window.addEventListener("click", function(event) {
            const modal = document.getElementById("contactModal");
            if (event.target == modal) {
                modal.style.display = "none"; // Hide the modal
            }
        });

        const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    if (burger) { // Check if burger exists on the page
      burger.addEventListener("click", function() {
        document.body.classList.toggle("show-nav");
      });
    }
  });
  
