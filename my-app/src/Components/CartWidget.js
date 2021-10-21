import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardWidget = ({img }) => (
  <Card>
    <Image src={img} width="40px" />
    <Card.Content>
    </Card.Content>
    
  </Card>
)

export default CardWidget;