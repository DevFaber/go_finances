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

export function TopCard() {
  return (
    <Container>
        <Header>
          <Title>Entrada</Title>
          <Icon name="arrow-up-circle"/>
        </Header>

        <Footer>
          <Amount>R$ 17.400,00</Amount>

          <LastTrans>Última entrada dia 13 de agosto</LastTrans>
       </Footer>
    </Container>
  )
}