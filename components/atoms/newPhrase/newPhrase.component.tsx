import {  Button, Paper, TextField } from '@mui/material'
import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Phrase } from './newPhrase.model'

export const NewPhraseComponent = ({ name, onAddPhrase }: Phrase) => {
  const textRef = useRef<HTMLInputElement | null>(null)

  const handleCreate = () =>{
    const text = textRef?.current?.querySelector("input")?.value
    onAddPhrase(text)
    
  }
const containerDiv = document.getElementById("containerDiv")
if(!containerDiv) return null


  return ReactDOM.createPortal (
    <div >
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <TextField
          ref={textRef}
          // sx={{ ml: 1, flex: 1 }}
          placeholder="Crea"
          // inputProps={{ 'aria-label': 'search google maps' }}
        />
      </Paper>
      <Button onClick={handleCreate} >fdkdjskjsdkd</Button>
    </div>, containerDiv
  )
}
