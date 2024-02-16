// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract Chai {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address sender;
    }

    Memo[] memos;

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(string calldata name, string calldata message) public payable {
        require(msg.value > 0, "Please send more than 0 ETH.");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
