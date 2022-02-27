import styled from 'styled-components'
import { black, yellow } from '../styles/colors'

export const Button = styled.button`
  display: inline-block;
  color: white;
  background-color: ${black};
  font-size: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${yellow};
  border-radius: 1vh;
  display: block;
  &:hover {
    background-color: ${yellow};
    color: ${black};
  }
`