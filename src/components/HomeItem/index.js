import React, { useState,useRef} from 'react';
import { Container,ImageBanner, NameCompany,DescriptionCompanyView, DescriptionCompany} from './style';
import AboutCompany from '../../screens/AboutCompany'
import RBSheet from "react-native-raw-bottom-sheet";



export default function HomeItem( { data } ) {
  const refRBSheet = useRef();

  function limitCharacters(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  }

  return (
     <Container  onPress={() => refRBSheet.current.open()} > 
 
         <ImageBanner 
         source={{ uri: data.foto }}
         />    

         <DescriptionCompanyView>
         <NameCompany>{ data.nome }</NameCompany>
         <DescriptionCompany>{limitCharacters(data.sinopse, 25)}</DescriptionCompany>
         </DescriptionCompanyView>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        dragFromTopOnly={true}
        customStyles={{
          container: {
            height: '85%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFF'
          },
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          } 
        }}
      >
           <AboutCompany  company={ data }/>

      </RBSheet>


     </Container>
  );
}


