import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize' 

interface TypeCustomProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeCustomProps>`
  background-color: ${({ theme, type }) => 
  type  === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(330)}px ;
  border-radius: 7px ;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
  border-width: 1px;
  border-color: ${({ theme, type }) => 
  type  === 'total' ? theme.colors.secondary : theme.colors.primary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<TypeCustomProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => 
  type  === 'total' ? theme.colors.shape : theme.colors.text_dark};

`

export const Icon = styled(Feather)<TypeCustomProps>`
  font-size: ${RFValue(40)}px;

  ${(props) => props.type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${(props) => props.type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}

  ${(props) => props.type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `}
`

export const Footer = styled.View`


`

export const Amount = styled.Text<TypeCustomProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) => 
  type  === 'total' ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;

`

export const LastTrans = styled.Text<TypeCustomProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) => 
  type  === 'total' ? theme.colors.shape : theme.colors.text};
  
`
