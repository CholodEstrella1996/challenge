import { useRef } from 'react'
import { IconButton, InputBase, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import { filter } from './inputSearch.model'

export const InputSearchComponent = ({ onSearch}: filter) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

const handleSearch = () =>{
  const text = inputRef?.current?.querySelector("input")?.value
  onSearch(text)
  
}

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <TextField
        ref={inputRef}
        // sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        // inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon  />
      </IconButton>
     
    </Paper>
  )
}
