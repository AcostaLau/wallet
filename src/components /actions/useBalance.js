import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import ContractStore from '../store/ContractStore'
import { ZERO_ADDRESS, web3BNToFloatString } from '../utils/Utils'
import BN from 'bn.js'

const useBalance = (
    tokenAddress, 
    decimals,
) => {

    const [balance, setBalance] = useState('0')

    const { account, library } = useWeb3React()
  
    useEffect(() => {
      let isCancelled = false
  
      function getBalance() {
        return new Promise((resolve) => {
          if (!library || !tokenAddress) {
            resolve(new BN('0'))
            return
          }
  
          try {
            if (tokenAddress === ZERO_ADDRESS) {
              library.eth
                .getBalance(account)
                .then((value) => {
                  resolve(new BN(value))
                })
                .catch((error) => {
                  console.log(error)
                  resolve(new BN('0'))
                })
            } else {
              const contract = ContractStore(tokenAddress, library)
              contract?.methods
                .balanceOf(account)
                .call()
                .then((value) => {
                  resolve(new BN(value))
                })
                .catch((error) => {
                  console.log(error)
                  resolve(new BN('0'))
                })
            }
          } catch (error) {
            resolve(new BN('0'))
          }
        })
      }
  
      async function run() {
        const bn = await getBalance()
        if (!isCancelled) {
          const pow = new BigNumber('10').pow(new BigNumber(decimals))
          setBalance(web3BNToFloatString(bn, pow, 4, BigNumber.ROUND_DOWN))
        }
      }
  
      run()
  
      return () => {
        isCancelled = true
      }
    }, [tokenAddress, library, decimals, account])
  
    return [balance]
}

export default useBalance
