import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import React, { useState } from 'react'
import useBalance from './actions/useBalance'
import TokenListRinkeby from './assets/token-list-rinkeby.json' // ==> if u change to Mainnet u can see ur balance of ur wallet, you should change it in all the places where it is called too

const ConectWallet = () => {
    const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42],
    })
    const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0])

    const { active , account,  activate, deactivate} = useWeb3React()

    const [ balance ] = useBalance(
        selectedToken.address,
        selectedToken.decimals
    )

    async function connect(){
        try{
            await activate(injected)
        }
        catch(ex){
            console.log(ex)
        }
    }
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
            <button onClick={connect}>Conect to metamask</button>
            {active ? <span>Connected width <b>{account}</b> </span> : <span>Not connected</span>}
            <button onClick={disconnect}>Disconnect to metamask</button>
            
            <select onChange={(e) => setSelectedToken(TokenListRinkeby[e.target.value])}>
                {TokenListRinkeby.map((token, index) => (
                    <option value={index} key={token.address}>{token.name}</option>
                    ))}
            </select>
            {selectedToken.name} balance {balance}
          </div>
        </>
    )
}

export default ConectWallet
