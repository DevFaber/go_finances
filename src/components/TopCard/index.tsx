import React from 'react'

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount, 
  LastTrans
} from './styles'

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTrans: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function TopCard({ title, amount, lastTrans, type }: Props) {
  return (
    <Container type={type}>
        <Header>
          <Title type={type}>{title}</Title>
          <Icon name={icon[type]} type={type}/>
        </Header>

        <Footer>
          <Amount type={type}>{amount}</Amount>

          <LastTrans type={type}>{lastTrans}</LastTrans>
       </Footer>
    </Container>
  )
}