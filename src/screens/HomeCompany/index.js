import React,{ useContext} from 'react';
import { Linking } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Container,ImageCompany,DataCompeny,NameResp,WelcomText,ButtonsView,ButtonController,TextButton,ScrollContainer,GraphicTitle,ButtonContainerView} from './styles';
import { MaterialIcons,AntDesign} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import Graphic from '../../components/Graphic';
import { SubmitButton, SubmitText } from '../Login/styles';



export default function HomeCompany() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);


 return (
    <Container>

      <ImageCompany 
         source={{ uri: user.imageUrl }}
        />

      <ScrollContainer>


        <DataCompeny>
        <WelcomText>
          Ola 
          <NameResp> Matimbe jose</NameResp>
          </WelcomText>  
          <WelcomText>Bem vindo  o que vai fazer hoje ?</WelcomText>
        </DataCompeny>

        <GraphicTitle>Visualizações</GraphicTitle>
        <Graphic  />

        <GraphicTitle>Chamadas</GraphicTitle>
        <Graphic />



        <ButtonsView>

          <ButtonContainerView>
          <ButtonController onPress={() => Linking.openURL('tel:+258847787067')}>
          <AntDesign name="customerservice" size={70} color="#FFF" />
          <TextButton>Assistencia</TextButton>
          </ButtonController>
          </ButtonContainerView>

          <ButtonContainerView>
          <ButtonController onPress={() => navigation.navigate('PymentCompany')}>
          <MaterialIcons name="payments" size={70} color="#FFF" />
          <TextButton>Pagamentos</TextButton>
          </ButtonController>
          </ButtonContainerView>

          <SubmitButton>
            <SubmitText>Sair</SubmitText>
          </SubmitButton>
 

        </ButtonsView>





      </ScrollContainer>
 

    </Container>

  );
}