const getUsers = require('./get-users/get-users.service.js');
const product = require('./product/product.service.js');
const employee = require('./employee/employee.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(getUsers);
  app.configure(product);
  app.configure(employee);
  app.configure(users);
};
