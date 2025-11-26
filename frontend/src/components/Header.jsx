import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaPen, FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

import AppBar from '@mui/material/AppBar'
import { Toolbar, Typography, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { kullanici } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/login');
    }

    const girisYap = () => {
        navigate('/login');
    }

    const uyeOl = () => {
        navigate('/register');
    }

    const anasayfayaGit = () => {
        navigate('/');
    }
    // return (
    //     <header className='header'>
    //         <h2>Notexa</h2>
    //         <div className='logo'>

    //         </div>
    //         <ul>
    //             {kullanici ? (
    //                 <>
    //                     <li>
    //                         <Link to="/"><FaPen /> Not Oluştur </Link>
    //                     </li>
    //                     <li>
    //                         <button className='btn' onClick={onLogout}>
    //                             <FaSignOutAlt />
    //                         </button>
    //                     </li>
    //                 </>
    //             ) : (
    //                 <>
    //                     <li>
    //                         <Link to="/login"><FaSignInAlt /> Giriş </Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/register"><FaUser /> Üye Ol</Link>
    //                     </li>
    //                 </>
    //             )}


    //         </ul>
    //     </header>
    // )
    return (
        <AppBar position='static' color='primary' sx={{ marginBottom: '50px' }} >
            <Toolbar >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow: 1
                    }}
                >
                    Notexa
                </Typography>
                {kullanici ? (
                    <>
                        <Button sx={{ marginRight: '10px' }} color='inherit' size='large' startIcon={<HomeIcon />} onClick={anasayfayaGit}>Anasayfa</Button>
                        <Button variant='outlined' sx={{ marginRight: '10px' }} color='inherit' size='medium' startIcon={<LogoutIcon />} onClick={onLogout}>Çıkış Yap</Button>
                    </>
                ) : (
                    <>
                        <Button sx={{ marginRight: '10px' }} color='inherit' size='medium' startIcon={<LoginIcon />} onClick={girisYap}>Giriş Yap</Button>
                        <Button variant='outlined' sx={{ marginRight: '10px' }} color='inherit' size='medium' startIcon={<FaceIcon />} onClick={uyeOl}>Üye Ol</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header