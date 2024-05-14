import React from 'react'
import { Skeleton, Stack } from '@mui/material'

function StoriesLoading() {
  return (
    <div>
      <Stack spacing={2} direction="row" padding={2}>
        <Skeleton variant="rectangular" sx={{height: "30vh", width: "30vw"}} />
        <Skeleton variant="rectangular" sx={{height: "30vh", width: "30vw"}} />
        <Skeleton variant="rectangular" sx={{height: "30vh", width: "30vw"}} />
        <Skeleton variant="rectangular" sx={{height: "30vh", width: "30vw"}} />
      </Stack>
    </div>
  )
}

export default StoriesLoading