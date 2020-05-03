
const Token = artifacts.require("Token");
const EternalSwap = artifacts.require("EternalSwap");
const helper = require('./helper')

const shouldHaveName = async () => {
    const token = await Token.new()
    const eternalSwap = await EternalSwap.new(token.address)
    const name = await eternalSwap.name()
    assert.equal(name, 'EternalSwap Exchange')
}

const shouldHaveBalance = async () => {
    const initialBalance = helper.tokensWei('1') //'convert 1 million tokens to 18 decimal'
    const token = await Token.new()
    const eternalSwap = await EternalSwap.new(token.address)
    
    const address = eternalSwap.address

    token.transfer(address, initialBalance)

    const balance = await token.balanceOf(address)

    assert.equal(balance, initialBalance)

}
 
module.exports = {
    shouldHaveName: shouldHaveName,
    shouldHaveBalance: shouldHaveBalance
}

