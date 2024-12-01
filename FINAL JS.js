// Array containing quotes
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById('text').innerText = `"${randomQuote.text}"`;
  document.getElementById('author').innerText = `- ${randomQuote.author}`;
}

// Display a random quote when the page loads
window.onload = displayRandomQuote;

// Add event listener to the "New Quote" button
document.getElementById('new-quote').addEventListener('click', displayRandomQuote);

