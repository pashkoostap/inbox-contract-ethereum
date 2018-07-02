const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

beforeEach(() => {
  // Get a list of all accounts
  const accounts = web3.eth.getAccounts().then(accounts => {
    console.log('accounts', accounts);
  });

  // Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
  it('should log the accounts', () => {});
});
