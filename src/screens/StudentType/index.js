import { Platform, ActivityIndicator } from 'react-native'
import { Container, DataForm, Form, ContentForm, InputTexto, TextForm, LocationButton, InputView } from './styles'
import { SubmitButton, SubmitText } from '../Login/styles'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { showError } from '../../components/Utility/comum'



export default function StudentType() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfim, setPasswordConfim] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);


  const { registerStudent, loadingAuth } = useContext(AuthContext)



  function handleRegisterStudent() {

    if (password != passwordConfim) {
      showError("as senhas nao conferem")
      return;
    } else {
      registerStudent(name, email, password, lat, long)
    }


  }



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


            <InputView>
              <TextForm>Nome completo</TextForm>
              <InputTexto
                placeholder="Nome completo"
                outCorrent={false}
                autoCapitalize="none"
                value={name}
                returnKeyType="next"
                onChangeText={(text) => setName(text)}
              />
            </InputView>


            <InputView>

              <TextForm>Email valido</TextForm>
              <InputTexto
                outCorrent={false}
                autoCapitalize="none"
                value={email}
                returnKeyType="next"
                onChangeText={(text) => setEmail(text)}
                placeholder="Email valido"
              />
            </InputView>

            <InputView>
              <TextForm>Senha</TextForm>
              <InputTexto
                outCorrent={false}
                autoCapitalize="none"
                value={password}
                returnKeyType="next"
                onChangeText={(text) => setPassword(text)}
                placeholder="Digite a senha"
              />
            </InputView>

            <InputView>
              <TextForm>Confirmar senha</TextForm>
              <InputTexto
                outCorrent={false}
                autoCapitalize="none"
                value={passwordConfim}
                returnKeyType="next"
                onChangeText={(text) => setPasswordConfim(text)}
                placeholder="Email valido"
              />
            </InputView>

            <LocationButton>
              <SubmitText>Selecionar localização</SubmitText>
            </LocationButton>


            <SubmitButton onPress={handleRegisterStudent}>
              {
                loadingAuth ? (
                  <ActivityIndicator size={20} color="#FFF" />
                ) : (
                  <SubmitText>Criar conta</SubmitText>
                  )
              }
            </SubmitButton>




          </ContentForm>


        </Form>



      </DataForm>
    </Container>
  )
}

