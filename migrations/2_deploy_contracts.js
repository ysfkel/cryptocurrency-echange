const Token = artifacts.require("Token");
const EternalSwap = artifacts.require("EternalSwap");

module.exports = async function(deployer) {

  await deployer.deploy(Token);
  const token = await Token.deployed()
  //
  await deployer.deploy(EternalSwap, token.address);
  const etnSwap = await EternalSwap.deployed();
  //
  await token.transfer(etnSwap.address, '1000000000000000000000000');

};
