import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import React from 'react'
import ListOfTokens from './listOfTokens/ListOfTokens'

const ConectWallet = () => {

    //chains of web3, im this case  RINKEBY is 4
    const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42],
    })
    

    
    const { active , account,  activate, deactivate} = useWeb3React()

    

    //CONNECT TO WALLET 
    async function connect(){
        try{
            await activate(injected)
        }
        catch(ex){
            console.log(ex)
        }
    }

    //DISCONNECT TO WALLET 
    async function disconnect(){
        try{
            deactivate()
        }
        catch(ex){
            console.log(ex)
        }
    }
    return (
        <>
           <div className='containerTarget'>
                <div className='containerConnect'>
                    <button onClick={connect}>Conect to metamask</button>


                        {active
                        ?
                                <p>Connected with <b>{account}</b> </p> 
                        : 
                                <p>Not connected</p>

                        }


                    <button onClick={disconnect}>Disconnect to metamask</button>

                </div>
            

            <ListOfTokens adress = {account}/>
            
            
          </div>
        </>
    )
}

export default ConectWallet
