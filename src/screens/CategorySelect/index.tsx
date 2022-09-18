import React from 'react'
import { FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import { Button } from '../../components/Form/Button'

import { 
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: ( category: Category ) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({ category, setCategory, closeSelectCategory }: Props ) {

function handleChooseCategory( category: Category ) {
  setCategory(category)
}  
  return(
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>
      <FlatList 
        style={{ flex:1 , width: '100%'}}
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleChooseCategory(item)}
            isActive={ category.key === item.key }
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
         )}
         ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
          <Button 
            onPress={closeSelectCategory}
            title='Selecionar'/>
      </Footer>      

    </Container>
  )
}