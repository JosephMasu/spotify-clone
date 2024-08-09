'use client'
import * as RadixSlider from '@radix-ui/react-slider';
import React from 'react';

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;  
}

const Slider: React.FC<SliderProps> = ({ value = 0, onChange }) => {

  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  }

  return (
    <RadixSlider.Root
      className='
      relative
      flex
      items-center
      select-none
      touch-none
      w-full
      h-10'
      value={[value]} 
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label='Volume'
    >
      <RadixSlider.Track className='bg-gray-200 relative grow rounded-full h-[3px]'>
        <RadixSlider.Range className='absolute bg-white rounded-full h-full' />
      </RadixSlider.Track>
      <RadixSlider.Thumb className='block w-4 h-4 bg-neutral-100 rounded-full' />
    </RadixSlider.Root>
  );
}

export default Slider;
