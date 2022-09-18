import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  margin-top: 16px;
  border-radius: 5px
`;

export const Category = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular} ;

`
export const Icon = styled(Feather)`
  font-size: ${RFValue(26)}px ;
`
 
 
