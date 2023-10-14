import MainCard from 'components/MainCard'
import React from 'react'
import { Stack, Typography,Divider} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CustomerCard() {
    return (
        <>
            <MainCard>
                <Stack direction="column" spacing={2} divider={<Divider />}>
                    <Stack Stack spacing={0.5} alignItems="flex-start">
                        <FontAwesomeIcon icon="fa-solid fa-user" size="10x" style={{ marginBottom: '16px', color: '#1890ff' }} />
                        <Typography variant="h3">John doe</Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                            Nationality: German
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h5" color="error" sx={{ mb: 2 }}>
                            Client Details
                        </Typography>
                        {/* Client Information */}
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
                            <Typography variant="subtitle1">ID:</Typography>
                            <Typography variant="body1">48579824</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1.5}>
                            <Typography variant="subtitle1">Address:</Typography>
                            <Typography variant="body1">NYC, USA, 10001</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1.5}>
                            <Typography variant="subtitle1">Notes:</Typography>
                            <Typography variant="body1">Facing issues with the general councler</Typography>
                        </Stack>
                    </Stack>
                </Stack>
        </MainCard>
    </>
)
}

export default CustomerCard