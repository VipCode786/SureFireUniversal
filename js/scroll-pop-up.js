const contactForm = document.getElementById('contactFormScroll');
const overlay = document.querySelector('.scroll-show-popUp');
const closeButton = document.getElementById('closeButton');
let isOpen = false;
let hasScrolledPast20Percent = false;

window.addEventListener('scroll', () => {
    if (!hasScrolledPast20Percent && window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100 >= 20) {

        console.log(overlay.length)
        overlay.style.display = 'block'; // Show the overlay with blur effect
        contactForm.style.display = 'block';
        isOpen = true;
        hasScrolledPast20Percent = true;
    }

    if (isOpen && window.scrollY === 0) {
        overlay.style.display = 'none'; // Show the overlay with blur effect
        contactForm.style.display = 'none';
        isOpen = false;
    }
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none'; // Show the overlay with blur effect
    contactForm.style.display = 'none';
    isOpen = false;
});




 document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("scrollPhpForm");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // You can use an XMLHttpRequest or Fetch API to submit the form data to scrollForm.php.
            // After a successful submission, you can display an alert.
            // Here's a simple example using Fetch API:
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
            })
                .then(function (response) {
                    if (response.status === 200) {
                        alert("Form submitted successfully!");
                        overlay.style.display = 'none'; // Show the overlay with blur effect
                        contactForm.style.display = 'none';
                        isOpen = false;
                        // You can close the pop-up or reset the form here if needed.
                    } else {
                        alert("Form submission failed. Please try again.");
                        overlay.style.display = 'none'; // Show the overlay with blur effect
                        contactForm.style.display = 'none';
                        isOpen = false;
                    }
                })
                .catch(function (error) {
                    alert("An error occurred during form submission.");
                });
        });
    });



    
   const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
     initialCountry: "in"
   });


   document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the document body
    document.body.addEventListener('click', function (event) {
        // Check if the clicked element is an anchor tag with an href attribute
        if (event.target.tagName === 'A' && event.target.getAttribute('href')) {
            // Allow default behavior for anchor tags with href
            return;
        }

        event.preventDefault(); // Prevent the default action for other elements

        // Your custom actions when anything on the page is clicked
        console.log('Element clicked:', event.target);

        // You can perform any other actions here without causing a page refresh
    });
}); 


