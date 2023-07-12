import React from 'react';
import { Modal } from 'react-native';
import { Container,ImageBanner, NameCompany,DescriptionCompanyView, DescriptionCompany,ModalCompany} from './style';


export default function HomeItem( { data } ) {
  const [visibleModal, setVisibleModal] = useState(false);


  function limitCharacters(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  }

  return (
     <Container> 
 
         <ImageBanner 
         source={{ uri: data.foto }}
         />    

         <DescriptionCompanyView>
         <NameCompany>{ data.nome }</NameCompany>
         <DescriptionCompany>{limitCharacters(data.sinopse, 25)}</DescriptionCompany>
         </DescriptionCompanyView>

         <ModalCompany 
        transparent={true} 
        animationType='slide'
        visible={visibleModal}
        
        />

        <AboutCompany com />
 
     </Container>
  );
}


