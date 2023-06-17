import { Alert } from 'react-native'



function showError(msg) {
    Alert.alert(msg)
}

function showSuccess(msg) {
    Alert.alert(msg)
}

export { showError, showSuccess }