import React from 'react';

import { TopCard } from '../../components/TopCard';
import { TransactionCard, TransactionProps } from '../../components/TransactionCard';

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
   TopCardList,
   Transactions,
   Title,
   TransactionList
 } from './styles'

 export interface DataListProps extends TransactionProps {
  id: string;
 }


 export function Dashboard() {
  const data: DataListProps[] = [
    {
     id: '1',
     type: 'positive',
     title: 'Honorários de Dev',
     amount: "R$ 14.700,00",
     category: {
       name: 'Vendas',
       icon: 'dollar-sign'
     },
     date: "13/08/2020"
   },
    {
     id: '2',
     type: 'negative',
     title: 'Michellis Hambugers',
     amount: "R$ 78,90",
     category: {
       name: 'Alimentação',
       icon: 'coffee'
     },
     date: "15/08/2020"
   },
    {
     id: '3',
     type: 'negative',
     title: 'Aluguel Casa Tupinambas',
     amount: "R$ 1.620,00",
     category: {
       name: 'Alugueis',
       icon: 'home'
     },
     date: "20/08/2020"
   },
    {
     id: '4',
     type: 'negative',
     title: 'Escola Tom Maior',
     amount: "R$ 295,00",
     category: {
       name: 'Música - Vini',
       icon: 'music'
     },
     date: "26/08/2020"
   }
 ]

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

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
         data={data}
         keyExtractor={item => item.id }
         renderItem={({ item }) => <TransactionCard data={item} /> }
          
        />
        
      </Transactions>

      <TopCardList>
        <TopCard 
          type="up" 
          title="Entradas"
          amount="R$ 22.400,00"
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
