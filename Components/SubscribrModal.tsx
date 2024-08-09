'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import { Price, ProductWithPrice } from '@/types';
import Button from './Button';
import { useUser } from '@/hooks/useUser';
import toast from 'react-hot-toast';


interface SubscribeModalProps {
    products: ProductWithPrice[];
}

const formatPrice = (price: Price)=>{
    const priceString = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: price.currency,
        minimumFractionDigits: 0
    }).format((price?.unit_amount || 0) /100);
    return priceString;
}

const SubscribrModal:React.FC<SubscribeModalProps> =({products})=> {

    const{user, isLoading, subscription} = useUser();
    const [priceIsLoading, setPriceIsLoading] = useState<string>()

    const handleCheckout = async(price: Price)=>{
        setPriceIsLoading(price.id);
        if (!user) {
            setPriceIsLoading(undefined);
            return toast.error('Must be logged in');
        }
    }
    let content=(
        <div className='text-center'>No Products available</div>
    )
    if (products.length) {
        content=(
            <div>
                {products.map((product) =>{
                    if(!product.prices?.length){
                        return(
                            <div key={product.id}>
                                No prices available
                            </div>
                        );
                    }
                    return product.prices.map((price)=>(
                        <Button 
                        key={price.id}
                        onClick={() => handleCheckout(price)}
                        disabled={isLoading || price.id === priceIsLoading}
                        className='mb-4'>
                            {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
                        </Button>
                    ))
                })}
            </div>
        )
    }
  return (
    <Modal 
    title = 'Only for premium users'
    description='Listen to music with Spotify Premium'
    isOpen
    onChange={()=>{}}>
        {content}
    </Modal>
  )
}

export default SubscribrModal;
