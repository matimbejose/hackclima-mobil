import {
  Platform,
} from 'react-native'



import { Container, DataForm, Form, ContentForm, InputTexto, TextForm, LocationButton, InputView, ImageView, ImageSelectButton, TextAreaView, TextAreaContent } from './styles'
import { SubmitButton, SubmitText } from '../Login/styles'
import { Ionicons } from '@expo/vector-icons';

export default function AboutCompany() {

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

            <ImageView>


              <ImageSelectButton>
                <Ionicons name="business" size={50} color="black" />
              </ImageSelectButton>

              <TextForm>Selecionar imagem</TextForm>
            </ImageView>



            <InputView>
              <TextForm>Nome da instituição</TextForm>
              <InputTexto
                placeholder="Nome completo"
              />
            </InputView>


            <InputView>

              <TextForm>Email valido</TextForm>
              <InputTexto
                placeholder="Email valido"
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


            {/* <InputView>
            <TextForm>Confirmar senha</TextForm>
            <InputTexto
              placeholder="Email valido"
            />
            </InputView>

            <InputView>
            <TextForm>Confirmar senha</TextForm>
            <InputTexto
              placeholder="Email valido"
            />
            </InputView> */}

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

