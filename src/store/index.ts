import { configureStore } from '@reduxjs/toolkit'
import contactreducer from './reducers/contact'
import filterreducer from './reducers/filter'

const store = configureStore({
  reducer: {
    contact: contactreducer,
    filter: filterreducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
