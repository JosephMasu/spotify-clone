'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import useUploadModal from '@/hooks/useUploadModal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import toast from 'react-hot-toast';
import { useUser } from '@/hooks/useUser';
import uniqid from 'uniqid';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();
    const { user } = useUser();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const { register, reset, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true);
            const imageFile = values.image?.[0];
            const songFile = values.song?.[0];

            if (!imageFile || !songFile || !user) {
                toast.error('Missing fields');
                return;
            }

            const uniqueID = uniqid();
            // Upload song
            const {
                data: songData,
                error: songError,
            } = await supabaseClient
            .storage
            .from('songs')
            .upload(
                `song-${values.title}-${uniqueID}`, 
                songFile, 
                { cacheControl: '3000',
                    upsert:false
                 }
            );

            if (songError) {
                toast.error('Error uploading song');
                return;
            }
                        // Upload image
            const {
                data: imageData,
                error: imageError,
            } = await supabaseClient
            .storage
            .from('images')
            .upload(
                `song-${values.title}-${uniqueID}`, 
                imageFile, 
                { cacheControl: '3000',
                    upsert:false
                 }
            );
            if (imageError) {
                toast.error('Error uploading image');
                return;
            }

            const {
                error: supabaseError 
            } = await supabaseClient
            .from('songs')
            .insert({
                user_id: user.id,
                title: values.title,
                author: values.author,
                song_image: imageData.path,
                song_path: songData.path,

            });
            if (supabaseError) {
                setIsLoading(false);
                return toast.error(supabaseError.message);
            }
            router.refresh();
            setIsLoading(false);
            toast.success('Song created');
            reset();
            uploadModal.onClose();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    };

    return (
        <Modal
            title='Add a Song'
            description='Upload an mp3 File'
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-y-4'
            >
                <Input
                    id='title'
                    disabled={isLoading}
                    {...register('title', { required: true })}
                    placeholder='Song Title'
                />
                <Input
                    id='author'
                    disabled={isLoading}
                    {...register('author', { required: true })}
                    placeholder='Song Author'
                />
                <div>
                    <div className='pb-1'>Select a song from your device</div>
                    <Input
                        id='song'
                        type='file'
                        accept='.mp3'
                        disabled={isLoading}
                        {...register('song', { required: true })}
                    />
                </div>
                <div>
                    <div className='pb-1'>Select an image</div>
                    <Input
                        id='image'
                        type='file'
                        accept='image/*'
                        disabled={isLoading}
                        {...register('image', { required: true })}
                    />
                </div>
                <Button disabled={isLoading} type='submit'>
                    Create
                </Button>
            </form>
        </Modal>
    );
};

export default UploadModal;
