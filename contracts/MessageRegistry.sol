// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MessageRegistry {
  
  struct Message {
    address sender;
    uint date;
    bytes signature;
  }

  mapping(bytes32 => Message) registry;

  function storeHash(bytes32 _hash, bytes memory _signature) external {
    registry[_hash].sender = msg.sender;
    registry[_hash].date = block.timestamp;
    registry[_hash].signature = _signature;
  }

  
}
