const API_URL = 'https://starwars.egghead.training/';

const output = document.getElementById('output');
const spinner = document.getElementById('spinner');

async function queryAPI(endpoint) {
const response = await fetch(API_URL + endpoint)
  if (response.ok) {
    return response.json()
  }
  
  throw Error('Unsuccessful response');
}

async function main() {
  try {
    const [films, planets] = await Promise.all([
      queryAPI('films'),
      queryAPI('planets')
    ])
      
    output.innerText = 
    `${films.length} films ` +
    `${planets.length} planets`;
  } catch(error) {
    console.warn(error);
    output.innerText = ':(';

  } finally {
    spinner.remove();
  }
}

main();