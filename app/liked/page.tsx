// 'use client'
// export const revalidate = 0;
// import React, { useEffect, useState } from 'react';
// import Header from '@/Components/Header';
import Image from 'next/image';
import LikedContent from './components/LIkedContent'; // Corrected import
import getLikedSongs from '@/Actions/getLikedSongs';

// const Liked = () => {
  // const songs = await getLikedSongs();

  // return (
  //   <div>Masu</div>
    // <div className='
    //   bg-neutral-900
    //   rounded-lg
    //   h-full
    //   w-full
    //   overflow-hidden
    //   overflow-y-auto'>
    //   <Header>
    //     <div className='mt-20'>
    //       <div 
    //         className='
    //         flex
    //         flex-col
    //         md:flex-row
    //         items-center
    //         gap-x-5'>
    //         <div className='
    //           relative
    //           h-32
    //           w-32
    //           lg:h-44
    //           lg:w-44'>
    //           <Image 
    //             fill
    //             alt='CgPlayList'
    //             className='object-cover'
    //             src='/images/image1.jpg'
    //           />
    //         </div>
    //         <div className='
    //           flex
    //           flex-col
    //           gap-y-2
    //           mt-4
    //           md:mt-0'>
    //           <p className='hidden md:block font-semibold text-sm'>PlayList</p>
    //           <h1 
    //             className='
    //             text-white
    //             text-4xl
    //             lg:text-7xl
    //             font-bold'>Liked Songs</h1>
      //       </div>
      //     </div>
      //   </div>
      // </Header>
      /* <LikedContent songs={songs} /> */
    // </div>
    
//   );
// }

// export default Liked;
import Header from '@/Components/Header'
import React from 'react'

const page = async()=> {
  const songs = await getLikedSongs();
  return (
    <div
      className='
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto'>
      <Header>
      <div className='mt-20'>
        <div className='
          flex
          flex-col
          md:flex-row
          items-center
          gap-x-5'>
            <div
              className='
              relative
              h-32
              w-32
              lg:h-44
              lg:w-44'>
              <Image 
                 fill
                 alt='CgPlayList'
                 className='object-cover'
                 src='/images/image1.jpg'
              />
            </div>

            <div className='
              flex
              flex-col
              gap-y-2
              mt-4
              md:mt-0'>
                <p className='hidden md:block font-semibold text-sm'>PlayList</p>
               <h1 
                 className='
                 text-white
                 text-4xl
                 lg:text-7xl
                 font-bold'>Liked Songs</h1>
            </div>
        </div>
      </div>
      </Header>
      <LikedContent songs={songs} /> 

    </div>
  );
}

export default page
