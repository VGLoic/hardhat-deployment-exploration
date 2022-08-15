// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Counter {
    uint256 public count;

    event CountIncremented(uint256 count);

    constructor() {}

    function increment() public {
        count += 1;
        emit CountIncremented(count);
    }
}
