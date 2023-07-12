import React, { useContext } from 'react';
import { Container,StudentImageView, SelectImageText, TextDetails,StudentDetails,StudentViwDetailsText,ProfileImageView, LougoutView, Form,EditButton} from './style';
import { SubmitButton, SubmitText} from '../Login/styles'
import { AntDesign,MaterialCommunityIcons, Feather} from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
const { user } = useContext(AuthContext);
const navigation = useNavigation();

  function handleLogout() {
    console.log("vc tentou se deslogar")
  }

 return (

  <Form>
      <EditButton onPress={() => navigation.navigate("ProfileEdit") }> 
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
    <TextDetails> { user.email }</TextDetails>
    </StudentViwDetailsText>

    
    <StudentViwDetailsText>
    <Feather name="phone" size={35} color="black" />
        <TextDetails> {user.phoneNumber }</TextDetails>
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