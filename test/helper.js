

const tokensWei = (n) => {
    //our token uses 18 decimans places just as ether
    //just as 1 ether = 1000000000000000000 wei i.e 18 decimal places
    //so we will use the web 3 utills to convert our token to 18 decimal places
    return web3.utils.toWei(n,'ether')
}

module.exports = {
    tokensWei: tokensWei
}