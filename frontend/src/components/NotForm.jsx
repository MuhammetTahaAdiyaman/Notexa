import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { notOlustur } from '../features/data/dataSlice'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Menu } from '@mui/material';

function NotForm() {

    const [baslik, setBaslik] = useState("");
    const [aciklama, setAciklama] = useState("");
    const [oncelik, setOncelik] = useState(1);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(notOlustur({ baslik, aciklama, oncelik }));
        setAciklama("");
        setBaslik("");
        setOncelik(1);
    }


    // return (
    //     <section className='form'>
    //         <form onSubmit={onSubmit}>
    //             <div className="form-group">
    //                 <label htmlFor="baslik">Not Başlık: </label>
    //                 <input type="text" name="baslik" id="baslik" value={baslik} onChange={(e) => setBaslik(e.target.value)} />
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="aciklama">Not Açıklama: </label>
    //                 <input type="text" name="aciklama" id="aciklama" value={aciklama} onChange={(e) => setAciklama(e.target.value)} />
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="oncelik">Not Öncelik Durumu: </label>
    //                 <select name="oncelik" id="oncelik" value={oncelik} onChange={(e) => setOncelik(e.target.value)}>
    //                     <option value="1">Az Öncelikli</option>
    //                     <option value="2">Normal</option>
    //                     <option value="3">Acil</option>
    //                 </select>
    //             </div>
    //             <div className="form-group">
    //                 <button type="submit" className='btn btn-block btn-add'>Not Ekle</button>
    //             </div>
    //         </form>
    //     </section>
    // )

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '25px' }} component="form" onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <FormControl fullWidth>
                        <TextField label="Not Başlığını Giriniz.." type='text' name='baslik' value={baslik} onChange={(e) => setBaslik(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id="selectId">Öncelik Sırası</InputLabel>
                        <Select labelId='selectId' value={oncelik} label="Öncelik Sırası" onChange={(e) => setOncelik(e.target.value)}>
                            <MenuItem value="1">Az Öncelik</MenuItem>
                            <MenuItem value="2">Normal</MenuItem>
                            <MenuItem value="3">Acil</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: '25px' }}>
                <FormControl fullWidth>
                    <TextField label="Not Açıklamasını Giriniz.." type='text' name='aciklama' value={aciklama} onChange={(e) => setAciklama(e.target.value)} />
                </FormControl>
            </Grid>
            <Grid container sx={{ marginTop: '15px' }}>
                <FormControl fullWidth>
                    <Button type='submit' size='large' variant='contained' endIcon={<AddCircleIcon />}>Not Ekle</Button>
                </FormControl>
            </Grid>
        </Box>
    )
}

export default NotForm