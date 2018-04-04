// Initializes the `getUsers` service on path `/getusers`
const createService = require('feathers-rethinkdb');
const hooks = require('./get-users.hooks');
const filters = require('./get-users.filters');

module.exports = function () {
  const app = this;
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'get_users',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/getusers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('getusers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
