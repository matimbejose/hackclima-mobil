import React,{ useContext } from "react";
import AuthRoutes from "./auth.route";
import AppRoutes from "./app.route";
import { AuthContext } from "../contexts/auth";

//esse senhor eh que decide que esta logado entao vou  mandar pra qui etc.

export default function Routes() {

const  { signed } = useContext(AuthContext)

    return (
      signed ?  <AppRoutes />  : <AuthRoutes />
    )

}