import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";
import { showSuccess, showError} from "../components/Utility/comum";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({})


export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [tokenAcess, setTokenAcess] = useState();

    //vericar se ha nada no user 
    useEffect(() => {
      async function loadStorege() {
        const storegeUser = await AsyncStorage.getItem('Auth_user')
        const storageTokenAcess = await AsyncStorage.getItem('Auth_user_token')

        console.log(`Useefet: ${storageTokenAcess}`);
  
        if (storegeUser) {
          setUser(JSON.parse(storegeUser))
          setTokenAcess(storageTokenAcess)
          setLoading(true)
        }
        setLoading(false)
      }
  
      loadStorege()
    }, [])
  

  //create user type student
  const registerUser = async (name, email, password, lat, long) => {
    setLoadingAuth(true)
    try {   

      let dados = {
        name: name,
        email: email,
        password: password,
        lat: lat,
        long: long,
      }

      const response = await api.post('/registeruser', dados);
      const { success, data, message } = response.data;
      // Verifique os valores de retorno
      console.log(success); // true
      console.log(data.token); // Token de acesso
      console.log(data.name); // Nome do usuário
      console.log(message); // Mensagem de sucesso


      if (success) {
        showSuccess("Conta criada com sucesso")
        storegeUser(dados)
        setUser(dados)
      }

      setLoadingAuth(false);
      // Realize as ações desejadas com os dados retornados
    } catch (error) {
      // Lida com erros de requisição
      showError("Ops! algo deu errado!")
      console.error(error);
      setLoadingAuth(false);
    }
  }

  //save data in AsyncStorage
  async function storegeUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  async function storegaTokenAcess(data) {
    await AsyncStorage.setItem('Auth_user_token', data)
  }

  //login user type student
  const loginUser = async (email, password) => {
    setLoadingAuth(true)
    try {

      const dados = {
        email: email,
        password: password,
      };
  
      const response = await api.post('/loginuser', dados);
  
      const { data, message } = response.data;
  
      // Verifique os valores de retorno
      console.log(data.access_token); 
      
  
      if (message == 'User login successfully.') {
        // Define o usuário autenticado
        setUser(data.user); 

        // Armazena os dados do usuário no armazenamento local (ou cookies/sessão)
        storegeUser(data.user); 

        storegaTokenAcess(data.access_token)


        setTokenAcess(data.access_token)

      } else {
        console.log("erro ao logar o usuário");
      }

    } catch (error) {
      console.error(error);
    }
    setLoadingAuth(false);
  };
  

  //logout user
  const logoutUser = async () => {

    
    try {

      console.log(`Logout: ${tokenAcess}`);
      // Faz uma solicitação para o endpoint de logout na API
      const response = await api.post('/logout', {}, {
        headers: {
          Authorization: `Bearer ${tokenAcess}`
        }
      });
  
      // Limpa as informações de autenticação armazenadas localmente



      if(response.data.message == 'Logout successful.') {
        await AsyncStorage.removeItem('Auth_user');
        await AsyncStorage.removeItem('Auth_user_token');
        setUser(null);
      }
  

    } catch (error) {
      console.error(error);
    }
  };    





  return (

    <AuthContext.Provider value={{
      signed: !!user,
      user,
      registerUser,
      loadingAuth,
      loginUser,
      logoutUser,
      loading
    }}>
      {children}
    </AuthContext.Provider>

  )

}