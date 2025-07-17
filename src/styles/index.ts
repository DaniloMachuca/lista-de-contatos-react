import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 224px;
`

export const TextBox = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Btn = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BtnEdit = styled(Btn)`
  background-color: ${variables.colors.btnEdit};
`
export const BtnSave = styled(Btn)`
  background-color: ${variables.colors.btnSave};
`
export const BtnDelete = styled(Btn)`
  background-color: ${variables.colors.btnDelete};
`
export const BtnCancel = styled(Btn)`
  background-color: ${variables.colors.btnCancel};
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
`

export default GlobalStyle
