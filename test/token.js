
const Token = artifacts.require("Token");

const shouldHaveName = async () => {
    const token = await Token.new()
    const name = await token.name()
    assert.equal(name,'ETN TOKEN')
}

module.exports = {
    shouldHaveName:shouldHaveName
}

