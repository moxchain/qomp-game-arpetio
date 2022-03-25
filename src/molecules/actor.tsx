import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Card } from '../atoms'
import HeroImg from '../assets/hero.png'

const Actor = (params: {
  actor: {
    id: string;
    common_type: number;
    owner: string;
    speed: number;
} | null | undefined
}) => {
  const { actor } = params
  if (!actor) throw new Error('Actor not set')

  return <Card>
    <Col>
      <Image src={HeroImg} width='50vh' height='50vh'/>
    </Col>
    <Col>
      <Row>
        Type: {actor.common_type}
      </Row>
      <Row>
        ID: {actor.id}
      </Row>
      <Row>
        Owner: {actor.owner}
      </Row>
      <Row>
        Speed: {actor.speed}
      </Row>
    </Col>
  </Card>
}

export default Actor