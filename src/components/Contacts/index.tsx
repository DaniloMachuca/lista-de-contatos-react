//Redux
import { useDispatch } from 'react-redux'
import { remove, edit } from '../../store/reducers/contact'

//Styles
import * as S from './styles'
import { BtnCancel, BtnDelete, BtnEdit, BtnSave, Title } from '../../styles'

//Class
import ContactsClass from '../../models/ContactsClass'
import { useEffect, useState } from 'react'
import { useMask } from '@react-input/mask'

type Props = ContactsClass

const Contacts = ({
  id,
  name,
  email: emailEdit,
  phone: phoneEdit,
  classification
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (emailEdit.length > 0) setEmail(emailEdit)
  }, [emailEdit])

  useEffect(() => {
    if (phoneEdit.length > 0) setPhone(phoneEdit)
  }, [phoneEdit])

  async function editTask() {
    await setIsEditing(true)
  }

  function cancel() {
    setIsEditing(false)
    setEmail(emailEdit)
    setPhone(phoneEdit)
  }

  const telRef = useMask({
    mask: '(__) _____-____',
    replacement: { _: /\d/ }
  })

  return (
    <S.Card>
      <Title>{name}</Title>
      <S.Tag classification={classification}>{classification}</S.Tag>
      <S.Email
        type="email"
        placeholder="Email"
        value={email}
        disabled={!isEditing}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Number
        type="tel"
        ref={telRef}
        placeholder="(00) 00000-0000"
        value={phone}
        disabled={!isEditing}
        onChange={(e) => setPhone(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <BtnSave
              onClick={() => {
                dispatch(edit({ id, name, email, phone, classification }))
                setIsEditing(false)
              }}
            >
              Save
            </BtnSave>
            <BtnCancel onClick={cancel}>Cancel</BtnCancel>
          </>
        ) : (
          <>
            <BtnEdit onClick={editTask}>Edit</BtnEdit>
            <BtnDelete onClick={() => dispatch(remove(id))}>Delete</BtnDelete>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contacts
