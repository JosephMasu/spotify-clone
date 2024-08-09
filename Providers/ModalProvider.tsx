"use client";
import React, { useEffect, useState } from 'react'
import Modal from '../Components/Modal'
import AuthModal from '@/Components/AuthModal';
import UploadModal from '@/Components/UploadModal';
import SubscribrModal from '@/Components/SubscribrModal';
import { ProductWithPrice } from '@/types';

interface ModalProviderProps {
  products: ProductWithPrice[];
}
const ModalProvider :React.FC<ModalProviderProps>=({products})=> {
    const [isMounted, SetIsMounted] = useState(false);
    useEffect(()=>{
        SetIsMounted(true);
    }, [])
    if (!isMounted) {
        return null;
    }
  return (
    <>
        <AuthModal/>
        <UploadModal />
        <SubscribrModal products={products}/>
    </>
  )
}

export default ModalProvider