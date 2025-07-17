import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px auto;
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  max-width: 547px;
  form {
    display: flex;
    flex-direction: column;
  }
`
export const TextBox = styled.input`
  color: #3f3f3fff;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  background-color: transparent;
  border-radius: 16px;
  padding: 12px;
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
export const Btn = styled.button`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  padding: 4px;
  border-radius: 16px;
  background-color: #1e90ff;
  margin-top: 16px;
`
export const BtnBack = styled(Link)`
  background-color: #c1c1c1c1;
  color: #000000ff;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  padding: 4px;
  border-radius: 16px;
  margin-top: 16px;
  text-decoration: none;
  display: block;
  text-align: center;
`
