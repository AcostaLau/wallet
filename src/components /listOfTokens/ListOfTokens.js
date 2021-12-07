import React, {useState} from 'react'
import TokenListRinkeby from '../assets/token-list-rinkeby.json' // ==> if u change to Mainnet u can see ur balance of ur wallet, you should change it in all the places where it is called too
import useBalance from '../actions/useBalance'
import Transactions from '../transactions/Transactions'

const ListOfTokens = ({adress}) => {

    const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0])

    const [ balance ] = useBalance(
        selectedToken.address,
        selectedToken.decimals
    )
    return (
        <div className='containerListTokens'>

                <h2><b>SELECT TOKEN</b></h2>
                <select onChange={(e) => setSelectedToken(TokenListRinkeby[e.target.value])}>

                    {TokenListRinkeby.map((token, index) => (
                        <option value={index} key={token.address}>{token.name}</option>
                    ))}

                </select>
                
                <div >
                    <h3><b>TOKEN SELECTED</b></h3>{selectedToken.name} 

                    <h3><b>BALANCE:</b></h3>{balance}
                </div>

                <Transactions adress = {adress} token={selectedToken.name} />
        </div>
    )
}


export default ListOfTokens