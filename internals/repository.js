module.exports.getRepoGraph = ({githubUsername, githubRepositoryName}) => `
  {
    repository(owner:"${githubUsername}", name: "${githubRepositoryName}"){
      name,
      url,
      id
    }
  }
`;

module.exports.createIssueGraph = ({ repositoryId, body, title }) => `
  mutation CreateIssue{
    createIssue(
      input: {
        repositoryId: "${repositoryId}",
        title: "${title || ''}",
        body: "${body || ''}",
      } 
    ){
      issue {
        number,
        title
      }
    }
  }
`;
