import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";
import { showSuccess, showError} from "../components/Utility/comum";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({})



export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "matimbe  jose",
    email: "matimbejose@gmail.com",
    password: "1212323"
  })
  const [loading, setLoading] = useState(true)
  const [loadingAuth, setLoadingAuth] = useState(false);

    //vericar se ha nada no user 
    useEffect(() => {
      async function loadStorege() {
        const storegeUser = await AsyncStorage.getItem('Auth_user')
  
        if (storegeUser) {
          setUser(JSON.parse(storegeUser))
          setLoading(true)
        }
        setLoading(false)
      }
  
      loadStorege()
    }, [])
  

    

  //create user type student
  const registerStudent = async (name, email, password, lat, long) => {
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

    console.log("gravou os dados no telefone")
  }

  //login user type student
  const loginStudent = async (email, password) => {
    try {

      let dados = {
        email: email,
        password: password,
      }
      const response = await api.post('/loginuser', dados);

      const { success, data, message } = response.data;

      // Verifique os valores de retorno
      console.log(success); // true
      console.log(data.token); // Token de acesso
      console.log(data.name); // Nome do usuário
      console.log(message); // Mensagem de sucesso

      // Realize as ações desejadas com os dados retornados
      // ...

      if (success) {
        setUser(dados)
        storegeUser(dados);
        console.log("logado com sucesso")
      } else {
        console.log("erro ao logar o usuario")
      }

    } catch (error) {
      console.error(error);
    }

  }






  return (

    <AuthContext.Provider value={{
      signed: !!user,
      user,
      registerStudent,
      loadingAuth,
      loginStudent,
      loading
    }}>
      {children}
    </AuthContext.Provider>

  )

}