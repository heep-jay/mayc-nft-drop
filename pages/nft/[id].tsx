import React, { useEffect, useState } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { useMetamask, useDisconnect, useAddress, useNFTDrop } from '@thirdweb-dev/react';
import Confettti from '../../components/Confettti';
import { client, urlFor } from '../../sanity';
import { Collection } from '../../typings';
import { BigNumber } from 'ethers';
import toast, {Toaster} from 'react-hot-toast'
import { setTimeout } from 'timers/promises';

interface Props {
  collection: Collection
}



const NftMintPage = ( {collection}:Props) => {

  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<BigNumber>();
  const [loading, setLoading] = useState<boolean>(true);
  const [priceInEth, setPriceInEth] = useState<string>();
  

  const connectMetaMask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  const nftDrop = useNFTDrop(collection.address);

  useEffect(() => {
    if(!nftDrop) return;

    const fetchNftDropData = async () =>{
      setLoading(true);
      const claimed = await nftDrop.getAllClaimed();
      const total = await nftDrop.totalSupply()

      setClaimedSupply(claimed.length);
      setTotalSupply(total);
      setLoading(false);
    } 
    const fetchPrice = async () =>{
      const claimConditions = await nftDrop.claimConditions.getAll();
      setPriceInEth(claimConditions?.[0].currencyMetadata.displayValue)

    }
    fetchPrice()
    fetchNftDropData()
  
    
  }, [nftDrop]);


  const mintNft = () => {
    if(!nftDrop && !address) return;

    setLoading(true)
    const notification = toast.loading('Minting...',{
      style:{
        background: 'white',
        color: 'green',
        fontWeight: 'bolder',
        fontSize: '17px',
        padding: '20px',
      },
    })

    const quantity = 1;
    nftDrop
    ?.claimTo(address! ,quantity)
    .then(async (txdata)=>{
      const receipt = txdata[0].receipt;
      const claimedTokenId = txdata[0].id;

      const claimedNFT = await txdata[0].data();
      

      toast('HOORAY You have succesfully Minted!',{
        duration: 8000,
        style:{
          background: 'green',
          color: 'white',
          fontWeight: 'bolder',
          fontSize: '17px',
          padding: '20px',
        }
      });
      console.log(receipt);
      console.log(claimedTokenId);
      console.log(claimedNFT);

    })
    .catch((err) => {
      err.message
      toast('WHOOPS.... Something went wrong!',{
        duration: 8000,
        style:{
          background: 'white',
          color: 'red',
          fontWeight: 'bolder',
          fontSize: '17px',
          padding: '20px',
        }
      })
    
    })
    .finally(()=>{
      setLoading(false);
      

     
      toast.dismiss(notification);
      const fetchNftDropData = async () =>{
    
        const claimed = await nftDrop.getAllClaimed();
        const total = await nftDrop.totalSupply();
  
        setClaimedSupply(claimed.length);
        setTotalSupply(total);
        
      } 
     
      fetchNftDropData();
     
    })
  }
  

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
      
      <Toaster position='bottom-center'/>    
     {/* left */}
     <div className='lg:col-span-4 md:col-span-3 bg-gradient-to-br from-[#F7BA2C] to-[#EA5459]'>
        <div className='flex flex-col sm:flex-row sm:p-7 lg:flex-col items-center justify-center py-2 mt-4 lg:min-h-screen'>
          <div className='bg-gradient-to-br from-[#F5C900] to-[#183182] p-2 rounded-2xl'>
           <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72 flex-1' src={urlFor(collection.mainImage).url()} alt="drop-photo" />
          </div> 
          <div className='text-center p-5 space-y-2'>
            <h1 className='text-4xl font-bold text-white'>
              {collection.title}
            </h1>
            <h2 className='text-xl text-gray-300'>{collection.description}</h2>
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
            { address ? 'Disconnect': 'Connect Wallet'}
    
          </button>
          
        </header>
        <hr className='my-2 border' />
        { address && <p className='text-green-600 text-sm text-center'> You're logged in with Wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p> }
        
        {/* content */}
        <div className='mt-10 flex flex-col flex-1 items-center justify-center space-y-6 lg:space-y-0 text-center'>
          <img className='w-80 object-cover pb-10 lg:h-40 lg:w-96' src={urlFor(collection.previewImage).url()} alt="mayc-colletion" />

          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
           {collection.title}
          </h1>
          <p className='text-center pt-2 lg:pt-5 font-extralight text-xl text-green-600 animate-pulse'>
            {loading ? "Loading " : `${claimedSupply}/${totalSupply?.toString()} NFT's claimed`}
            
          </p>
          { loading && (
            <img  className='w-80 h-80 object-contain' src="https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" />
          )}
        </div>
        {/* button */}
       
          <button 
            onClick={mintNft}
            disabled={loading || !address || claimedSupply === totalSupply?.toNumber()}  className='h-16 bg-gradient-to-br from-[#F7BA2C] to-[#EA5459] py-2 rounded-full text-white mt-5 disabled:bg-gray-400 disabled:cursor-no-drop'>
            {loading ? (
              <>Loading</>
            ): !address ? (
              <>Connect Wallet </>
            ): claimedSupply === totalSupply?.toNumber() ?(
              <>SOLD OU</>
            ): <span>Mint NFT ({priceInEth}ETH)</span>}
            
          </button>
      </div>


    </div>
   
  )
}

export default NftMintPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {

  
  const query = `*[_type == "collection" && slug.current == $id][0]{
    _id,
    title,
    address,
    description,
    nftCollectionImage,
    mainImage{
    asset
  },
  previewImage{
    asset
  },
  slug {
    current
  },
  creator->{
    _id,
    name,
    address,
    slug{
    current
  },
  }
  
  }`
  
  const collection = await client.fetch(query,{
    id: params?.id
  })
  if(!collection){
    return {
      notFound: true
    }
  }
  console.log(collection)
  
  return {
    props:{
      collection,
    }
  }
}