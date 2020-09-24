const axios = require('axios');
const githubURL = "https://api.github.com/graphql";

const addIssueToGithub = async (mutation, token) => {
  return axios.post(githubURL, {query: mutation}, {headers: token})
    .then(({ data }) => data.data)
    .catch(error => {
      console.log(error);
    });
};

module.exports = { addIssueToGithub };
