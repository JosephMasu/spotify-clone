'use client'
import LikeButton from '@/Components/LikeButton';
import MediaItem from '@/Components/MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import { useUser } from '@/hooks/useUser';
import { Song } from '@/types'
import { useRouter } from 'next/navigation';
import React, { useEffect, useReducer } from 'react'

interface LIkedContentProps{
    songs: Song[];
}

const LIkedContent:React.FC<LIkedContentProps> = (
    {songs}
) =>{
    const router = useRouter();
    const {isLoading, user} = useUser();
    const play = useOnPlay(songs);

    useEffect(()=>{
        if (!isLoading && !user) {
            router.replace('/');

        }
    },[isLoading, user, router])
    if (songs.length === 0) {
        return (
            <div
            className='
            flex
            flex-col
            gap-y-2
            w-full
            px-6
            text-neutral-400'>
            No liked Songs
            </div>
        )
    }
    return(
        <div className='
        flex
        flex-col
        gap-y-2
        w-full
        px-6
        '>
        {songs.map((song) =>(
         <div
         key={song.id}
         className='
        flex
        items-center
        gap-x-4
        w-full
         '>
        <div 
        className='flex-1'>
            <MediaItem 
            onClick={(id: string)=>{play(id)}}
            data={song}/>
        </div>
        <LikeButton songId={song.id}/>
         </div>   
        ))}
        </div>
    )
}

export default LIkedContent;
