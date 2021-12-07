import { ethers } from 'ethers'
import React, { useState } from 'react'




const Transactions = ({adress}) => {

    const startPayment = async ({ setError, setTxs, ether}) => {
        try {
          if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");
      
          await window.ethereum.send("eth_requestAccounts");
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          ethers.utils.getAddress(adress);
          const tx = await signer.sendTransaction({
            to: adress,
            value: ethers.utils.parseEther(ether)
          });
          console.log({ ether, adress });
          console.log("tx", tx);
          setTxs([tx]);
        } catch (err) {
          setError(err.message);
        }
      };

        const [error, setError] = useState();
        const [txs, setTxs] = useState([]);

    const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      adress: data.get("adress")
    });
  };

    return (
        <>
            <form  onSubmit={handleSubmit}>
              <div >
                <main >
                  <h1>Send ETH payment</h1>
                    
                    <div >
                      <div>
                        <input
                          type="text"
                          name="addr"
                          placeholder="Recipient Address"
                        />         
                      </div>

                      <div >
                        <input
                          name="ether"
                          type="text"
                          placeholder="Amount in ETH"
                        />
                      </div>
                    </div>
                </main>
        
        
                <footer >
                  <button
                    type="submit"
                  >
                    Pay now
                  </button>
                  <p>{error}</p>
                  <p>{txs}</p>
                </footer>
              </div>
            </form>
        </>
    )
}

export default Transactions
