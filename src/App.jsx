import React, { useState } from 'react'

import { ethers } from "ethers";
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const rinkebyAddress = "<YOUR RINKEBY DEPLOYED CONTRACT ADDRESS>";

import './App.css'

function App() {

  const [input, setInpupt] = useState('');

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider);
      try {
        const data = await contract.greet();
        console.log("The contract returned ", data);
        setInpupt(data);
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  async function setGreeting() {
    if (!input) return;
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const chainId = await signer.getChainId();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      try {
        const tx = await contract.setGreeting(input);
        await tx.wait();
      } catch (error) {
        console.log(error, error.message)
      }
    }
  }

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={requestAccount}>Connect to wallet</button>
      <button onClick={fetchGreeting}>Fetch Greeting</button>
      <div>{input} is what the contract returned!</div>
      <input type="text" placeholder="Enter greeting" onChange={e => setInpupt(e.target.value)} />
      <button onClick={setGreeting}>Set Greeting</button>
    </div>
  )
}

export default App
