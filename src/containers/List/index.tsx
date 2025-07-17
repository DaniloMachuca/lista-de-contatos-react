//Components
import Contacts from '../../components/Contacts'

//Styles
import * as S from './styles'
import { MainContainer } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const List = () => {
  const { list } = useSelector((state: RootReducer) => state.contact)
  const { classification, query } = useSelector(
    (state: RootReducer) => state.filter
  )

  const listFilter = () => {
    let filteredItens = list
    if (query !== undefined) {
      filteredItens = filteredItens.filter(
        (item) =>
          item.name.toLocaleLowerCase().search(query.toLocaleLowerCase()) >=
            0 ||
          item.email.toLocaleLowerCase().search(query.toLocaleLowerCase()) >=
            0 ||
          item.phone.toLocaleLowerCase().search(query.toLocaleLowerCase()) >= 0
      )
      if (classification !== 'all') {
        filteredItens = filteredItens.filter(
          (item) => item.classification === classification
        )
      }
      return filteredItens
    } else {
      return list
    }
  }

  const itens = listFilter()

  return (
    <MainContainer>
      <h1>Lista de Contato</h1>
      <S.ListContainer>
        {itens.map((item) => (
          <li key={item.id}>
            <Contacts
              id={item.id}
              name={item.name}
              email={item.email}
              phone={item.phone}
              classification={item.classification}
            />
          </li>
        ))}
      </S.ListContainer>
    </MainContainer>
  )
}

export default List
