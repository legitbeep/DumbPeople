import React, {useState,useEffect,createContext} from 'react';
import {ethers} from 'ethers';

import {contractAbi, contractAddr} from 'utils/contants';

export const TransactionContext = createContext("");

// @ts-ignore
const ethereum = typeof window != "undefined" && window.ethereum ? window.ethereum : null;

export const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContracti = new ethers.Contract(contractAddr, contractAbi, signer);  
} 

export const TransactionProvider = () => {
    
}