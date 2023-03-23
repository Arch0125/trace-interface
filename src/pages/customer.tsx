import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';

const Customer = () => {
  return(
    <div className="flex flex-row h-screen w-screen justify-center items-center">
        <div className="flex flex-col h-screen w-1/2 justify-center items-center">
            <p className="text-4xl font-bold">
                Mint your purchase here 
            </p>
            <ConnectButton/>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 mx-2 rounded-xl mt-4">
                Mint
            </button>
        </div>
        <div className="flex flex-col h-screen w-1/2 justify-center items-center">
            <p className="text-4xl font-bold">
                Track your purchase here
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 mx-2 rounded-xl mt-4">
                Refresh Status
            </button>
        </div>
    </div>
  ) ;
};

export default Customer;
