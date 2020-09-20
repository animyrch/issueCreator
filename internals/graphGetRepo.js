const axios = require('axios');
const githubURL = "https://api.github.com/graphql";

const getRepo = async (query, token) => 
  await axios.post(githubURL, {query: query}, {headers: token})
    .then(({ data }) => data.data)
    .catch(error => {
      console.log(error);
    });

module.exports = { getRepo };
