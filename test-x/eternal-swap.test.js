
const Token = artifacts.require("Token");
const EternalSwap = artifacts.require("EternalSwap");

//tokenTests =  require('./token')()
// etSwapTests = require('./eternal-swap')(token,eternalSwap)

require('chai')//assertions
   .use(require('chai-as-promised'))
   .should()

//tests
contract('EternalSwap', (accounts) => {

    let token, eternalSwap;
    let tokenTests, etSwapTests
    before(async () => {
          token = await Token.new()
       //  eternalSwap = await EternalSwap.new(token.address)

         //  tokenTests =  require('./token')(token)
          // etSwapTests = require('./eternal-swap')(token,eternalSwap)
    })
    
    describe('Token deployment', async () => {
        // let _token = await Token.new()
         let tokenTests =  require('./token')(token)
         it('token has a name', tokenTests.shouldHaveName)
    });
    
    
    // describe('EternalSwap deployment', async () => {
    //     it('contract has a name', etSwapTests.shouldHaveName)
    //     it('contract has balance', etSwapTests.shouldHaveBalance)
    // });

    // describe('buyTokens', async ()=> {
    //     it('Allows user to buy tokens from eternalSwap for a fixed price', etSwapTests.buyTokens)
    // });
})
