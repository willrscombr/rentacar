import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import Link from 'next/link'

export default function Navbar(){
    return(
    <AppBar position="static" color="default" sx={{marginBottom: 8}}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
        </IconButton>
        <Link href="/" >
            <Typography variant="h6" component="div" color="primary.main" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                Rent a car - Protótipo
            </Typography>
        </Link>
        <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>)
}