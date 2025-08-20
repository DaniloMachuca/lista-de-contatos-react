import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactsClass from '../../models/ContactsClass'
import * as enums from '../../util/enums/Contacts'

type ContactsState = {
  list: ContactsClass[]
}

const initialState: ContactsState = {
  list: []
}

const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((contact) => contact.id !== action.payload)
    },
    edit: (state, action: PayloadAction<ContactsClass>) => {
      const contactIndex = state.list.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.list[contactIndex] = action.payload
      }
    },
    add: (state, action: PayloadAction<ContactsClass>) => {
      const ExistingContact = state.list.find(
        (c) =>
          c.name.toLocaleLowerCase() === action.payload.name.toLocaleLowerCase()
      )

      if (ExistingContact) {
        alert('Já existe um contato com esse nome')
      } else {
        const lastContact = state.list[state.list.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.list.push(newContact)
      }
    }
  }
})

export const { remove, edit, add } = ContactSlice.actions
export default ContactSlice.reducer
