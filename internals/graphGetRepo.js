const axios = require('axios');
const githubURL = "https://api.github.com/graphql";
const repoDetails = `{ 
  repository(owner: "animyrch", name: "issueCreator"){
    name,
    url,
    id,
  }
}`;
const token = { Authorization: 'bearer 48b6262e33b06aa63a07a06b227668175a5a0ea5' };

const getRepo = async (query, token) => 
  await axios.post(githubURL, {query: query}, {headers: token})
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

module.exports = { getRepo };
