import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface LikeButtonProps{
    songId: string;
}

const LikeButton: React.FC<LikeButtonProps> =({
    songId
}) =>{
    const router = useRouter();
    const { supabaseClient } = useSessionContext(); 

    const authModal = useAuthModal();
    const { user } = useUser();

    const [isliked, setIsliked] = useState(false);

    useEffect(() =>{
        if (!user?.id) {
            return;
        }

        const fetchData = async()=>{
            const{data, error} = await supabaseClient
            .from('liked_songs')
            .select('*')
            .eq('user_is', user.id)
            .eq('user_is', songId)
            .single();

            if (!error && data) {
                setIsliked(true);
            }

        };

    }, [user?.id, songId, supabaseClient])
    const Icon = isliked ? AiFillHeart : AiOutlineHeart;
  return (
    <button>
      <Icon color={isliked ? '#22c55e' : 'white'} size={25}/>
    </button>
  )
}

export default LikeButton
