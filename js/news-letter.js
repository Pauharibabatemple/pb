
const forms = document.getElementById('newsletterform');

    forms.addEventListener('submit', async function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Create a FormData object to collect form data
      const formData = new FormData(forms);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            alert('Thank you for subscribing to our newsletter.');
            // window.location.href = './Success';
            forms.reset(); // Reset the form
          } else {
            alert('Something went wrong. Please try again later.');
          }
        } else {
          alert('Failed to submit the form. Please check your network.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    });


