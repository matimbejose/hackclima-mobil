import React from 'react';
import { Container,StudentImageView, SelectImageText, TextDetails,StudentDetails,StudentViwDetailsText,ProfileImageView, LougoutView} from './style';
import { SubmitButton, SubmitText} from '../Login/styles'
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'; 



export default function Profile() {
 return (
  <Container>

    <StudentImageView>

      <ProfileImageView>
    <AntDesign name="user" size={75} color="black" />

      </ProfileImageView>
    <SelectImageText>Nome do estudante</SelectImageText>
    <SelectImageText>Localizacao do estudante</SelectImageText>
    </StudentImageView>

    <StudentDetails>

    <StudentViwDetailsText>
    <MaterialCommunityIcons name="email-outline" size={35} color="black" />    
    <TextDetails> emaildoestudante@gmail.com</TextDetails>
    </StudentViwDetailsText>

    <StudentViwDetailsText>
    <MaterialCommunityIcons name="account-key-outline" size={35} color="black" />
    <TextDetails> Senha do Estudante</TextDetails>
    </StudentViwDetailsText>

    </StudentDetails>


<LougoutView>
    <SubmitButton>
      <SubmitText>Deslogar </SubmitText>
    </SubmitButton>

</LougoutView>

  </Container>
  );
}