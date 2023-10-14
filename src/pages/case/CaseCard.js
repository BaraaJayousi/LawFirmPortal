import MainCard from 'components/MainCard';
import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomerCard() {
  return (
    <>
      <MainCard>
        <Stack direction="column" spacing={2} divider={<Divider />}>
          <Stack Stack spacing={1.5} alignItems="flex-start">
            <FontAwesomeIcon icon="fa-solid fa-gavel" size="5x" style={{ marginBottom: '16px', color: '#1890ff' }} />
            <Stack direction="row" alignItems="flex-end" spacing={1.5}>
              <Typography variant="h3">Case Number :</Typography>
              <Typography variant="h4" color="error.main">
                LWS00000024
              </Typography>
            </Stack>
            <Stack>
              {/* Client Information */}
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">Court Case Number:</Typography>
                <Typography variant="body1">459758</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">Court Name:</Typography>
                <Typography variant="body1">LA Court House</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">Judge Name:</Typography>
                <Typography variant="body1">Philep Idaho</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Typography variant="subtitle1">Case Name:</Typography>
                <Typography variant="body1">Jewlery Theft</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h5" color="error" sx={{ mb: 2 }}>
              Client Details
            </Typography>
            {/* Client Information */}
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Client Name:</Typography>
              <Typography variant="body1">John Doe</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Phone Number:</Typography>
              <Typography variant="body1">0597755431</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Email:</Typography>
              <Typography variant="body1">info@example.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Company Name</Typography>
              <Typography variant="body1">Plastics Ltd.</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Nationality:</Typography>
              <Typography variant="body1">American</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Address:</Typography>
              <Typography variant="body1">NYC, USA, 10001</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h5" color="error" sx={{ mb: 2 }}>
              Offense Details
            </Typography>
            {/* Offense Information */}
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Offense Name:</Typography>
              <Typography variant="body1">John Doe</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Phone Number:</Typography>
              <Typography variant="body1">0597755431</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Email:</Typography>
              <Typography variant="body1">info@example.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Layers Name:</Typography>
              <Typography variant="body1">Chris Marken</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Layers Phone Number:</Typography>
              <Typography variant="body1">0597755431</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Nationality:</Typography>
              <Typography variant="body1">American</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography variant="subtitle1">Address:</Typography>
              <Typography variant="body1">NYC, USA, 10001</Typography>
            </Stack>
          </Stack>
        </Stack>
      </MainCard>
    </>
  );
}

export default CustomerCard;
