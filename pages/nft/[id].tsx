import React from 'react';
import { useMetamask, useDisconnect, useAddress } from '@thirdweb-dev/react';

const NftMintPage = () => {

  const connectMetaMask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();


  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
     {/* left */}
     <div className='lg:col-span-4 md:col-span-3 bg-gradient-to-br from-[#F7BA2C] to-[#EA5459]'>
        <div className='flex flex-col sm:flex-row sm:p-7 lg:flex-col items-center justify-center py-2 mt-4 lg:min-h-screen'>
          <div className='bg-gradient-to-br from-[#F5C900] to-[#183182] p-2 rounded-2xl'>
           <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72 flex-1' src="https://img.seadn.io/files/206fa22d5f1068d4e23549e0c6d0641e.png?fit=max" alt="drop-photo" />
          </div> 
          <div className='text-center p-5 space-y-2'>
            <h1 className='text-4xl font-bold text-white'>
              MUTANT APES YACHT CLUB
            </h1>
            <h2 className='text-xl text-gray-300'> A collection of Mutant Apes who live and breath react</h2>
        </div>
        </div>
       
    </div>

    {/* right */}

      <div className='lg:col-span-6 flex flex-col flex-1 p-12'>
        {/* Header */}
        <header className='flex items-center justify-between'>
          <h1 className='w-52 cursor-pointer text-xl sm:w-80 font-extralight'>
            The <span className='font-extrabold underline decoration-pink-600/50'>MAYC</span> NFT Drop!!
          </h1>
          <button onClick={ address ?()=> disconnect()  : () => connectMetaMask()} className='bg-[#EA5459] rounded-full px-4 py-2 text-white text-xs font-bold lg:text-base lg:px-5 lg:py-3 '>
            { address ? 'Sign Out': 'Sign In'}
    
          </button>
          
        </header>
        <hr className='my-2 border' />
        { address && <p className='text-green-600 text-sm text-center'> You're logged in with Wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p> }
        
        {/* content */}
        <div className='mt-10 flex flex-col flex-1 items-center justify-center space-y-6 lg:space-y-0 text-center'>
          <img className='w-80 object-cover pb-10 lg:h-40 lg:w-96' src="https://lh3.googleusercontent.com/5c-HcdLMinTg3LvEwXYZYC-u5nN22Pn5ivTPYA4pVEsWJHU1rCobhUlHSFjZgCHPGSmcGMQGCrDCQU8BfSfygmL7Uol9MRQZt6-gqA=h600" alt="mayc-colletion" />

          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
            The Mutant Ape Yacht Coding Club| NFT Drop
          </h1>
          <p className='text-center pt-2 lg:pt-5 font-extralight text-xl text-green-600'>
            13/21 NFT's claimed
          </p>
        </div>
        {/* button */}
       
          <button  className='h-16 bg-gradient-to-br from-[#F7BA2C] to-[#EA5459] py-2 rounded-full text-white mt-5'>
            Mint NFT (0.01ETH)
          </button>
      </div>


    </div>
   
  )
}

export default NftMintPage;