
document.addEventListener('DOMContentLoaded', () => {

// Function to fetch data from the API
async function fetchData() {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await fetch('http://api.mahoosively.gay/getTopTracks');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to render data in cards
async function renderData() {
  const container = document.querySelector('.getTopTracks');
  const data = await fetchData();

  if (!data) {
    return;
  }

  data.forEach(item => {
    const link = document.createElement('a')
    link.href = item.urlToSong;
    link.target = "_blank";
    const card = document.createElement('article');
    card.classList.add('cardSongs');

    const title = document.createElement('h4');
    title.textContent = item.songName;

    const body = document.createElement('p');
    body.textContent = item.artist;

    card.appendChild(title);
    card.appendChild(body);
    link.appendChild(card)
    container.appendChild(link);
  });
}

// Call the renderData function to display data
renderData();
// // document.addEventListener('DOMContentLoaded', () => {
});
