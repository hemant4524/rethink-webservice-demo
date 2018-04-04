// Initializes the `employee` service on path `/employee`
const createService = require('feathers-memory');
const hooks = require('./employee.hooks');
const filters = require('./employee.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'employee',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/employee', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('employee');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
