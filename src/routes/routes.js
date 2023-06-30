import React, { useContext } from "react";
import AuthRoutes from "./auth.route";
import AppRoutes from "./app.route";
import { AuthContext } from "../contexts/auth";
import { View, ActivityIndicator } from "react-native";


//esse senhor eh que decide que esta logado entao vou  mandar pra qui etc.

export default function Routes() {
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    )

  } else {
    return (
      signed ? <AppRoutes /> : <AuthRoutes />
    )
    
  }


}