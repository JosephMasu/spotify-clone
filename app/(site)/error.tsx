'use client'

import Box from "@/Components/Box";

function error() {
  return (
    <Box
    className="
    h-full flex items-center justify-center">
      <div className="text-neutral-500">
        Something Went Wrong.
      </div>
    </Box>

  )
}

export default error;
