import React, {useState,useEffect,createContext} from 'react';
import {ethers} from 'ethers';

import {contractAbi, contractAddr} from 'utils/contants';

export const TransactionContext = createContext({ connectWallet: () => {}, currAcc: "", mintNft: (amnt?:string) => {} });

// @ts-ignore
const ethereum = typeof window != "undefined" && window.ethereum ? window.ethereum : null;

export const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddr, contractAbi, signer);  

    return transactionContract;
} 

type callbackType = (a:string) => void;

export function onAccountsChanged(callback: callbackType) {
    if (ethereum){
        ethereum.on('accountsChanged', (accounts: [string]) => {
            // Time to reload your interface with accounts[0]
            callback(accounts[0]);
        });
    }
}

export const TransactionProvider:React.FC = ({children}) => {
    const [currAcc,setCurrAcc] = useState('');

    const checkIfConnected = async () => {
        try{
            if(!ethereum) {
                alert("Please install metamask")
                return;
            }
            const acc = await ethereum.request({ method: "eth_accounts"});
            if(acc.length)
                setCurrAcc(acc[0]);
            else 
                alert("No account found!");
        } catch(err) {

        }
    }

    const mintNft = async(amnt?:string) => {
        const transactionContract = getEthereumContract();
        const parsedAmnt = ethers.utils.parseEther("0.01");

        const tx = await transactionContract.mint(1);
        console.log(`Transaction hash: ${tx.hash}`);
      
        const receipt = await tx.wait();
        console.log(`Reciept: ${receipt}`);

    }

    const connectWallet = async () => {
        try {
            if (!ethereum) alert("Please install metamask!");
            const acc = await ethereum.request({ method: "eth_requestAccounts"});
            if(acc.length)
                setCurrAcc(acc[0]);
            else 
                alert("No account found!")
        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object!");
        }
    }

    // useEffect(() => {
    //     onAccountsChanged(setCurrAcc);
    // },[])

    return (
        <TransactionContext.Provider value={{ connectWallet, currAcc, mintNft }}>
            {children}
        </TransactionContext.Provider>
    );
}