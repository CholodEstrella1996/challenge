import {Phrase} from "@/components/atoms/phrase/phrase.model"

type PhraseList = {
 phraseList: Phrase[]
 handleSearch: (text?:string) => void
 onAddPhrase: (text?:string) => void
}

export type {
    PhraseList
}