#!/usr/bin/env node

const prompt = require('prompt');
const { getRepo } = require('./internals/graphGetRepo');
const { createIssue } = require('./internals/graphCreateIssue');

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
      .then(({ repository }) => { 
        const mutation = `mutation CreateIssue { 
          createIssue(input: {
            repositoryId:"${repository.id}", 
            title: "new issue from program", 
            body:"New issue"
            }
          ) {
            issue{
              body
            }
          }
        }`;
        createIssue(mutation, token)
          .then(({ createIssue }) => {
            console.log(createIssue.issue.body)
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
});
