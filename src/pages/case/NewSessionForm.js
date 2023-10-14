import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormControl, FormHelperText, Stack, TextField } from '@mui/material';
import dayjs from 'dayjs';

function NewSessionForm() {
  let today = `${dayjs().get('y')}-${dayjs().get('M') + 1}-${dayjs().get('D')}`;
  return (
    <Stack direction="column" spacing={2}>
      <Stack spacing={1.5} direction="row" alignItems="flex-start" justifyContent="space-between">
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="input-session-name" aria-describedby="session-name" label="Session Name" variant="outlined" />
          <FormHelperText id="my-helper-text">Provide a name for the court session</FormHelperText>
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs(today)} />
          </LocalizationProvider>
        </FormControl>
      </Stack>
      <Stack spacing={1.5} direction="row" alignItems="center" justifyContent="space-between">
        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <TextField id="outlined-multiline-static" label="Session Details" multiline rows={4} defaultValue="" />
          <FormHelperText id="my-helper-text">Add Details regarding the session</FormHelperText>
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default NewSessionForm;
