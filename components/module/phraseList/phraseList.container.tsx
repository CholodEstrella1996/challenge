import { useState } from 'react'
import { PhraseList } from './phraseList.model'
import { PhraseListComponent } from './phraseList.component'

export const PhraseListContainer = () => {
  const [phraseList, setPhraseList] = useState<PhraseList['phraseList']>([])
  const [phraseListFilter, setPhraseListFilter] =
    useState<PhraseList['phraseList']>()

  const handleSearch = (text?: string) => {
    if (!text) return setPhraseListFilter(undefined)
    const phrasesFilter = phraseList.filter(({ name }) => name.includes(text))
    setPhraseListFilter(phrasesFilter)
  }

  const onAddPhrase = (text: string) => {
    setPhraseList((prev) => [
      ...prev,
      { id: prev.length + 1, name: text  },
    ])
  }

  return (
    <PhraseListComponent
      phraseList={phraseListFilter ?? phraseList}
      handleSearch={handleSearch}
      onAddPhrase={onAddPhrase}
    />
  )
}
