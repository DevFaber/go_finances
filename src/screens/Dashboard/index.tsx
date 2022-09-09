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
   PowerIcon
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

      <TopCard />
    </Container>
  );
}
