"use client";
import React, { useEffect, useState } from 'react'
import Modal from './Modal';

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
        <Modal 
        title='Test Modal'
        description='Test Description'
        isOpen
        onChange={()=>{}}>
            Test Children
        </Modal>
    </>
  )
}

export default ModalProvider