const { getRepoFromGithub } = require('./getRepoFromGithub');
const { addIssueToGithub } = require('./addIssueToGithub');
const { getRepoGraph, createIssueGraph } = require('./repository');

const processIssues = async (issues, { githubUsername, githubRepositoryName, githubAccessToken }) => {
  // constructing authorization header    
  const token = { Authorization: 'bearer ' + githubAccessToken };
  // acquiring github repository id from repository owner and repo name
  const repositoryId = await getRepoId({ githubUsername, githubRepositoryName, token });
  // add all issues to the repository
  for (const issue of issues) {
    try {
      await addNewIssue(issue, { repositoryId, token });
    }
    catch (err) {
      console.log("Error while creating issue " + issue.title + " " + err);
    }
  }
}

const getRepoId = async ({ githubUsername, githubRepositoryName, token }) => {
  const query = getRepoGraph({githubUsername, githubRepositoryName});
  const { repository } = await getRepoFromGithub(query, token);
  console.log(`Acquired id of repository '${repository.name}' at ${repository.url}`);
  return repository.id;
}

const addNewIssue = async (issue, { repositoryId, token }) => {
  issue.repositoryId = repositoryId;
  const mutation = createIssueGraph(issue);
  const { createIssue } = await addIssueToGithub(mutation, token);
  console.log(`Created issue #${createIssue.issue.number} : ${createIssue.issue.title}`);
  return createIssue.issue.number;
}

module.exports = {
  processIssues
};
