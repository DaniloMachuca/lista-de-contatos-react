import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  classification: 'profissional' | 'pessoal' | 'all'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    cursor: pointer;
    display: flex;
    margin-bottom: 16px;
    alingn-items: center;

    input {
      margin-right: 8px;
    }
  }
`

export const Tag = styled.span<Props>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) =>
    props.classification === 'profissional'
      ? variables.colors.profissional
      : variables.colors.pessoal};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Email = styled.input`
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
export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Number = styled.input`
  color: #3f3f3fff;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 50%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  background-color: transparent;
  border-radius: 12px;
  padding: 4px;
`
