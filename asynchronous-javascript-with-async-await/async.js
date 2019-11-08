const fetch = require('node-fetch');

// class GitHubApiClient {
//   async fetchUser(handle)  {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     return await response.json();
//   }
// }

// (async () => {
//   const client = new GitHubApiClient();
//   const user = await client.fetchUser('freddieduffield')
//   console.log(user.name);
//   console.log(user.location);
// })();


async function fetchFromGitHub(endpoint)  {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  const body = await response.json();

  if(response.status !== 200) 
  throw Error(body.message)

  return body;  
}  

async function showUserAndRepos(handle) {
  const user = await fetchFromGitHub(`/users/${handle}`);
  const repos = await fetchFromGitHub(`/users/${handle}/repos`);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos('freddieduffield');

// fetchGitHubUser('idonotexis£££t')
//   .then(user => {
//     console.log(user);
//   })
//   .catch(err => {
//     console.error(`Error: ${err.message}`);
//   });

// async function showGitHubUser(handle) {
//   try {
//     const user = await fetchGitHubUser(handle);
//     console.log(user.name);
//     console.log(user.location);  
//   } catch (error) {
//     console.error(`Error: ${err.message}`);
//   }
// }
