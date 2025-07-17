import * as enums from '../../util/enums/Contacts'
import * as S from './styles'
import { Title } from '../../styles'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { add } from '../../store/reducers/contact'
import { useMask } from '@react-input/mask'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [classification, setClassification] = useState(
    enums.Classification.PESSOAL
  )

  const addContact = async (e: FormEvent) => {
    await e.preventDefault()
    if (email.length === 0 && phone.length === 0) {
      alert('Preencha pelo menos um tipo de contato (email ou telefone)')
    } else {
      dispatch(add({ name, email, phone, classification, id: 0 }))
      navigate('/')
    }
  }

  const telRef = useMask({
    mask: '(__) _____-____',
    replacement: { _: /\d/ }
  })

  return (
    <S.Container>
      <Title>Adicionar Contato</Title>
      <form onSubmit={addContact}>
        <S.TextBox
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <S.TextBox
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <S.TextBox
          ref={telRef}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <S.Options>
          <p>Classificação</p>
          <S.Option>
            <input
              onChange={() => setClassification(enums.Classification.PESSOAL)}
              id="pessoal"
              value="pessoal"
              type="radio"
              name="classification"
              defaultChecked
            />
            <label htmlFor="pessoal">pessoal</label>
          </S.Option>
          <S.Option>
            <input
              onChange={() =>
                setClassification(enums.Classification.PROFISSIONAL)
              }
              id="profissional"
              value="profissional"
              type="radio"
              name="classification"
            />
            <label htmlFor="profissional">profissional</label>
          </S.Option>
        </S.Options>
        <S.Btn type="submit">Registrar</S.Btn>
        <S.BtnBack to="/">Cancelar</S.BtnBack>
      </form>
    </S.Container>
  )
}

export default Form
