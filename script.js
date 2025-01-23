// Create the 'Back to Top' button element
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '16px';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.zIndex = '1000';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.backgroundColor = '#007BFF';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';

// Append the button to the body
document.body.appendChild(backToTopButton);

// Function to handle scroll behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Function to scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
