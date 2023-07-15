import React from 'react';
import { Container,Texto,Content, ImageCompany,CatalogText,ButtonView} from './styles';
import { SubmitButton, SubmitText} from '../Login/styles'


export default function AboutCompany(props) {

  return (
    <Container>


      <Content showsVerticalScrollIndicator={false}>  
        <ImageCompany   
           source={{ uri: props.company.foto }}
        />

     <Texto>{ props.company.sinopse } </Texto>


     <ButtonView>
     <SubmitButton>
      <SubmitText>Efetuar ligação</SubmitText>
     </SubmitButton>

     </ButtonView>

     <CatalogText>Catalogo de cursos</CatalogText>
     <Texto>{ props.company.sinopse } </Texto>

     <ButtonView>

     <SubmitButton>
      <SubmitText>Abrir no mapa</SubmitText>
     </SubmitButton>

     </ButtonView>

      </Content>



    </Container>
  )


}

