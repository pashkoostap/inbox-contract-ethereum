const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
let web3;

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
}
const { interface, bytecode } = require('../compile');
const defaultMessage = 'Hello World!';
let accounts = [];
let inbox;

before(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [defaultMessage]
    })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('should deploy the contract', () => {
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();

    assert.equal(message, defaultMessage);
  });

  it('can change the message', async () => {
    const newMessage = 'New message';

    await inbox.methods.setMessage(newMessage).send({ from: accounts[1] });
    const changedMessage = await inbox.methods.message().call();

    assert.equal(changedMessage, newMessage);
  });
});
