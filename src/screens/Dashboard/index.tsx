import React from 'react';

import { TopCard } from '../../components/TopCard';

import {
   Container,
   Header,
   UserWrapper,
   UserInfo,
   Photo,
   User,
   UserGreeting,
   UserName,
   PowerIcon,
   TopCardList
 } from './styles'

 export function Dashboard() {
  return (
    <Container >
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/52553584?v=4" }}/>
              <User>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Fabrício</UserName>
            </User>
          </UserInfo>
         <PowerIcon name="power"/>
        </UserWrapper>
      </Header>

      <TopCardList>
        <TopCard 
          type="up" 
          title="Entradas"
          amount="R$ 17.400,00"
          lastTrans="Última entrada no dia 13 de agosto" 
                  
        />
        <TopCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTrans="Última saída no dia 19 de agosto"
        />
        <TopCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTrans="01 à 19 de agosto"
        />
      </TopCardList>
    </Container>
  );
}
