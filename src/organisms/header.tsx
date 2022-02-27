import React, { useContext } from 'react'
import AddressContext from '../contexts/address'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import {
  DisableAccount
} from '../molecules/disableAccount'
import {
  Text
} from '../atoms'

export const Header = () => {
  const {address} = useContext(AddressContext)

  return (
  <Container>
    <Row
    style={{
      alignItems: 'center'
    }}>
    <Col style={{flex: 1}}>
      <DisableAccount/>
    </Col>
    <Col style={{flex: 5}}>
      <Text>
        Address: {address}
      </Text>
    </Col>
    </Row>
  </Container>    
  )
}