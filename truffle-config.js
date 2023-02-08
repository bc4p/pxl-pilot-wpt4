module.exports = {

  networks: {
    bc4p: {
      host: "https://bc4p.nowum.fh-aachen.de/blockchain",
      network_id: 123321
    }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17"
    }
  }
};
