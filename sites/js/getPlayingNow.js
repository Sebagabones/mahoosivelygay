document.addEventListener('DOMContentLoaded', () => {
  // Function to fetch data from the API
  async function fetchData() {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response = await fetch('https://api.mahoosively.gay/getNowPlaying');

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const ready = document.getElementById('ready');
  function showLoad(){
    ready.ariaBusy = true;

  }

  function hideLoad(){
    ready.ariaBusy = false;
  }
  // Function to render data in cards
  async function renderData() {
    const container = document.querySelector('.playingNow');
    const data = await fetchData();

    if (!data) {
      return;
    }

    item = data;
    const card = document.createElement('div');
    card.classList.add('nowPlaying');
    const paragraph = document.createElement('p');
    if (item.isPlaying === "true") {
      paragraph.textContent = `I am currently listening to ${item.songName}, performed by ${item.artist}, and you can see my top songs below:`;

    }
    else {
      paragraph.textContent = `Sadly, I am currently not listening to anything - but you can still see my top songs below:`;

    }

    card.appendChild(paragraph);
    container.appendChild(card);
    hideLoad()
  }

  // Call the renderData function to display data
  showLoad()
  renderData();

  // // document.addEventListener('DOMContentLoaded', () => {
});
