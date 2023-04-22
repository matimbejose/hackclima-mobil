import React from 'react'
import { View, Text, Image, TextInput, StatusBar} from 'react-native'

import Logo from '../../assets/logo.png'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Login() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
            <Image
                source={Logo}
                style={styles.logo}
            />

            <View style={ styles.formulario}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome de Usuario'
                />
 
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                />

                <TouchableOpacity style={styles.botaoEntrar}>
                    <Text style={{ color: '#FFF'}}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.ultimoTexto}>
                <Text style={{ color: '#FFF'}}> Nao possui uma conta ?</Text>

                <TouchableOpacity>
                    <Text style={{ color: '#FF0000'}}> Criar nova conta</Text>
                </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

