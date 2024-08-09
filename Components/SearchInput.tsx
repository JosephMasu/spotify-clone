'use client';  // Add this line at the top of the file

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';
import qs from 'qs';
import Input from './Input';

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = encodeURIComponent(debouncedValue);
        const url = `/search?title=${query}`;
        router.push(url);
    }, [debouncedValue, router]);
    

    return (
        <Input 
        placeholder='What do you want to listen to'
        value={value}
        onChange={(e) =>setValue(e.target.value)}/>
    );
}

export default SearchInput;
