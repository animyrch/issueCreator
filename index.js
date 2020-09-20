#!/usr/bin/env node

const prompt = require('prompt');
const { getRepo } = require('./internals/graphGetRepo');

const promptAttributes = [
  {
    name: 'githubUsername'
  },
  {
    name: 'githubRepositoryName'
  },
  {
    name: 'githubAccessToken'
  }
];

prompt.start();

prompt.get(promptAttributes, (error, { githubUsername, githubRepositoryName, githubAccessToken }) => {
  if (error) {
    console.log(error);
    return 1;
  } else {
    // console.log(rootfolder);
    const token = { Authorization: 'bearer ' + githubAccessToken };
    const query = `{
      repository(owner: "${githubUsername}", name: "${githubRepositoryName}"){
        name,
        url,
        id
      }
    }`;
    getRepo(query, token)
      .then(result => console.log(result));
    // console.log(repository);
    // console.log(token);
  }
});




