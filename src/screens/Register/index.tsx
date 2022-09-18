import React, { useState } from 'react'
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native'
import { useForm } from  'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Title, Header, Form, Fields, TransactionBox } from './styles'
import { InputForm } from '../../components/Form/InputForm'
import { Button } from '../../components/Form/Button'
import { TransactionButton } from '../../components/Form/TransactionButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { CategorySelect } from '../../screens/CategorySelect'

interface FormData {
  name: string;
  amount: string;
}
const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome obrigatório'),
  amount: Yup
  .number()
  .typeError('Valor deve ser número')
  .positive('O numero não pode ser negativo')
  .required('Valor obrigatório')
})

export function Register() {
  const [ transactionType, setTransactionType ] = useState('')
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false)

  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema)})


  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleSubmitForm(form: FormData) {
    if(!transactionType) {
      return Alert.alert('Formulario' , 'Selecione a transação!')
    }
    if(category.key === 'category') {
      return Alert.alert('Formulario' , 'Selecione uma categoria!')
    }

    const data =  {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>


        <Form>
          <Fields>
            <InputForm 
              name='name'
              placeholder='Nome'
              placeholderTextColor={'#c3c3c3'}
              control={control}
              autoCapitalize="sentences"
              autoCorrect={false}
              error={ errors.name && errors.name.message}
            />
            <InputForm 
              name='amount'
              placeholder='Preço'
              placeholderTextColor={'#c3c3c3'}
              control={control}
              keyboardType="numeric"
              error={ errors.amount && errors.amount.message }
            />
            <TransactionBox>
              <TransactionButton 
                title='income'
                type='up'
                onPress={() => handleTransactionTypeSelect('up')}
                isActive={transactionType ==='up'}
              />
              <TransactionButton 
                title='outcome'
                type='down'
                onPress={() => handleTransactionTypeSelect('down')}
                isActive={transactionType ==='down'}
              />
            </TransactionBox>  
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />  
          </Fields>  
          <Button
          title='Enviar'
          onPress={handleSubmit(handleSubmitForm)}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}