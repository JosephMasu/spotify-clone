'use client'
import { BounceLoader } from "react-spinners";
import Box from "@/Components/Box";

function loading() {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" size={40}/>
    </Box>
  )
}

export default loading;
