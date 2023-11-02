import React from "react";
import { Background, SubmitButton, SubmitText, ImageLogo } from '../Login/styles'
import { Container,  TypeAccountText} from './styles'
import { useNavigation } from "@react-navigation/native";




export default function TypeAccount() {
    const navigation = useNavigation()

    return (
        <Background>
            <Container>

                <ImageLogo
                    source={require('../../assets/logo.png')}
                />

                <TypeAccountText>Selecione o tipo de conta a criar</TypeAccountText>


                <SubmitButton onPress={() => navigation.navigate("StudentType")}>
                    <SubmitText>Utente</SubmitText>
                </SubmitButton>

                <SubmitButton onPress={() => navigation.navigate("CompanyType")}>
                    <SubmitText>Unidade sanitária</SubmitText>
                </SubmitButton>

            </Container>


        </Background>
    )
}