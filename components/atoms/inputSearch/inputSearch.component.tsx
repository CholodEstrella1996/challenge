import { useRef } from 'react'
import { IconButton, InputBase, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './inputSearch.module.css'
import { filter } from './inputSearch.model'

export const InputSearchComponent = ({ onSearch }: filter) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSearch = () => {
    const text = inputRef?.current?.querySelector('input')?.value
    onSearch(text)
  }

  const handleClear = () => {
    const text = inputRef?.current?.querySelector('input')
    if (text) text.value = ''
    onSearch()
  }

  return (
    <Paper className={styles.inputSearch__content} component="form">
      <TextField ref={inputRef} placeholder="Buscar" />
      <IconButton
        onClick={handleSearch}
        type="button"
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        onClick={handleClear}
        type="button"
      >
        <ClearIcon />
      </IconButton>
    </Paper>
  )
}
