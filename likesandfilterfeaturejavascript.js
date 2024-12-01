// Array containing quotes with like count and author name
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", likes: 0 },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", likes: 0 },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", likes: 0 },
  { text: "Get busy living or get busy dying.", author: "Stephen King", likes: 0 },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West", likes: 0 }
];

// Populate filter options dynamically
const filterSelect = document.getElementById('filter-author');
const uniqueAuthors = [...new Set(quotes.map(quote => quote.author))];
uniqueAuthors.forEach(author => {
  const option = document.createElement('option');
  option.value = author;
  option.textContent = author;
  filterSelect.appendChild(option);
});

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById('text').innerText = `"${randomQuote.text}"`;
  document.getElementById('author').innerText = `- ${randomQuote.author}`;
}

// Function to display the most liked quote
function displayMostLikedQuote() {
  let mostLikedQuote = quotes.reduce((prev, current) => (current.likes > prev.likes) ? current : prev);
  document.getElementById('text').innerText = `"${mostLikedQuote.text}"`;
  document.getElementById('author').innerText = `- ${mostLikedQuote.author}`;
}

// Function to filter quotes by author
function filterQuotesByAuthor() {
  const selectedAuthor = filterSelect.value;
  const filteredQuotes = selectedAuthor ? quotes.filter(quote => quote.author === selectedAuthor) : quotes;
  if (filteredQuotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const randomQuote = filteredQuotes[randomIndex];
    document.getElementById('text').innerText = `"${randomQuote.text}"`;
    document.getElementById('author').innerText = `- ${randomQuote.author}`;
  } else {
    alert('No quotes found for the selected author.');
  }
}

// Call displayRandomQuote on window load
window.onload = displayRandomQuote;

// Event listeners
document.getElementById('new-quote').addEventListener('click', displayRandomQuote);
document.getElementById('most-liked').addEventListener('click', displayMostLikedQuote);
document.getElementById('filter-button').addEventListener('click', filterQuotesByAuthor);

// Add "like" functionality (could be expanded as needed)
function likeQuote() {
  const currentText = document.getElementById('text').innerText;
  const currentQuote = quotes.find(quote => quote.text === currentText);
  if (currentQuote) {
    currentQuote.likes++;
  }
}

// You can add a button for "Like" and attach the `likeQuote()` function to it in HTML if needed.
