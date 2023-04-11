import { Box, Button, Fade, Modal, Paper, TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { Phrase } from './newPhrase.model'
import styles from './newPhrase.module.css'

export const NewPhraseComponent = ({ onAddPhrase }: Phrase) => {
  const textRef = useRef<HTMLInputElement | null>(null)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleCreate = () => {
    const text = textRef?.current?.querySelector('input')?.value
    if (text) {
      onAddPhrase(text)
      setOpen(false)
    }
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen} size="medium">
        Crear Frase
      </Button>
      <Modal
        className={styles.newPhrase__container}
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Fade in={open}>
          <Box sx={{ width: 200 }} className={styles.newPhrase__modalBox}>
            <TextField
              className={styles.newPhrase__modalName}
              ref={textRef}
              placeholder="Nombre"
            />
            <Button
              variant="contained"
              className={styles.newPhrase__modalButton}
              onClick={handleCreate}
            >
              Crear
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
