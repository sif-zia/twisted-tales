import React from 'react'
import { Skeleton, Stack } from '@mui/material'

function StoriesLoading() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
      </Stack>
    </div>
  )
}

export default StoriesLoading