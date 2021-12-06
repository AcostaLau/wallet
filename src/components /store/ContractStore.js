
import ERC20ABI from '../assets/abi-erc20.json'
const ContractStore = (tokenAdress, Web3) => {
    return Web3
    ? new Web3.eth.Contract(ERC20ABI, tokenAdress, {
        from: Web3.eth.defaultAccount,
    })
    :null
}

export default ContractStore