import React, { useState, createContext } from "react";
import api from "../services/api";


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


        try {
            const response = await api.post('/createuseraccount', studentData)
            console.log("criado com sucesso")
        } catch (error) {
            console.log("erro ao criar")
        }


    }



    return (
        <AuthContext.Provider value={{ signed: !!user, user, createStudent }}>
            {children}
        </AuthContext.Provider>
    )



}