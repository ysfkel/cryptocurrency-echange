//test
const Token = artifacts.require("Token");
const EternalSwap = artifacts.require("EternalSwap");
const helper = require('./helper')
const tokenTests = require('./token')
const etSwapTests = require('./eternal-swap')

require('chai')
   .use(require('chai-as-promised'))
   .should()

//tests
contract('EternalSwap', ([deployer, investor]) => {
  
    let token, eternalSwap;

    before(async () => {
        token = await Token.new()
        eternalSwap = await EternalSwap.new(token.address)
        await token.transfer(eternalSwap.address,helper.tokensWei('1000000'))
    })
    
    describe('Token deployment', async () => {
         it('token has a name', tokenTests.shouldHaveName)
    });
    
    
    describe('EternalSwap deployment', async () => {
        it('contract has a name', etSwapTests.shouldHaveName)
        it('contract has balance', etSwapTests.shouldHaveBalance)
    });

    describe('buyTokens', async ()=> {
        
        let result 

        before(async () => {
            //rate: 1 ether equals 100 tokens
            const tokens = helper.tokensWei('1')
            console.log('--tokens tokens -- ',tokens)
            result = await eternalSwap.buyTokens({from:investor, value: tokens})
        })

        it('Allows user to buy tokens from eternalSwap for a fixed price', async () => {
            let purchasedTokens = 100
            let totalTternalSwapTokens = 1000000
            //rate: 1 ether equals 100 tokens
            //check user token balance
            const tokensInWei = helper.tokensWei(purchasedTokens+'')
            let investorBalanace = await token.balanceOf(investor)
            assert.equal(investorBalanace.toString(),tokensInWei)

            //eternalSwap balance after purchase
            let eternalSwapBalance = await token.balanceOf(eternalSwap.address)
            remainingTokens = totalTternalSwapTokens - purchasedTokens;
            assert.equal(eternalSwapBalance.toString(), helper.tokensWei(remainingTokens+''))
        })
    });
})
