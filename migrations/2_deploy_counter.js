const Counter = artifacts.require("Counter.sol");

module.exports = deployer => {
  deployer.deploy(Counter).then(instance => {
    console.log("Counter.sol successfully deployed!");
    console.log("Initializing the GSN...");
    instance.initialize(0).then(() => {
      console.log("Counter.sol successfully initialized with GSN!");
    });
  });
};
