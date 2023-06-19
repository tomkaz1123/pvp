import { Box, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <Box sx={{paddingTop: 10}}>
            <Typography align="center" sx={{ fontWeight: 'bold', fontSize: 48}}>Page is not found!</Typography>
            <Typography align="center" sx={{ fontSize: 24}}>
                Use the buttons above to navigate to pages that are available.
            </Typography>
        </Box>
    )
}