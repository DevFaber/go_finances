import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View<TransactionProps>`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 7px;
  padding: 17px 24px;
  border-bottom-width: 1px;
  border-color: ${({ theme, type }) => 
  type === 'positive' ? theme.colors.success : theme.colors.attention};
  margin-bottom: 15px;
  width: ${RFValue(330)}px ;

`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  `
  
export const Amount = styled.Text<TransactionProps>`  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  color: ${({ theme, type }) => 
  type === 'positive' ? theme.colors.success : theme.colors.attention};
`
export const Footer = styled.View`
  flex-direction: row ;
  justify-content: space-between;
  align-items: center ;
  margin-top: 10px ;
`
export const Category = styled.View`
  flex-direction:  row;
  align-items: center;
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 5px 0 0;
`
export const CategoryName = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`
export const DateTransaction = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`

