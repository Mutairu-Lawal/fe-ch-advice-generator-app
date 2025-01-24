fetchAndLoadData();

document.querySelector('.js-shuffle-btn').addEventListener('click', () => {
  fetchAndLoadData();
});

async function fetchAndLoadData() {
  try {
    const API = 'https://api.adviceslip.com/advice?timestamp=' + Date.now();
    const response = await fetch(API);
    const data = await response.json();
    const advice = data.slip;

    document.querySelector('.advice-details').innerHTML = `
      <h3>advice #${advice.id}</h3>
      <h1>
      ${advice.advice}
      </h1>
    `;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
