import type { GetServerSideProps, NextPage } from 'next'
import {client, urlFor} from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import LandingPage from '../components/LandingPage';
import {RiSearchLine} from 'react-icons/ri';
import {BsSun,BsInstagram, BsTwitter, BsLink} from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import {FaRegDotCircle, FaFireAlt } from 'react-icons/fa';
import { Collection } from '../typings';
import Link from 'next/link';
import { useState } from 'react';



interface Props {
  collections: Collection[]
  
}

const Home = ({collections}: Props) => {

  console.log('hey', collections)
  return (
    <div className="bg-black min-h-fit">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col bg-black h-screen'>
      {/* Nav */}
      
      <nav>
        <div className='flex items-center  justify-between xl:grid lg:grid-cols-10 p-2'>
          <div className='flex items-center lg:col-span-5 justify-start lg:justify-between'>
            <h1 className='text-xl lg:text-3xl font-extrabold lg:mr-16 md:mr-10 sm:mr-5 text-white mx-5 '>BAYC DROP</h1>
          
            
        <div className=' lg:w-full flex items-center lg:bg-[#1b1c1e] py-3 rounded-full text-white px-4 flex-0.7 lg:mr-14'>
        <RiSearchLine fontSize={30}/>
        <input 
              className=' ml-5 outline-none hidden lg:flex bg-inherit lg:w-full decoration-none placeholder-white'
                type="text"
                placeholder="Collection, Item, User"
              />
        </div>
          </div>
        
         <div className='flex items-center p-5 lg:col-span-5 text-white justify-between'>
          <ul className='items-center justify-between hidden lg:flex md:flex cursor-pointer font-light md:text-l lg:text-xl'>
            <li className='mx-4  '>Drops</li>
            <li className='mx-4  '>Marketplace</li>
            <li className='mx-4  '> Create</li>
          </ul>
            <div className='flex items-center'>
              <BsSun fontSize={25}/>
              <button className='py-2 px-4 lg:px-6 lg:py-3 text-sm lg:text-l xl:text-base  md:text-sm font-bold capitalize bg-gradient-to-br from-[#F7BA2C] to-[#EA5459] rounded-full ml-10'>
              Get in
            </button>
            </div>
         
         </div>
        
        </div>
      </nav>

      {/* content */}
      <div className='flex flex-col xl:grid grid-cols-10'>
        {/* left */}
        <div className='2xl:col-span-5 xl:col-span-4 col-span-4 relative p-8 bg-black'>
            <img 
            className=' sm:w-full sm:h-800 w-full object-cover rounded-3xl '
            src="https://lh3.googleusercontent.com/F9KGRPM_-U7UbLXP7wikv4eThyh8pkmE8zeoQgd8wTw6sBQvoJVmmE-dyGtVBD5IRbCUu8KMUa1_Pgbs9LDQ9ORGVKVFj3301YTJ=w800" alt="background-photo" />

            <div className='absolute z-10 bg-[#FAFF89]/5 rounded-full p-3 md:p-5 sm:p-4 lg:p-5 top-20 left-20 text-white'>
              <BsLink fontSize={28}/>
            </div>
            
            <div className='bg-gradient-to-br from-[#ff1b6b] to-[#45CAFF] p-1 rounded-full absolute bottom-16 left-20 max-w-fit'>
              <button className='sm:px-5 sm:py-2 px-4 py-2 md:px-8 md:py-3 bg-[#9344b6] text-white capitalize rounded-full outline-none sm:text-lg md:text-xl text-xs lg:text-lg lg:py-2 lg:px-4 xl:py-3 xl:px8 font-medium z-10 tracking-wide'>
                22 
                 <span className='font-extralight text-gray-400'>
                D</span> 33<span className='font-extralight text-gray-400'>M</span> 55<span className='font-extralight text-gray-400'>S</span>
              </button>
            </div>

            <div className='flex absolute items-center text-xl bottom-16 right-16 p-2 sm:text-2xl md:3xl lg:4xl'>
              <FaRegDotCircle  style={{marginRight: '20px', color:"white"}}/>
              <GoPrimitiveDot style={{marginRight: '20px', color: "lightgray"}}/>
              <GoPrimitiveDot style={{marginRight: '20px',color: "lightgray"}}/>
            </div>
              
           
        </div>
        {/* right */}
        <div className='2xl:col-span-5 flex flex-col 2xl:justify-between xl:col-span-6 col-span-6 bg-black p-5'>

          {/* header */}
          <div  className='flex flex-col '>
            {/* title */}

            <h1 className='text-white text-start font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl'> BLOCK HEAD PUNKS #1</h1>

            <div className='mt-7'>
              <div className='flex justify-between' >
                <div className='flex gap-4'>
                  <img 
                  className='h-16 w-16 rounded-full'
                  src="https://lh3.googleusercontent.com/3fJJ_V1Ozp468bMJ7BdQO149__VW8MYHliEugxXI0_TFX2vHR6WfYAQxWxzX4o85wQkuQqKBY2dD53w-Al_aNzlYaFlcDQwP9RwmxA=w600" alt="profile-photo" />
                <div className='text-white space-y-1'>
                  <h2 className='text-xl font-light'>
                      Omally Junior
                  </h2>
                  <p className='text-base text-transparent bg-clip-text  bg-gradient-to-r from-[#2B9348] via-[#55A630] to-[#EEEF20]'>
                    @hipjay69
                  </p>
                </div>
                </div>
                
              <div className='text-white flex items-center gap-5 text-lg md:gap- md:text-xl'>
                <div className='p-2 md:p-2 lg:p-4 border rounded-full border-gray-400'>
                  <BsInstagram/>
                </div>
                <div className='p-2 md:p-2 lg:p-4 border rounded-full border-gray-400'>
                  <BsTwitter/>
                </div >
                <div className='p-2 md:p-2 lg:p-4 border rounded-full border-gray-400'>
                  <BiDotsHorizontalRounded/>
                </div>
                </div>   
              </div>
              <hr  className='border-1 mt-4 border-slate-400'/>
            </div>
          </div>

          {/* cards */}
         
          <div className='text-white mt-4'>
            <h1 className='text-2xl lg:text-4xl'>
              Collection Packs
            </h1>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 mt-7 gap-3 md:gap-1 xl:grid xl:grid-cols-3 sm:gap:10 xl:gap-1 2xl:gap-4 lg:gap-5 items-center justify-center">
            
            {
              collections?.map((collection)=> (
                <>
                <Link href={`/nft/${collection.slug.current}`}>
                
                
                <div  key={collection._id} className='col-span-1 relative h-420 3xl:w-190 xl:w-full laptop:w-210 lg:w-300  tablet:w-210 md:w-150 w-250 bg-[#1b1c1e] rounded-xl items-center justify-center cursor-pointer'>
                  <img 
                    className='w-44 h-52 object-cover mx-auto mt-7 rounded-lg'
                    src={urlFor(collection.mainImage).url()} alt="" />
                    
                    <p className='text-lg font-bold text-gray-400 p-3'> {collection.title}</p>

                    <div className='text-base text-gray-300 mx-3 font-semibold xl:text-sm xl:font-light'>
                      <p>Legendary Drop</p>
                      <p>Rare NFT's </p>
                      <p>Common NFT's</p>
                    </div>
                    <div className='mt-5 ml-16'>
                       <button className='text-white border-white border py-2 px-4 rounded-3xl'>Mint Drop</button>
                    </div>
                    <div className='absolute text-red-600 top-5 left-5 p-3 bg-white rounded-full'>
                      <FaFireAlt/>
                    </div>

                    
                    
               </div>
               </Link>

               <Link href={`/nft/${collection.slug.current}`}>
               <div  key="1" className='col-span-1 relative h-420 3xl:w-190 xl:w-full laptop:w-210 lg:w-300  tablet:w-210 md:w-150  w-250 bg-[#1b1c1e] rounded-xl items-center justify-center'>
               <img 
                 className='w-44 h-52 object-cover mx-auto mt-7 rounded-lg'
                 src="https://lh3.googleusercontent.com/tKiLf7SY5TejGSyDsNV1UMi6otMxZgN6KHHm2Yq-R9wjSgxz44CohW0iXj-kMO2jPgWD0iihIDt1P-1u10Vr_2p4L6OIUunzbSaM=s0" alt="" />
                 
                 <p className='text-lg font-bold text-gray-400 p-3'>Block head</p>

                 <div className='col-span-1 text-base text-gray-300 mx-3 font-semibold xl:text-sm xl:font-light'>
                   <p>Legendary Drop</p>
                   <p>Rare NFT's </p>
                   <p>Common NFT's</p>
                 </div>
                 <div className='mt-5 ml-16'>
                    <button className='mx-auto text-white border-white border py-2 px-4 rounded-3xl'>Coming soon</button>
                 </div>
                 <div className='absolute text-red-600 top-5 left-5 p-3 bg-white rounded-full'>
                   <FaFireAlt/>
                 </div>
                </div>
            </Link>
            <Link href={`/nft/${collection.slug.current}`}>

          
            <div  key="2" className=' col-span-1 relative h-420 3xl:w-190 xl:w-full laptop:w-210 lg:w-300  tablet:w-210 md:w-150 w-250 bg-[#1b1c1e] rounded-xl items-center justify-center'>
            <img 
              className='w-44 h-52 object-cover mx-auto mt-7 rounded-lg'
              src="https://lh3.googleusercontent.com/XWhyWNcvBeh7S3Etc-0b3UALJi7uCxYOkH0ZwIh7EM5Y8NCSYqLN6-KuRQMYFnLlyn8Fgj7hgVb8GvF0oZb3dgRxp1kEvZO0qrb0fA=w600" alt="" />
              
              <p className='text-lg font-bold text-gray-400 p-3'>Cyber Block Head #09</p>

              <div className='text-base text-gray-300 mx-3 font-semibold xl:text-sm xl:font-light'>
                <p>Legendary Drop</p>
                <p>Rare NFT's </p>
                <p>Common NFT's</p>
              </div>
              <div className='mt-5 ml-16'>
                 <button className='mx-auto text-white border-white border py-2 px-4 rounded-3xl'>Coming soon</button>
              </div>
              <div className='absolute text-red-600 top-5 left-5 p-3 bg-white rounded-full'>
                <FaFireAlt/>
              </div>

              
              
         </div>
         </Link>
         </>
              ))
            }
            
          
          {/* <div className='h-420 laptop:w-200  xl:w-190 lg:w-275 w-250 2xl:300 bg-white rounded-xl'>
            gagag
          </div>
          <div className='h-420 laptop:w-200 xl:w-190 lg:w-275  w-250  bg-white rounded-xl'>
            gagag
          </div> */}
          
          
          
          
          

          </div>
          

        </div>

      </div>
    </div>


      
    </div>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async () => {

  
  const query = `*[_type == "collection"]|  order(_createdAt asc){
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
  
  const collections = await client.fetch(query)
  console.log(collections)
  
  return {
    props:{
      collections,
    }
  }
}