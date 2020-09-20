const assert = require('assert');
const sinon = require('sinon');

const { createIssues } = require('../internals/parseIssues');
const issues = require('./fixtures/issues.json');

describe('issueCreator', function () {
    it('should return -1 when the value is not present', function () {
      createIssues(issues);
      assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
