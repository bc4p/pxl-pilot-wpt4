// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17 <0.9.0;

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

    emit MessageStored(msg.sender, _hash);
  }

  event MessageStored(address indexed _sender, bytes32 _hash);
  
}
