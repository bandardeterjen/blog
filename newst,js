// script.js

// Simulated AJAX call to fetch news headlines
function fetchNews() {
  // Replace this with your actual API endpoint
  const apiEndpoint = "https://api.example.com/news"; // Example API URL

  // Simulate fetching data with a timeout (replace with fetch or XMLHttpRequest)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Breaking News: Stock Market Hits All-Time High",
        "New Study Reveals Benefits of Meditation",
        "Tech Giant Announces Revolutionary AI Tool",
        "Global Climate Summit Kicks Off in Paris",
        "Local Community Celebrates Annual Festival",
      ]);
    }, 1000);
  });
}

// Populate the news ticker
async function populateTicker() {
  const newsList = await fetchNews();
  const ticker = document.getElementById("news-ticker");

  // Clear existing content
  ticker.innerHTML = "";

  // Append each news item to the ticker
  newsList.forEach((headline) => {
    const listItem = document.createElement("li");
    listItem.textContent = headline;
    ticker.appendChild(listItem);
  });

  // Restart the animation after updating content
  restartAnimation(ticker);
}

// Restart CSS animation
function restartAnimation(element) {
  element.style.animation = "none";
  void element.offsetHeight; // Trigger reflow
  element.style.animation = null;
}

// Initialize the ticker
document.addEventListener("DOMContentLoaded", () => {
  populateTicker();

  // Optionally refresh the ticker every 5 minutes
  setInterval(populateTicker, 5 * 60 * 1000);
});
