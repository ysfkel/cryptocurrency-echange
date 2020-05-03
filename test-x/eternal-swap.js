
const helper = require('./helper')

const shouldHaveName =  (token) => {
   
    return async () =>{
        const name = await token.name()
        assert.equal(name, 'EternalSwap Exchange')
    }
}

const shouldHaveBalance =  (token, eternalSwap) => {
   
    return async ()=>{
        const initialBalance = helper.tokensWei('1000000') //'convert 1 million tokens to 18 decimal'

        const address = eternalSwap.address
    
        token.transfer(address, initialBalance)
    
        const balance = await token.balanceOf(address)
    
        assert.equal(balance, initialBalance)
    }

}

const buyTokens = async() => {

} 

module.exports = (token, eternalSwap)=> {
   
    return {
        shouldHaveName:shouldHaveName(token),
        shouldHaveBalance: shouldHaveBalance(token,eternalSwap)
    } 
 }
 
