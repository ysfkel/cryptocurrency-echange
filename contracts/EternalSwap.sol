pragma solidity  ^0.5.0;
//pragma solidity >=0.5.0 < 0.7.0;// 0.6.6;

import './Token.sol';

contract EternalSwap {

     string public name = "EternalSwap Exchange";
     Token public token;
     uint  public rate = 100; //1 ether = 100 ETN

     constructor(Token _token) public {
         token = _token; //token address
     }

     function buyTokens() public payable {
          // Redemption rate = # of tokens they receieve for 1 ether
          //Amount of Ethereum * Redemption rate
          uint tokenAmount = msg.value * rate;
          token.transfer(msg.sender, tokenAmount);
     }
    
}





