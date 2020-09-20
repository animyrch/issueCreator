const axios = require('axios');
const githubURL = "https://api.github.com/graphql";

const getRepoFromGithub = async (query, token) => {
  console.log(query, token);
  return axios.post(githubURL, {query: query}, {headers: token})
    .then(({ data }) => data.data)
    .catch(error => {
      console.log(error);
    });
};

module.exports = { getRepoFromGithub };
