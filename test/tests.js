const assert = require('assert');
const sinon = require('sinon');

const issues = require('./fixtures/issues.json');
const { processIssues } = require('../lib/processIssues');
const axios = require('axios');


describe('issueCreator', function () {
  sinon.stub(axios, 'post').resolves(
    {data: 
      { data: 
        {
          repository: {
            name: 'test_repo',
            url: 'test_url'
          },
          createIssue: {
            issue: {}
          }
        }
      }
    }
  );
  const logSpy =  sinon.spy(console, 'log');

  beforeEach(async () => {
    await processIssues(issues, {
      githubUsername: 'test_username',
      githubRepositoryName: 'test_repo',
      githubAccessToken: 'test_token'
    });
  });


  it('should print that the repository was correctly found', async () => {
    assert(logSpy.calledWith("Acquired id of repository 'test_repo' at test_url"));
  });


});
