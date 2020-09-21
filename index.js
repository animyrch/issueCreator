#!/usr/bin/env node

try {
  const { argv } = require('yargs');
	console.log(argv._[0]);
  const { processIssues } = require('./internals/processIssues');
  const prompt = require('prompt');
  const issues = require(argv._[0]);

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
