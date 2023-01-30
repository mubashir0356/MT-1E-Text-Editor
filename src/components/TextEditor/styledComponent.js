import styled from 'styled-components'

export const BoldBtn = styled.button`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0px;
  margin-right: 15px;
`

export const ItalicBtn = styled(BoldBtn)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const UnderlineBtn = styled(BoldBtn)`
  color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.activeBold ? 900 : 'normal')};
  font-style: ${props => (props.activeItalic ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.activeUnderline === true ? 'underline' : 'normal'};
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0px;
  padding-left: 10px;
`
