import styled from 'styled-components'
import { black, yellow } from '../styles/colors'
import { Card as BCard } from 'react-bootstrap'

export const Card = styled(BCard)`
  border: 2px solid ${yellow};
  border-radius: 1vh;
  background-color: ${black};
  padding: 1em;
  display: flex;
  flex-direction: column;
`