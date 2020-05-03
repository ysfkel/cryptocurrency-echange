
// const Token = artifacts.require("Token");
 function shouldHaveName(token){
  
    return  async function() {
        console.log('--hello ')
        //  const token = await Token.new()
          const name =  await token.name()
          assert.equal(name,'ETN TOKEN')
    }

}

module.exports = (token)=> {
 
   return {
       shouldHaveName:shouldHaveName(token)
   } 
}

