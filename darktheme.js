// Select the toggle button
const toggleButton = document.getElementById('toggle-mode');

// Check if user has a preferred theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
}

// Toggle theme function
toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Set the new theme
  document.body.setAttribute('data-theme', newTheme);

  // Save the theme preference to localStorage
  localStorage.setItem('theme', newTheme);
});
