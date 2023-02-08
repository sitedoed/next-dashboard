import React from 'react';
import styles from '@/styles/styledoed.module.css';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      
      <TextField
          label="Pesquisar"
          id="outlined-end-adornment"
          sx={{
            width: { sm: 200, md: 300 },
            "& .MuiInputBase-root": {
                height: 48
            }
        }}
          InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
          }}
        />
    </div>
  )
}
