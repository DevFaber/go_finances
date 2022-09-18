import React from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

import { Container, Error } from './styles'
import { Input } from '../Input'

interface Props extends TextInputProps {
  control: Control,
  name: string,
  error: string,
}

/**
O react-hook-form usa a propriedade control dentro do Container e precisa ter as propriedades declaradas na interface
O controller é o componente que vai renderizar o input por dentro de sua propriedade e possui duas pripriedades:
control onde deve ser passada a propriedade control e o render que vai receber as propriedades onchange, onBlur e value
por fim deve renderizar o componente de input customizado
*/



export function InputForm({ control, name, error, ...rest }: Props) {
  return(
    <Container>
      <Controller 
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      { error && <Error>{error}</Error> }
          

    </Container>
  )
}