import React, { useState, createContext } from "react";
import api from "../services/api";
import { Alert } from 'react-native'



export const AuthContext = createContext({})



export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    //create user type student
    async function createStudent(name, email, password, lat, lang) {

        const studentData = {
            name: name,
            email: email,
            password: password,
            lat: lat,
            lang: lang
        }

        console.log(studentData);

        try {
            const response = await api.post('/createuseraccount', studentData)
            Alert.alert("conta criada com sucesso.")
        } catch (error) {
            Alert.alert('Ocorreu um problema! ')
        }


    }





    return (
        // <AuthContext.Provider value={{ user }}>
        //     { children }
        // </AuthContext.Provider>
        <AuthContext.Provider value={{ signed: !!user, user, createStudent }}>
            {children}
        </AuthContext.Provider>
    )

}