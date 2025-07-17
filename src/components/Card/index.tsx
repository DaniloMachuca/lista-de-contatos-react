//Styles
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { setFilter } from '../../store/reducers/filter'
type Props = {
  label: string
  classification: 'profissional' | 'pessoal' | 'all'
}
const Card = ({ label, classification }: Props) => {
  const { contact, filter } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()

  const contactCounter = () => {
    if (classification === 'all') {
      return contact.list.length
    }
    if (classification === 'profissional') {
      return contact.list.filter(
        (item) => item.classification === classification
      ).length
    }
    if (classification === 'pessoal') {
      return contact.list.filter(
        (item) => item.classification === classification
      ).length
    }
  }
  const filtering = () => {
    dispatch(setFilter({ classification }))
  }
  const activeCheck = () => {
    const same = filter.classification === classification
    return same
  }

  const counter = contactCounter()
  const active = activeCheck()

  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default Card
