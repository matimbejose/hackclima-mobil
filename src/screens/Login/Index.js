import React from 'react'
import { Platform } from 'react-native'
import { Container, ImageLogo, InputTexto, SubmitButton, SubmitText, CreateAccoutView, CreateAccountButton, CreateNewAccount, Background, Form, TextForm} from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    return (

        <Background>
            <Container
                behavior={Platform.OS == 'ios' ? 'padding' : ''}
                enabled
            >


                <ImageLogo
                    source={require('../../assets/logo.png')}
                />

                <Form>

                    <TextForm>Nome do  usuario</TextForm>
                    <InputTexto
                        placeholder='Nome de Usuario'
                    />

                    <TextForm>Senha</TextForm>
                    <InputTexto
                        placeholder='Senha'
                    />
                </Form>

                    <SubmitButton>
                        <SubmitText>Acessar</SubmitText>
                    </SubmitButton>

                <CreateAccoutView>
                    <SubmitText> Nao possui uma conta ?</SubmitText>

                    <CreateAccountButton onPress={() => navigation.navigate('TypeAccount')}>
                        <CreateNewAccount>  criar uma conta</CreateNewAccount>
                    </CreateAccountButton>
                </CreateAccoutView>


            </Container>
        </Background>
    )
}

