#!/usr/bin/env node

const prompt = require('prompt');
const promptAttributes = [
  {
    name: 'repository'
  },
  {
    name: 'token'
  }
];

prompt.start();

prompt.get(promptAttributes, (error, { repository, token }) => {
  if (error) {
    console.log(error);
    return 1;
  } else {
    console.log(repository);
    console.log(token);
  }
});

