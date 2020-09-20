#!/usr/bin/env node

try {
  const { processIssues } = require('./internals/processIssues');
  const prompt = require('prompt');
  const issues = require('./issues.json');

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
      throw new Error(error);
    } else {
      processIssues(issues, { githubUsername, githubRepositoryName, githubAccessToken });
    }
  });

} catch (error) {
  console.log(`An error occured : ${error}`);
}
