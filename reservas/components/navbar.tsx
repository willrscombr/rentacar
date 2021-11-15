import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import Link from 'next/link'

export default function Navbar(){
    return(
    <AppBar position="static" color="default">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
        </IconButton>
        <Link href="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Rent a car - Protótipo
            </Typography>
        </Link>
        <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>)
}