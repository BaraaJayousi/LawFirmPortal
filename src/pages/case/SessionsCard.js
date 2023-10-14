import React, { useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import NewSessionModal from './NewSessionModal';
import SessionAccordion from './SessionAccordion';

const sample= "Laborum officia laboris aute qui sit ut voluptate occaecat amet voluptate nisi eu aute fugiat. Ut irure sint minim mollit labore ea sint deserunt eiusmod exercitation eu anim excepteur ipsum. Et dolor laborum non et. Ex non sunt cupidatat labore non commodo amet consectetur voluptate sit non. Fugiat reprehenderit velit irure consectetur."

function SessionsCard() {
  // use redux to control the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack direction="column" alignItems="flex-start" spacing={4.5}>
      <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
        <Typography variant="h4">All Sessions</Typography>
        <Button variant="contained" onClick={handleOpen}>
          Add Session
        </Button>
      </Stack>
      <Stack spacing={1.5} direction="column" sx={{ width: '100%' }}>
        <SessionAccordion sessionNum={1} sessionDate={'2023/10/07'} details={sample} />
        <SessionAccordion sessionNum={2} sessionDate={'2023/10/13'} details={sample}/>
      </Stack>
      {/* <Typography variant="body1">No Scheduald Sessions</Typography> */}
      <NewSessionModal openModal={open} handleClose={handleClose} />
    </Stack>
  );
}

export default SessionsCard;
