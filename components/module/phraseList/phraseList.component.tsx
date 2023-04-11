import { Typography } from '@mui/material'
import { Phrase } from '@/components/atoms/phrase'
import { InputSearch } from '@/components/atoms/inputSearch'
import { PhraseList } from './phraseList.model'
import { NewPhrase } from '@/components/atoms/newPhrase'
import styles from './phraseList.module.css'

export const PhraseListComponent = ({
  phraseList,
  handleSearch,
  onAddPhrase,
}: PhraseList) => {

  const handleAddPhrase = (text: string) => {
    onAddPhrase(text)
  }

  return (
    <div className={styles.phraseList__container}>
      <div className={styles.phraseList__header}>
        <InputSearch onSearch={handleSearch} />
        <NewPhrase onAddPhrase={handleAddPhrase} />
      </div>
      <div>
        {Boolean(phraseList.length) ? (
          <section className={styles.phraseList__content}>
            
            {phraseList.map((phrase) => (
              <Phrase key={phrase.id} id={phrase.id} name={phrase.name} />
            ))}
            
          </section>
        ) : (
          <Typography>No hay datos</Typography>
        )}
      </div>
    </div>
  )
}
