const path = require('path');
const fs = require('fs');
const solc = require('solc');

const InboxContractPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(InboxContractPath, 'utf8');
const compiledCode = solc.compile(source, 1);
const InboxContract = compiledCode.contracts[':Inbox'];

module.exports = InboxContract;
