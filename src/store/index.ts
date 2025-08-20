import { configureStore } from '@reduxjs/toolkit'
import contactreducer from './reducers/contact'
import filterreducer from './reducers/filter'

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : {}

const store = configureStore({
  reducer: {
    contact: contactreducer,
    filter: filterreducer
  },
  preloadedState: {
    contact: persistedState.contact,
    filter: persistedState.filter
  }
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
