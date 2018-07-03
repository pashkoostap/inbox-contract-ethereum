pragma solidity ^0.4.23;

contract Inbox {
    string public message;

    function Inbox(string initMessage) public {
        message = initMessage;
    }
  
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}