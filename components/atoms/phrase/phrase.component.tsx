import { Card, CardContent, Typography } from '@mui/material'
import { Phrase } from './phrase.model'

export const PhraseComponent = ({ id, name }: Phrase) => {
  return (
    <Card sx={{ minWidth: 275 }} key={id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
