import React, { useContext } from 'react';
import { Container,StudentImageView, SelectImageText, TextDetails,StudentDetails,StudentViwDetailsText,ProfileImageView, LougoutView, Form,EditButton,ImageProfile} from './style';
import { SubmitButton, SubmitText} from '../Login/styles'
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
const { user, logoutUser} = useContext(AuthContext);
const navigation = useNavigation();

 return (

  <Form>
      <EditButton onPress={() => navigation.navigate("ProfileEdit") }> 
    <FontAwesome5 name="edit" size={30} color="black" />
      </EditButton>

  <Container>


    <StudentImageView>
      <ProfileImageView>
    <ImageProfile
      source={{ 
        uri: `http://10.0.2.2:8989/${user.image}`
      }}
    />
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
        <TextDetails> {user.number_phone }</TextDetails>
    </StudentViwDetailsText>

    </StudentDetails>


<LougoutView>
    <SubmitButton onPress={ logoutUser }> 
      <SubmitText>Deslogar </SubmitText>
    </SubmitButton>
</LougoutView>

  </Container>
  </Form>
  );
}