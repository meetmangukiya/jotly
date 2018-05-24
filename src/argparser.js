const program = require('commander');
const actions = require('./actions');

program
  .version('0.0.1')
  .command('notebook')
  .option('-l, --ls', 'List existing notebooks')
  .option('-c, --create', 'Create a new notebook')
  .option('-I, --show-index', 'Show the index of given notebook')
  .option('-n, --name [name]', 'Name of the notebook', null)
  .action(actions.notebook);

module.exports = program;
