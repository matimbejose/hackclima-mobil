import React, { useContext, useState } from 'react'
import { Platform } from 'react-native'
import { Container, ImageLogo, InputTexto, SubmitButton, SubmitText, CreateAccoutView, CreateAccountButton, CreateNewAccount, Background, Form, TextForm,TextNewAccount} from './styles'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth'


export default function Login() {
    const navigation = useNavigation();
    const [ email, setEmail] = useState()
    const [ password, setPassword] = useState();


    const { loginStudent, loadingAuth } = useContext(AuthContext)


    function handleLogin() {
        loginStudent(email, password);
    }


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

                    <TextForm>Email</TextForm>
                    <InputTexto
                        placeholder='Digite seu email '
                        outCorrent={false}
                        autoCapitalize="none"
                        value={email}
                        returnKeyType="next"
                        onChangeText={(text) => setEmail(text)}
                    />

                    <TextForm>Senha</TextForm>
                    <InputTexto
                        placeholder='Digite sua senha'
                        outCorrent={false}
                        autoCapitalize="none"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                </Form>

                    <SubmitButton onPress={ handleLogin } >
                        <SubmitText>Acessar</SubmitText>
                    </SubmitButton>

                <CreateAccoutView>
                    <TextNewAccount> Nao possui uma conta ?</TextNewAccount>

                    <CreateAccountButton onPress={() => navigation.navigate('TypeAccount')}>
                        <CreateNewAccount>  criar uma conta</CreateNewAccount>
                    </CreateAccountButton>
                </CreateAccoutView>


            </Container>
        </Background>
    )
}

