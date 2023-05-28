import { Alert } from 'react-native'



function showError() {
    Alert.alert('Ops! Ocorreu um problema!')
}

function showSuccess() {
    Alert.alert('Sucesso!')
}

export { server, showError, showSuccess }