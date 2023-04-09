import { Button, Typography } from '@mui/material'
import { Phrase } from '@/components/atoms/phrase'
import { InputSearch } from '@/components/atoms/inputSearch'
import { PhraseList } from './phraseList.model'
import { useState } from 'react'
import { NewPhrase } from '@/components/atoms/newPhrase'

export const PhraseListComponent = ({
  phraseList,
  handleSearch,
  onAddPhrase
}: PhraseList) => {
const [openModal, setOpenModal] =useState(false)

  return (
    <div>
      <div>
        <InputSearch onSearch={handleSearch} />
        <Button variant="text" onClick={()=> setOpenModal(prev => !prev)} >Crear</Button>
      </div>
      <div>
        {Boolean(phraseList.length) ? (
          phraseList.map((phrase) => (
            <Phrase key={phrase.id} id={phrase.id} name={phrase.name} />
          ))
        ) : (
          <Typography>No hay datos</Typography>
        )}
      </div>
{
  openModal && <NewPhrase  name={''} onAddPhrase={onAddPhrase} />
}
    </div>
  )
}
