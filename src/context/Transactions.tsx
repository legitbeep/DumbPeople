import React, {useState,useEffect,createContext} from 'react';
import {ethers} from 'ethers';

import {contractAbi, contractAddr} from 'utils/contants';

export const TransactionContext = createContext({ 
    connectWallet: () => {}, 
    currAcc: "", 
    mintNft: (amnt?:string) => {},
    state: {loading: false, success: true},
    ownerCollection:[""],
    txHash: ""
});

// @ts-ignore
const ethereum = typeof window != "undefined" && window.ethereum ? window.ethereum : null;

export const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum,"ropsten"); //ethers.getDefaultProvider('ropsten');
    const signer = provider.getSigner() //new ethers.Wallet(privateKey, provider);;
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
    const [ownerCollection, setOwnerCollection] = useState<string[] | []>([]);
    const [txHash, setTxHash] = useState("");
    const [state, setState] = useState({
        loading: false,
        success: false,
    });

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

    const getOwnedTokens = () => { 
        let ownedTokens = [""];
        const transactionContract = getEthereumContract();
        transactionContract.walletOfOwner(currAcc)
            .then((res:any) => {
                console.log(res)
                res.forEach((token:any) => {
                    ownedTokens.push(token.toNumber())
                })
            })
        setOwnerCollection(ownedTokens);
    }

    const mintNft = async(amnt?:string) => {
        const transactionContract = getEthereumContract();
        const parsedAmnt = ethers.utils.parseEther("0.01");
        setState(prev => ({...prev, loading: true}));
        try { 
            const tx = await transactionContract.mint(1,{ value: parsedAmnt });
            setTxHash(tx.hash);
            await tx.wait();
            setState(prev => ({...prev, loading: false, success: true}));
                
            getOwnedTokens();
        } catch (err) {
            setState(prev => ({...prev, loading: false, success: false}));
        }
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

    useEffect(() => {
        if(currAcc != "")
            getOwnedTokens();
    },[currAcc])

    return (
        <TransactionContext.Provider value={{ connectWallet, currAcc, mintNft, state, ownerCollection, txHash }}>
            {children}
        </TransactionContext.Provider>
    );
}