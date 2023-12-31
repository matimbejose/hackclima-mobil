import {
  Platform,
} from 'react-native'

import { Container, DataForm, Form, ContentForm, InputTexto, TextForm, LocationButton, InputView, TextAreaView, TextAreaContent } from './styles'
import { SubmitButton, SubmitText } from '../Login/styles'
import { Ionicons } from '@expo/vector-icons';
import { SelectImageButton,SelectImageView,SubmitImageText } from '../StudentType/styles'

export default function CompanyType() {

  return (
    <Container>
      <DataForm
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>

        <Form
          nestedScrollEnabled
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ paddingBottom: 200 }}
        >

          <ContentForm>

            {/* <SelectImageButton>
            <SelectImageView>
            <Ionicons name="business" size={70} color="black" />            
            <SubmitImageText>Selecionar  Imagem</SubmitImageText>
            </SelectImageView>
            </SelectImageButton> */}


       <InputView>
              <TextForm>Nome unidade sanitária</TextForm>
              <InputTexto
                placeholder="Nome unidade sanitária"
              />
            </InputView>
            <InputView>

              <TextForm>Numero de identificacao</TextForm>
              <InputTexto
                placeholder="Numero de identificacao"
              />
            </InputView> 

          <InputView>
              <TextForm>Senha</TextForm>
              <InputTexto
                placeholder="Email valido"
              />
            </InputView>

       <InputView>
              <TextForm>Confirmar senha</TextForm>
              <InputTexto
                placeholder="Email valido"
              />
            </InputView> 

       <InputView>
              <TextForm>Nome do responsável</TextForm>
              <InputTexto
                placeholder="Nome do responsável"
              />
            </InputView> 

{/* 
            <InputView>
              <TextForm>Catalogo</TextForm>
              <TextAreaView>

                <TextAreaContent
                  underlineColorAndroid="transparent"
                  placeholder="Cursos lecionados"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                />

              </TextAreaView>
            </InputView>
             */}
            <LocationButton>
              <SubmitText>Selecionar localização</SubmitText>
            </LocationButton>

            <SubmitButton>
              <SubmitText>Criar conta</SubmitText>
            </SubmitButton>


          </ContentForm>


        </Form>



      </DataForm>
    </Container>
  )
}
