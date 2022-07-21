import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Image from './images/AltheaHeadShot.jpg'
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Althea HeadShot" src={Image} sx={{ margin: "auto", width: 90, height: 90}}  variant="rounded"/>
      
    </Stack>
  );
}
