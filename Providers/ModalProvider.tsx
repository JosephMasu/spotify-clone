"use client";
import React, { useEffect, useState } from 'react'
import Modal from '../Components/Modal'
import AuthModal from '@/Components/AuthModal';
import UploadModal from '@/Components/UploadModal';
const ModalProvider=()=> {
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
    </>
  )
}

export default ModalProvider