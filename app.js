setInterval(() => {
  const time = document.querySelector(".digital-clock")
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds =date.getSeconds();
  let AM_PM = "AM"

  if (hours > 11){
    AM_PM = "PM";
    hours = hours-12;
  }
  if (hours == 0){
    hours = 12;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (hours < 10){
    hours = "0" + hours;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds + " " + AM_PM;
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  // Replace with your Pexels API Key
  const pexelsApiKey = 'NIlYLmB6LLfeNvAdbjAgwFU9pNT9Qb6S0BHjG3OlNii7gQU36at02pXv';

  // Array of different search queries for each image
  const queries = ["soccer match", "basketball", "boxing fighters", "gadgets","robot","rockets", "exercise","healthy food","park"];

  // Function to fetch a random image from Pexels based on the search query
  async function getPexelsImage(query) {
      const page = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1&page=${page}`, {
          headers: {
              Authorization: pexelsApiKey
          }
      });

      const data = await response.json();
      return data.photos[0].src.medium; // Return the URL of the medium-sized image
  }

  // Fetch and set different images for each search query
  images.forEach(async (image, index) => {
      try {
          const sportsImageUrl = await getPexelsImage(queries[index]); // Use different queries for each image
          image.src = sportsImageUrl;
          image.width = 1000;  // Set width to 1000px (adjust as needed)
          image.height = 500;  // Set height to 500px (adjust as needed)
      } catch (error) {
          console.error("Failed to fetch image:", error);
      }
  });
});



