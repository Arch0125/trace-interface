import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';
import {nftabi} from '../abi/NFTABI'
import { ethers } from 'ethers';
import { useProvider, useSigner } from 'wagmi';

const Admin = () => {

    const [manufacturerAddress, setManufacturerAddress] = React.useState<String>("");
    const [shipperAddress, setShipperAddress] = React.useState<String>("");

    const addManufacturer = async () => {
        const provider = useProvider();
        const {data:signer} = useSigner();
        const contract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", nftabi, signer || provider);
        const tx = await contract.addAuthorizedManufacturer(manufacturerAddress);
        const receipt = await tx.wait();
        console.log(receipt);
    }

    const addShipper = async () => {
        const provider = useProvider();
        const {data:signer} = useSigner();
        const contract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", nftabi, signer || provider);
        const tx = await contract.addAuthorizedShipper(shipperAddress);
        const receipt = await tx.wait();
        console.log(receipt);
    }

  return(
    <div className="flex flex-row h-screen w-screen justify-center items-center">
        <div className="flex flex-col h-screen w-1/2 justify-center items-center">
            <ConnectButton/>
            <p className="text-4xl font-bold">
                Add Authorities here 
            </p>
            <div className="flex flex-row">
            <input type="text" placeholder="Enter Manufacturer Address" className="border-2 border-blue-600 rounded-xl p-2 mt-4" onChange={(e)=>setManufacturerAddress(e.target.value)}/>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 mx-2 rounded-xl mt-4">
                Add
            </button>
            </div>
            <div className="flex flex-row">
            <input type="text" placeholder="Enter Shipper Address" className="border-2 border-blue-600 rounded-xl p-2 mt-4" onChange={(e)=>setShipperAddress(e.target.value)}/>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 mx-2 rounded-xl mt-4">
                Add
            </button>
            </div>
        </div>
        <div className="flex flex-col h-screen w-1/2 justify-center items-center">
            <p className="text-4xl font-bold">
                Update Product Status here
            </p>
        </div>
    </div>
  ) ;
};

export default Admin;
