import { Card, CardContent, Typography } from '@mui/material'
import { Phrase } from './phrase.model'
import styles from './phrase.module.css'


export const PhraseComponent = ({ id, name }: Phrase) => {
  return (
    <Card className={styles.phrase__container} sx={{ minWidth: 275 }} key={id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
