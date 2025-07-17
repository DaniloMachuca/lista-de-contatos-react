import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  query?: string
  classification: 'profissional' | 'pessoal' | 'all'
}

const initialState: FilterState = {
  query: '',
  classification: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setFilter: (state, action: PayloadAction<FilterState>) => {
      state.classification = action.payload.classification
    }
  }
})

export const { setQuery, setFilter } = filterSlice.actions
export default filterSlice.reducer
