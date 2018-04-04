// Initializes the `product` service on path `/product`
const createService = require('./product.class.js');
const hooks = require('./product.hooks');
const filters = require('./product.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'product',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
