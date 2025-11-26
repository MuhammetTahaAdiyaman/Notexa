import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux'
import { Form, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { kullanici, isHata, isBasari, isYukleniyor, mesaj } = useSelector(state => state.auth);

    const [formData, setFormData] = useState({
        kullaniciAd: '',
        email: '',
        parola: '',
        parolaKontrol: ''
    });

    const { kullaniciAd, email, parola, parolaKontrol } = formData;
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [hataMesaji, setHataMesaji] = useState('');

    const closeSnackbar = () => {
        setOpen(false);
    }

    const handleClickPassword = () => {
        setShowPassword(!showPassword);
    }


    const onChange = (e) => {
        setFormData((onceki) => ({
            ...onceki,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (parola !== parolaKontrol) {
            setHataMesaji("Parolalar Eşleşmedi!!");
            setOpen(true);
        } else {
            const userData = {
                kullaniciAd, email, parola
            }
            dispatch(register(userData));
        }
    }

    useEffect(() => {
        if (isHata) {
            setHataMesaji(mesaj);
            setOpen(true);
        }

        if (isBasari || kullanici) {
            navigate('/')
        }

        dispatch(reset());

    }, [kullanici, isBasari, isHata, mesaj, navigate, dispatch])

    if (isYukleniyor) {
        <Spinner />
    }

    // return <>
    //     <section className='heading'>
    //         <h1>
    //             <FaUser /> Üyelik Oluştur
    //         </h1>
    //     </section>
    //     <section className='form'>
    //         <form onSubmit={onSubmit}>
    //             <div className="form-group">
    //                 <input type='text' className='form-control' id='kullaniciAd' name='kullaniciAd' value={kullaniciAd} placeholder='Kullanıcı Adınızı Girin' onChange={onChange} />
    //             </div>
    //             <div className="form-group">
    //                 <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Email Adresinizi Girin' onChange={onChange} />
    //             </div>
    //             <div className="form-group">
    //                 <input type='password' className='form-control' id='parola' name='parola' value={parola} placeholder='Parola Giriniz' onChange={onChange} />
    //             </div>
    //             <div className="form-group">
    //                 <input type='password' className='form-control' id='parolaKontrol' name='parolaKontrol' value={parolaKontrol} placeholder='Parola Tekrarı Giriniz' onChange={onChange} />
    //             </div>
    //             <div className='form-group'>
    //                 <button type='submit' className='btn btn-block'>Üye Ol</button>
    //             </div>
    //         </form>
    //     </section>
    // </>

    return <Container maxWidth="md">
        <Stack spacing={6}>
            <Box>
                <Typography variant="h4">
                    <AssignmentIcon color="info" sx={{ fontSize: '55px', marginBottom: '-15px' }} />
                    Register Sayfası
                </Typography>
            </Box>
            <Divider />
            <Box component="form" onSubmit={onSubmit}>
                <TextField fullWidth label="Kullanıcı Adını Giriniz" type="text" name="kullaniciAd" value={kullaniciAd} variant='filled' onChange={onChange} margin="normal" />

                <TextField fullWidth label="Email Giriniz" type="email" name="email" value={email} onChange={onChange} variant='filled' margin="normal" />

                {/* <TextField fullWidth label="Parola Giriniz" type="password" name="parola" value={parola} onChange={onChange} variant='filled' margin="normal" />

                <TextField fullWidth label="Parola Tekrarını Giriniz" type="password" name="parolaKontrol" value={parolaKontrol} variant='filled' onChange={onChange} margin="normal" /> */}

                <FormControl fullWidth sx={{ marginTop: '10px' }}>
                    <InputLabel htmlFor='parola'>Parolanızı Giriniz</InputLabel>
                    <FilledInput fullWidth id='parola' label='Parolanızı Giriniz' type={showPassword ? 'text' : 'password'} name='parola' value={parola} onChange={onChange} endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleClickPassword} edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }>

                    </FilledInput>
                </FormControl>

                <FormControl fullWidth sx={{ marginTop: '10px' }}>
                    <InputLabel htmlFor='parolaKontrol'>Parola Tekrarını Giriniz</InputLabel>
                    <FilledInput fullWidth id='parolaKontrol' label='Parola Tekrarını Giriniz' type={showPassword ? 'text' : 'password'} name='parolaKontrol' value={parolaKontrol} onChange={onChange} endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleClickPassword} edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }>

                    </FilledInput>
                </FormControl>

                <Button variant='contained' type='submit' color='primary' fullWidth size="large" endIcon={<SendIcon />} sx={{ marginTop: '25px' }}>Kayıt Olun</Button>
            </Box>
        </Stack>
        <Snackbar open={open} autoHideDuration={5000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{ marginTop: '50px' }}>
            <Alert severity='error'>
                {hataMesaji}
                <IconButton size='small' aria-label='close' color='inherit' onClick={closeSnackbar}>
                    <CloseIcon fontSize='small'></CloseIcon>
                </IconButton>
            </Alert>
        </Snackbar>
    </Container>
}

export default Register