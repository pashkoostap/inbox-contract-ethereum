const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
}
const { interface, bytecode } = require('../compile');
let accounts = [];
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hello World!']
    })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('should deploy the contract', () => {
    assert.ok(inbox.options.address);
  });
});
