const assert = require('assert');
const app = require('../../src/app');

describe('\'getUsers\' service', () => {
  it('registered the service', () => {
    const service = app.service('getusers');

    assert.ok(service, 'Registered the service');
  });
});
