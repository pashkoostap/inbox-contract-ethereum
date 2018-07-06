const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'tattoo elevator rotate slight mutual globe tube annual ability junior clean floor',
  'http://127.0.0.1:7545'
);
// const provider = new HDWalletProvider(
//   'tattoo elevator rotate slight mutual globe tube annual ability junior clean floor',
//   'https://rinkeby.infura.io/sD86Qa4Lv8jZKJKipOwN'
// );
const _web3 = new Web3(provider);
