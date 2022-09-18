import styled , { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native'

interface TransactionTypeProps {
  type: 'up' | 'down';
} 
interface ContainerButtonProps {
  isActive: boolean;
  type: 'up' | 'down';
} 

export const Container = styled(TouchableOpacity)<ContainerButtonProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  border: ${({ isActive  }) => isActive ? 0 : 1.5 }px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 16px;
  justify-content: center;

  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
  `}
  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
  `}
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark}; 
`

export const Icon = styled(Feather)<TransactionTypeProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 14px;
  color: ${({ theme, type }) => 
  type === 'up' ? theme.colors.success : theme.colors.attention}; 
`
