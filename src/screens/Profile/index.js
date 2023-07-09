import React, { useContext } from 'react';
import { Container,StudentImageView, SelectImageText, TextDetails,StudentDetails,StudentViwDetailsText,ProfileImageView, LougoutView, Form,EditButton} from './style';
import { SubmitButton, SubmitText} from '../Login/styles'
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AuthContext } from '../../contexts/auth';


export default function Profile() {
const { user } = useContext(AuthContext);


  function handleLogout() {
    console.log("vc tentou se deslogar")
  }

  

 return (

  <Form>
      <EditButton>
    <FontAwesome5 name="edit" size={30} color="black" />
      </EditButton>

  <Container>


    <StudentImageView>
      <ProfileImageView>
    <AntDesign name="user" size={75} color="black" />
      </ProfileImageView>
    <SelectImageText>{ user.name}</SelectImageText>
    <SelectImageText>Localizacao do estudante</SelectImageText>
    </StudentImageView>

    <StudentDetails>

    <StudentViwDetailsText>
    <MaterialCommunityIcons name="email-outline" size={35} color="black" />    
    <TextDetails> Emaildoestudante@gmail.com</TextDetails>
    </StudentViwDetailsText>

    <StudentViwDetailsText>
    <MaterialCommunityIcons name="account-key-outline" size={35} color="black" />
    <TextDetails> Senha do Estudante</TextDetails>
    </StudentViwDetailsText>
    </StudentDetails>


<LougoutView>
    <SubmitButton onPress={ handleLogout }> 
      <SubmitText>Deslogar </SubmitText>
    </SubmitButton>
</LougoutView>

  </Container>
  </Form>
  );
}