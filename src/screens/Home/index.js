import React, { useState, useEffect, useRef} from 'react';
import { ActivityIndicator, View} from 'react-native'
import { Container,ListaItem } from './style.js';
import HomeItem from '../../components/HomeItem/'
import axios from 'axios';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [companys, setCompanys] = useState();


  useEffect(() => {

    async function loadCompanys() {
      //nao ha setFilmes sem antes haver resposta por parte da api
      const response = await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes')
      ///no response.data temos o nosso couteudo da api 
      setCompanys(response.data)
      setLoading(false)
    }

    loadCompanys()

  }, [])





    if(loading) {

      return(

        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color="black" size={45} />
      </View>

      );
    
    }  else {
      return (

        <Container>

        <ListaItem
        showsVerticalScrollIndicator={true}
        data={companys}
        numColumns={2}       
        keyExtractor={ item =>  String(item.id)}
        renderItem={({ item }) => (<HomeItem data={item} />)}
        />

        </Container>
        );

    }

   
  
}