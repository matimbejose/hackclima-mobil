import React, { useState, createContext } from "react";
import api from "../services/api";
import { showSuccess } from "../components/Utility/comum";

export const AuthContext = createContext({})



export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "matimbe",
    lat: "20"
  })
  const [loading, setLoading] = useState(true)
  const [loadingAuth, setLoadingAuth] = useState(false);


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
      }

      setUser(dados);
      setLoadingAuth(false);
      // Realize as ações desejadas com os dados retornados
    } catch (error) {
      // Lida com erros de requisição
      console.error(error);
      setLoadingAuth(false);
    }
  };


  //create user type student
  const loginStudent = async (name, email, password, lat, long) => {
    try {

      let dados = {
        name: name,
        email: email,
        password: password,
        lat: lat,
        long: long,
      }
      const response = await api.post('/loginuser', dados);

      setUser(dados);


      const { success, data, message } = response.data;

      // Verifique os valores de retorno
      console.log(success); // true
      console.log(data.token); // Token de acesso
      console.log(data.name); // Nome do usuário
      console.log(message); // Mensagem de sucesso

      // Realize as ações desejadas com os dados retornados
      // ...

    } catch (error) {
      // Lida com erros de requisição
      console.error(error);
    }
  };




  return (

    <AuthContext.Provider value={{ signed: !!user, user, registerStudent, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )

}