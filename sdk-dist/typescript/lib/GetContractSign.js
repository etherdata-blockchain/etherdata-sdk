//import { createRequire } from 'module';
       //const require = createRequire(import.meta.url);
       var Tx     = require('ethereumjs-tx').Transaction
       const Common = require('ethereumjs-common').default;
       const Web3 = require('web3')
       const web3 = new Web3('http://127.0.0.1:8545')

    function getSign(){
     const customCommon = Common.forCustomChain(
     'mainnet',
     {
        name: 'etdchain',
        networkId: 3101,
        chainId: 3101,
     },
     'petersburg',
     )

     this.Sign=function(account, pk1, data, nonce){
       const privateKey1 = Buffer.from(pk1, 'hex');
       const txObject = {
          from: account,
          gasLimit: web3.utils.toHex(3000000),
          gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
          data: data,
          nonce:  web3.utils.toHex(nonce)
       }
     // 签署交易
       const tx = new Tx(txObject,{ common: customCommon },)
       tx.sign(privateKey1)

       const serializedTx = tx.serialize()
       const raw = '0x' + serializedTx.toString('hex')
       console.log('raw:', raw)
    }
    this.print=function(account, pk1, data, nonce){
      const privateKey1 = Buffer.from(pk1, 'hex');
      console.log(privateKey1);
    }
}

module.exports = getSign;
