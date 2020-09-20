const assert = require('assert');

const { createIssues } = require('../internals/parseIssues');
const issues = require('./fixtures/issues.json');

describe('ParseIssues is called with an array of issue objects', function () {
    it('should return -1 when the value is not present', function () {
      createIssues(issues);
      assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
