import React, { useContext } from "react";
import AuthRoutes from "./auth.route";
import AppRoutes from "./app.route";
import AppRoutesCompany from "./app.company.route"

import { AuthContext } from "../contexts/auth";
import { View, ActivityIndicator } from "react-native";


//esse senhor eh que decide que esta logado entao vou  mandar pra qui etc.

export default function Routes() {
  const { signed, loading, user} = useContext(AuthContext)
  let renderedRoutes;


  if (signed) {

   if(user.type == 'person') {
    renderedRoutes = <AppRoutes />;

   } else {
    renderedRoutes = <AppRoutesCompany />
   }

  } else {
    renderedRoutes = <AuthRoutes />;
  }


  if (loading) {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={45} color="#131313" />
      </View>
      )

  } else {

    return renderedRoutes;

  }


}