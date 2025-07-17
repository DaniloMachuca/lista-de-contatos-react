//Components
import { useDispatch } from 'react-redux'
import Card from '../../components/Card'

//Styles
import { TextBox } from '../../styles'
import * as S from './styles'
import { setQuery } from '../../store/reducers/filter'

const Sidebar = () => {
  const dispatch = useDispatch()

  return (
    <S.Aside>
      <div>
        <TextBox
          placeholder="Search"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
        <S.Filters>
          <Card label="Todas" classification="all" />
          <Card label="Profissional" classification="profissional" />
          <Card label="Pessoal" classification="pessoal" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
